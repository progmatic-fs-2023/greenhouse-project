import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { API_URL } from '../../constants';

export default function Account() {
  const { userId, userEmail, setUsername, setUserEmail } = useAuth();
  const [errorState, setErrorState] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/profile/account/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newEmail }),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setUserEmail(updatedUser.email);
        setUsername(updatedUser.username);

        setNewEmail('');
      }
    } catch (error) {
      setErrorState(error.message);
    }
  };

  return (
    <form className="account" onSubmit={handleSubmit}>
      <div className="input_container">
        {/* <label htmlFor="username" className="username_label">
          Username:
          <input
            name="username"
            className="username"
            type="text"
            placeholder={username}
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
        </label> */}

        <label htmlFor="email" className="email_label">
          Email address:
          <br />
          <input
            name="email"
            className="email"
            type="text"
            placeholder={userEmail}
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </label>
      </div>

      <button type="submit">Save</button>
      {errorState && <p>{errorState}</p>}
      <button type="button" id="delete_button">
        Delete profile
      </button>
    </form>
  );
}
