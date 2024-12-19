import React from 'react';

function RouteList({ filteredRoutes, fetchVehicles }) {
  return (
    <ul>
      {filteredRoutes.map((route) => (
        <li key={route.routeID}>
          <button onClick={() => fetchVehicles(route.routeID)}>{route.lineNumber} - {route.name}</button>
        </li>
      ))}
    </ul>
  );
}

export default RouteList;