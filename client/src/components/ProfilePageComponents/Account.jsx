import { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { API_URL } from '../../constants';
import './account.css';

export default function Account() {
  const { userId, userEmail, setUsername, setUserEmail, userCreationDate, logout } = useAuth();
  const [errorState, setErrorState] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const dateString = [userCreationDate];
  const formattedDate = dateString[0].slice(0, 10);
  const navigate = useNavigate();
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
        console.log(updatedUser)
        setUserEmail(updatedUser.email);
        setNewEmail('');
      }
    } catch (error) {
      setErrorState(error.message);
    }
  };

  const handleDeleteConfirm = async () => {
    try {
      const response = await fetch(`${API_URL}/profile/account/${userId}`, {
        method: 'DELETE',
      });
      if (response.status === 200) {
        navigate('/', { state: { accountDeleted: true } });
        logout();
      }
    } catch (error) {
      setErrorState(error.error);
    }
  };

  return (
    <form className="account" onSubmit={handleSubmit}>
      <div className="account_container">
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
        <p>Member since: </p> <p>{formattedDate}</p>
        <div>
          <label htmlFor="email" className="email_label">
            Email address:
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
      </div>

      <button type="submit">Save</button>

      <button type="button" id="delete_button" onClick={() => setIsDeleteModalOpen(true)}>
        Delete profile
      </button>

      <Modal
        isOpen={isDeleteModalOpen}
        onRequestClose={() => setIsDeleteModalOpen(false)}
        contentLabel="Profil törlése megerősítése"
        className="Modal"
      >
        <h2>Delete profile</h2>
        <p>Are you sure want to delete this profile?</p>
        <button type="button" onClick={handleDeleteConfirm}>
          Yes, do it!
        </button>
        <button type="button" onClick={() => setIsDeleteModalOpen(false)}>
          Nope!
        </button>
      </Modal>
      {errorState && <p>{errorState}</p>}
    </form>
  );
}
