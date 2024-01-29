import { useState, useEffect } from 'react';
import { API_URL } from '../../constants';
import './profileMenu.css';


export default function Notifications() {
  const [isSubscribed, setIsSubscribed] = useState(
    JSON.parse(localStorage.getItem('isSubscribed')) || false,
  );
  const [message, setMessage] = useState('');


  const handleNewsletterSubmit = async (data) => {
    try {
      const response = await fetch(`${API_URL}/profile/notifications`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error submitting newsletter:', error);
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

  useEffect(() => {}, [isSubscribed]);

  return (
    <form className="container" onSubmit={handleNewsletterSubmit}>
      <div className="input_container" id='notifications'>
        <label htmlFor="subscription" className="subscription">
          Subscribe to newsletter:
          <br />
          <button type="submit" onClick={handleClick}>
            {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
          </button>{' '}
        </label>
        <div>
        {message ? <p>{message}</p> : ""}
        </div>
      </div>
    </form>
  );
}
