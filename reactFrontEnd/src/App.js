import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar';
import RouteList from './components/RouteList';
import VehicleMap from './components/VehicleMap';

function App() {
  const [routes, setRoutes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRoutes, setFilteredRoutes] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    // Fetch route data from the backend
    axios.get('api/routes')
      .then((response) => {
        setRoutes(response.data);
        setFilteredRoutes(response.data); // Initialize filtered routes
      })
      .catch((error) => console.error('Error fetching routes:', error));
  }, []);

  // Handle search
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Filter routes based on the search term
    const filtered = routes.filter((route) =>
      route.lineNumber.includes(term) || route.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredRoutes(filtered);
  };

  const fetchVehicles = (routeID) => {
    axios.post('api/vehicles', { routeID })
      .then((response) => {
        setVehicles(response.data.data.list); // Access the list of vehicles from response.data.data.list
      })
      .catch((error) => {
        console.error('Error fetching vehicles:', error);
      });
  };

  return (
    <div>
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      <RouteList filteredRoutes={filteredRoutes} fetchVehicles={fetchVehicles} />
      <VehicleMap vehicles={vehicles} />
    </div>
  );
}

export default App;