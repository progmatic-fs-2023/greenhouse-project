import './profileMenu.css';
import { useState, useEffect } from 'react';

export default function Notifications() {
  const [isSubscribed, setIsSubscribed] = useState(
    JSON.parse(localStorage.getItem('isSubscribed')) || false,
  );
  const [message, setMessage] = useState('');

  const handleClick = () => {
    const newStatus = !isSubscribed;
    setIsSubscribed(newStatus);
    localStorage.setItem('isSubscribed', JSON.stringify(newStatus));
    setMessage(
      newStatus ? 'Successfully subscribed to our awesome newsletter! :)' : 'You unsubscribed. :(',
    );
  };

  useEffect(() => {}, [isSubscribed]);

  return (
    <div className="container">
      <div className="input_container">
        <label htmlFor="subscription" className="subscription">
          Subscribe to newsletter:
          <br />
          <button type="button" onClick={handleClick}>
            {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
          </button>{' '}
          <span className="slider round" />
        </label>

        <p>{message}</p>
      </div>
    </div>
  );
}
