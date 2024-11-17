import React, { useState } from 'react';
    import { useNavigate } from 'react-router-dom';

    function Login() {
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');
      const navigate = useNavigate();

      const handleSubmit = (e) => {
        e.preventDefault();
        // Replace with actual authentication logic
        if (username === 'test' && password === 'password') {
          // Redirect to appropriate page based on role (e.g., /delivery-manager, /driver, /sales)
          navigate('/delivery-manager'); // Example: redirect to Delivery Manager
        } else {
          setError('Invalid username or password');
        }
      };

      return (
        <div>
          <h1>Login</h1>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Login</button>
          </form>
        </div>
      );
    }

    export default Login;
