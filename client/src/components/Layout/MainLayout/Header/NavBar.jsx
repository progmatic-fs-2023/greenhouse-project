import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../../contexts/AuthContext';
import menu from '../../../../assets/menu.svg';


function NavBar() {
  const { isLoggedIn, username, userRole } = useAuth();
  const { logout } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((open) => !open)
  }

  return (
    <nav>
    <ul>
      <li>
      <button type='button' className='hamburger_menu' onClick={toggleMenu}>
        <img className='menu' src={menu} alt="menu" />
      </button>
      </li>
    </ul>
    <ul className={`navbar ${isOpen ? "is-open" : ""}`} id='navbar'>
      <li>
      <NavLink to="">
        <button type="button">Home</button>
      </NavLink>
      </li>
      <li>
      <NavLink to="/quizmoduls">
        <button type="button">Start Quiz</button>
      </NavLink>
      </li>
      <li>
      <NavLink to="/admin">
        {userRole === 'admin' || userRole === 'godmin' ? <button type="button">Admin</button> : ''}
      </NavLink>
      </li>
      <li>
      <NavLink to={isLoggedIn ? '/profile' : '/login'}>
        {isLoggedIn ? (
          <button type="button">{username}</button>
        ) : (
          <button type="button" id="signinBtn">
            Sign in
          </button>
        )}
      </NavLink>
      </li>
      <li>
      <NavLink to="/">
        {isLoggedIn ? (
          <button type="button" id="signinBtn" onClick={() => logout()}>
            Logout
          </button>
        ) : (
          ''
        )}
      </NavLink>
      </li>
      </ul>
    </nav>
  );
}

export default NavBar;
