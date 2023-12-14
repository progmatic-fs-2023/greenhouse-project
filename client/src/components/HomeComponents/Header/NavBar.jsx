import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar">
      <Link>
        <button type="button">Home</button>
      </Link>
      <button type="button">Start Quiz</button>
      <button type="button">Profile</button>
      <button type="button" id="signinBtn">
        Sign in
      </button>
    </div>
  );
}

export default NavBar;
