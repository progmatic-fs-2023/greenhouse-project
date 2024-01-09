import { useAuth } from '../../../contexts/AuthContext';
import Profilepic from '../../../assets/profilepic.svg';
import Plant from '../../../assets/plant.svg';

function ProfileHeader() {
  const { username } = useAuth();
  return (
    <div className="profile_header_container">
      <img src={Profilepic} alt="Profile" className="user_pic" />
      <h1>{username}</h1>
      <h4>Member since: yyyy. mm. dd.</h4>
      <h2>
        <img src={Plant} alt="rank-icon" className="rank_pic" />
        Newbie
      </h2>
    </div>
  );
}

export default ProfileHeader;
