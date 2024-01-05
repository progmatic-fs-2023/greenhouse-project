import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

function NavBar() {
  const { isLoggedIn, username } = useAuth();
  const { logout } = useAuth();
  return (
    <div className="navbar">
      <NavLink to="">
        <button type="button">Home</button>
      </NavLink>
      <NavLink to="/quizmoduls">
        <button type="button">Start Quiz</button>
      </NavLink>
      <NavLink to={isLoggedIn ? '/profile' : '/login'}>
        {isLoggedIn ? (
          <p>{username}</p>
        ) : (
          <button type="button" id="signinBtn">
            Sign up
          </button>
        )}
      </NavLink>
      <NavLink to="/">
        {isLoggedIn ? (
          <button type="button" id="signinBtn" onClick={() => logout()}>
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
