import { Routes, Route, Navigate } from 'react-router-dom';
    // ... other imports

    import Login from './components/Login';

    function App() {
      return (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={<Navigate to="/login" />} // Redirect to login page by default
          />
          {/* other routes - protect based on authentication */}
          <Route
            path="/delivery-manager"
            element={/* Add authentication check here - e.g., <PrivateRoute role="manager"> <DeliveryManager/> </PrivateRoute> */}
            <DeliveryManager/>}
          />
          {/* ... other routes */}
        </Routes>
      );
    }

    // ...
