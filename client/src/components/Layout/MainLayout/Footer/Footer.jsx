import './footer.css';
import { NavLink } from 'react-router-dom';
import fb from '../../../../assets/fb.svg';
import x from '../../../../assets/x.svg';
import ig from '../../../../assets/insta.svg';
import linkedIn from '../../../../assets/linkedin.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="text_container">
        <p>© 2023 Greenhouse Code — All rights reserved.</p>
      </div>
      <NavLink to="/contact">
        <button type="button">Contact</button>
      </NavLink>
      <div className="icons_container">
        <img src={fb} alt="Facebook" />
        <img src={x} alt="X" />
        <img src={ig} alt="Instagram" />
        <img src={linkedIn} alt="Linked In" />
      </div>
    </footer>
  );
}

export default Footer;
