import { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { API_URL } from '../../constants';
import './account.css';

export default function Account() {
  const { userId, userEmail, setUsername, setUserEmail, logout } = useAuth();
  const [errorState, setErrorState] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
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
        setUserEmail(updatedUser.email);
        setUsername(updatedUser.username);
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
      console.log(response);
      if (response.status === 200) {
        navigate('/');
        logout();
      }
    } catch (error) {
      setErrorState(error.error);
    }
  };

  return (
    <form className="account" onSubmit={handleSubmit}>
      <div className="input_container">
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
