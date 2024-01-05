import ProfileHeader from '../components/ProfilePageComponents/ProfileHeader';
import ProfileBody from '../components/ProfilePageComponents/ProfileBody';
import '../components/ProfilePageComponents/profile.css';

function Profile() {
  return (
    <div className="profile_container">
      <ProfileHeader />
      <ProfileBody />
    </div>
  );
}

export default Profile;
