import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import { data } from '../data'; // Import shared data

    function FleetManagement() {
      const [trucks, setTrucks] = useState(data.trucks); // Use shared data

      // ... (add/edit/save functions updating the shared data.trucks array)
    }

    // ...
