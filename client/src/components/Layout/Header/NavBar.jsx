import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

function NavBar() {
  const { isLoggedIn, username } = useAuth();
  return (
    <div className="navbar">
      <NavLink to="">
        <button type="button">Home</button>
      </NavLink>
      <NavLink to="/quizmoduls">
        <button type="button">Start Quiz</button>
      </NavLink>
      <NavLink to="/profile">
        <button type="button">Profile</button>
      </NavLink>
      <NavLink to="/login">
        {isLoggedIn ? (
          <p>{username}</p>
        ) : (
          <button type="button" id="signinBtn">
            Sign up
          </button>
        )}
      </NavLink>
      <NavLink>
        {isLoggedIn ? (
          <button type="button" id="signinBtn">
            Logout
          </button>
        ) : (
          <div />
        )}
      </NavLink>
    </div>
  );
}

export default NavBar;
