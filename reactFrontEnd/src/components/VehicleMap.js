import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const tramIcon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/2877/2877080.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

function VehicleMap({ vehicles }) {
  return (
    <div>
      <h1>Vehicle Tracker</h1>
      <MapContainer
        center={[47.483944, 19.105474]} // Default center of the map
        zoom={13}
        style={{ height: '100vh', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {vehicles.length > 0 ? (
          vehicles.map((vehicle) => (
            <Marker
              key={vehicle.vehicleId}
              position={[vehicle.location.lat, vehicle.location.lon]}
              icon={tramIcon}
            >
              <Popup>
                <b>License Plate:</b> {vehicle.licensePlate} <br />
                <b>Model:</b> {vehicle.model} <br />
                <b>Status:</b> {vehicle.status} <br />
                <b>Route:</b> {vehicle.routeId}
              </Popup>
            </Marker>
          ))
        ) : (
          <p>No vehicles available.</p>
        )}
      </MapContainer>
    </div>
  );
}

export default VehicleMap;