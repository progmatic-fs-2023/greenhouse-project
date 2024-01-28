import './profileMenu.css';
import { useState, useEffect } from 'react';
import img from '../../assets/potted_plant.svg';
import { useAuth } from '../../contexts/AuthContext';

export default function Notifications() {
  const { startGameUserXp, fetchStartGameUserXp } = useAuth();
  const [isSubscribed, setIsSubscribed] = useState(
    JSON.parse(localStorage.getItem('isSubscribed')) || false,
  );
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const cpnCode = 'GHCDEAL20';

  const handleCopy = () => {
    navigator.clipboard.writeText(cpnCode);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  fetchStartGameUserXp();
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
          <button type="button" onClick={handleClick}>
            {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
          </button>{' '}
          <span className="slider round" />
        </label>

        <p>{message}</p>
        {startGameUserXp >= 200 ? (
          <div className="container">
            <div className="coupon-card">
              <div className="logo-container">
                <img src={img} className="logo" alt="logo" />
                <h3>20% off at Herbalism.com</h3>
              </div>

              <di className="coupon-row">
                <span id="cpnCode">{cpnCode}</span>
                <span id="cpnBtn" onClick={handleCopy}>
                  {copied ? 'COPIED' : 'COPY CODE'}
                </span>
              </di>
              <p>Valid Till: 20Dec, 2024</p>
              <div className="circle1" />
              <div className="circle2" />
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
