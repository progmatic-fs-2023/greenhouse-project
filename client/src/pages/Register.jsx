import '../login.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../constants';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState('');
  const [showButton, setShowButton] = useState('false');
  const navigate = useNavigate();

  const handleReg = async (e) => {
    e.preventDefault();

    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, email }),
    });
    if (response.ok) {
      navigate('/login');
    }
  };

  useEffect(() => {
    if (password === '' || password2 === '') {
      setShowButton(false);
    } else if (password === password2) {
      setError('');
      setShowButton(true);
    } else {
      setError('Passwords do not match!');
      setShowButton(false);
    }
  }, [password, password2]);

  return (
    <div className="login_main_container">
      <div className="login_container">
        <h2>Registration</h2>
        <form onSubmit={handleReg}>
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
          <label htmlFor="email">
            E-mail:
            <br />
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <label htmlFor="password2">
            Password again:
            <br />
            <input
              id="password2"
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
          </label>
          <br />
          {showButton ? <button type="submit">Send Registration</button> : <p>{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Register;
