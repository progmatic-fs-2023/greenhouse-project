import '../admin.css';
import { useState, useEffect } from 'react';
/* For Hotfix */

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState('');
  const [showButton, setShowButton] = useState('false');

  const handleReg = async (e) => {
    e.preventDefault();
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
    <div className="admin_login_main_container">
      <div className="admin_login_container">
        <h2>Registration</h2>
        <form onSubmit={handleReg}>
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
          <label htmlFor="email">
            E-mail:
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
