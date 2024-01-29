import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import img from '../../assets/potted_plant.svg';
import './profileMenu.css';

function Goodies() {
  const { startGameUserXp, fetchStartGameUserXp } = useAuth();
  fetchStartGameUserXp();
  const [copied, setCopied] = useState(false);
  const cpnCode = 'GHCDEAL20';
  const handleCopy = () => {
    navigator.clipboard.writeText(cpnCode);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleCopy();
    }
  };

  return (
    <div>
      {startGameUserXp >= 200 ? (
        <div className="container">
          <div className="coupon-card">
            <div className="logo-container">
              <img src={img} className="logo" alt="logo" />
              <h3>20% off at herbalism.hu</h3>
            </div>

            <di className="coupon-row">
              <span id="cpnCode">{cpnCode}</span>
              <span
                id="cpnBtn"
                onClick={handleCopy}
                onKeyDown={handleKeyDown}
                tabIndex={0}
                role="button"
              >
                {copied ? 'COPIED' : 'COPY CODE'}
              </span>
            </di>
            <p>Valid Till: 20Dec, 2024</p>
            <div className="circle1" />
            <div className="circle2" />
          </div>
        </div>
      ) : (
        <div>You havent got any coupons yet!</div>
      )}
    </div>
  );
}
export default Goodies;
