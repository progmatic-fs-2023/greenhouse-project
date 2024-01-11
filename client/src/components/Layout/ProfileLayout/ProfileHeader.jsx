import { useAuth } from '../../../contexts/AuthContext';
import Profilepic from '../../../assets/profilepic.svg';
import Plant from '../../../assets/plant.svg';

function ProfileHeader() {
  const { username, userCreationDate } = useAuth();
  console.log(userCreationDate)

  const dateString = [userCreationDate];
  const formattedDate = dateString[0].slice(0, 10);

  return (
    <div className="profile_header_container">
      <img src={Profilepic} alt="Profile" className="user_pic" />
      <h1>{username}</h1>
      <h4>Member since: {formattedDate}</h4>
      <h2>
        <img src={Plant} alt="rank-icon" className="rank_pic" />
        Newbie
      </h2>
    </div>
  );
}

export default ProfileHeader;
