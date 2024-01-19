import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { API_URL } from '../../constants';
import './profileMenu.css';

export default function Account() {
  const { username, userId, userEmail } = useAuth();

  const [newEmail, setNewEmail] = useState('');
  const [newUsername, setNewUsername] = useState('');

  const handleEmailChange = (e) => {
    if (!e) {
      setNewEmail(userEmail);
    } else {
      setNewEmail(e);
    }
  };

  const handleUsernameChange = (e) => {
    if (!e) {
      setNewUsername(username);
    } else {
      setNewUsername(e);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make a PUT request to update the email
    try {
      const response = await fetch(`${API_URL}/profile/account/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newEmail, newUsername }),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setNewEmail(updatedUser.email);
        setNewUsername(updatedUser.username);
      }
    } catch (error) {
      throw new Error('Error updating data:', error);
    }
  };
  return (
    <form className="account" onSubmit={handleSubmit}>
      <div className="input_container">
        <label htmlFor="username" className="username_label">
          Username:
          <input
            name="username"
            className="username"
            type="text"
            defaultValue={username}
            onChange={(e) => handleUsernameChange(e.target.value)}
          />
        </label>

        <label htmlFor="email" className="email_label">
          Email address:
          <br />
          <input
            name="email"
            className="email"
            type="text"
            defaultValue={userEmail}
            onChange={(e) => handleEmailChange(e.target.value)}
          />
        </label>
      </div>

      <button type="submit">Save</button>

      <button type="button" id="delete_button">
        Delete profile
      </button>
    </form>
  );
}
