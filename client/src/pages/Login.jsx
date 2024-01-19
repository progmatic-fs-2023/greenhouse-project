import '../login.css';
import '../components/HomePageComponents/card.css';

import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { API_URL } from '../constants';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const responseData = await response.json();

    if (response.ok) {
      login(responseData);
      navigate('/');
    }
  };

  return (
    <div className="login_main_container">
      <div className="login_container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">
            Username:
            <br />
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor="password">
            Password:
            <br />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Login</button>
          <h3>OR</h3>
          <NavLink to="/register">
            <button type="button">Create account</button>
          </NavLink>
        </form>
      </div>
    </div>
  );
}

export default Login;
