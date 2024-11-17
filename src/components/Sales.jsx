import React from 'react';

    const trucksData = [
      { id: 1, registration: 'Truck 1', driver: 'Driver A', deliveries: [1, 2] },
      { id: 2, registration: 'Truck 2', driver: 'Driver B', deliveries: [3, 4] },
      // ... more trucks
    ];

    function Sales() {
      return (
        <div>
          <h1>Truck Allocations</h1>
          <ul>
            {trucksData.map(truck => (
              <li key={truck.id}>
                {truck.registration} - {truck.driver} - Deliveries: {truck.deliveries.join(', ')}
              </li>
            ))}
          </ul>
        </div>
      );
    }

    export default Sales;
