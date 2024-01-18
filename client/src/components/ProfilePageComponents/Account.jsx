import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { API_URL } from '../../constants';
import './profileMenu.css'

export default function Account() {
  const { userEmail, username, userId } = useAuth();

  const [newEmail, setNewEmail] = useState('');

  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
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
        body: JSON.stringify({ newEmail }),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        console.log(`Email updated to: ${updatedUser.email}`);
        setNewEmail('');
      } else {
        console.error('Error updating email');
      }
    } catch (error) {
      console.error('Error updating email:', error);
    }
  };
  return (
    <div className='account' onSubmit={handleSubmit}>
      <div className='input_container'>
      <label htmlFor='username' className='username_label'>
          Username:
          <input name='username' className="username" type="text" defaultValue={username} />
        </label>

        <label htmlFor='email' className='email_label'>
          Email address:
          <br />
          <input name='email' className='email' type="text" defaultValue={userEmail} onChange={handleEmailChange}/>
        </label>
      </div>

      <button type='submit' onClick={handleEmailChange}>Save</button>

      <button type='button' id='delete_button'>Delete profile</button>
    </div>
  );
}