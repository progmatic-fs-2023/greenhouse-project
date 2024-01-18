import { NavLink } from 'react-router-dom';


export default function Leaderboard() {
  return (
    <div>
      <h2>You have not joined the leaderboard yet.
        <br /><br />
        Head to our <NavLink to='/quizmoduls'>quiz page</NavLink> to start practicing and put your coding knowledge to the test!
      </h2>
    </div>
  );
}
