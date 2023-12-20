import '../admin.css';
import { useState } from 'react';
import { useNavigate , NavLink } from 'react-router-dom';


function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3030/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      navigate('/');
    }
  };

  return (
    <div className="admin_login_main_container">
      <div className="admin_login_container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">
            Username:
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

export default AdminLogin;
