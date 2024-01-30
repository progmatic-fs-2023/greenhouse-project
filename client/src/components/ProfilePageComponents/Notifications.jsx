import { useState } from 'react';
import { API_URL } from '../../constants';
import { useAuth } from '../../contexts/AuthContext';
import './profileMenu.css';

export default function Notifications() {
  const { userEmail, setSubscribed, userId } = useAuth();


  const [isSubscribed, setIsSubscribed] = useState();
  const [message, setMessage] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/profile/${userId}/notifications`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: userEmail, isSubscribed }),
      });

      const result = await response.json();

      setSubscribed(result.isSubscribed);
    } catch (error) {
      throw new Error('Error submitting newsletter:', error);
    }
  };

  const handleClick = () => {
    const newStatus = !isSubscribed;
    setIsSubscribed(newStatus);
    localStorage.setItem('isSubscribed', JSON.stringify(newStatus));
    setMessage(
      newStatus ? 'Successfully subscribed to our awesome newsletter!' : 'You unsubscribed.',
    );
  };

  return (
    <form className="container" onSubmit={handleNewsletterSubmit}>
      <div className="input_container" id="notifications">
        <label htmlFor="subscription" className="subscription">
          Subscribe to newsletter:
          <br />
          <button type="submit" className="account_btn" onClick={handleClick}>
            {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
          </button>
        </label>
        <div>{message ? <p>{message}</p> : ''}</div>
      </div>
    </form>
  );
}
