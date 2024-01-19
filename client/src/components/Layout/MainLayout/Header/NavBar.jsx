import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../../contexts/AuthContext';

function NavBar() {
  const { isLoggedIn, username, userRole, logout } = useAuth();

  return (
    <div className="navbar">
      <NavLink to="">
        <button type="button">Home</button>
      </NavLink>
      <NavLink to="/quizmoduls">
        <button type="button">Start Quiz</button>
      </NavLink>
      <NavLink to="/admin">
        {userRole === 'admin' || userRole === 'godmin' ? <button type="button">Admin</button> : ''}
      </NavLink>
      <NavLink to={isLoggedIn ? '/profile' : '/login'}>
        {isLoggedIn ? (
          <button type="button">{username}</button>
        ) : (
          <button type="button" id="signinBtn">
            Sign in
          </button>
        )}
      </NavLink>
      <NavLink to="/">
        {isLoggedIn ? (
          <button type="button" id="signinBtn" onClick={() => logout()}>
            Logout
          </button>
        ) : (
          ''
        )}
      </NavLink>
    </div>
  );
}

export default NavBar;
