import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="">
        <button type="button">Home</button>
      </NavLink>
      <NavLink to="/quizmoduls">
        <button type="button">Start Quiz</button>
      </NavLink>
      <NavLink to="">
        <button type="button">Profile</button>
      </NavLink>
      <NavLink to="">
        <button type="button" id="signinBtn">
          Sign in
        </button>
      </NavLink>
    </div>
  );
}

export default NavBar;
