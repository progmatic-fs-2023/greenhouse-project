import { NavLink } from "react-router-dom";

export default function ProfileNavbar() {
  return (
    <div className="profile_navbar">
        <NavLink to="/profile/account" className="navlink">Account</NavLink>
        <NavLink to="/profile/password" className="navlink">Password</NavLink>
        <NavLink to="/profile/daily-goal" className="navlink">Daily goal</NavLink>
        <NavLink to="/profile/leaderboard" className="navlink">Leaderboard</NavLink>
        <NavLink to="/profile/friends" className="navlink">Friends</NavLink>
        <NavLink to="/profile/premium" className="navlink">Premium</NavLink>
        <NavLink to="/profile/privacy" className="navlink">Privacy</NavLink>
    </div>
  );
}
