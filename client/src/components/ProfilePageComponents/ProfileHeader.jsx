import Profilepic from '../../assets/profilepic.svg';

function ProfileHeader() {
    return (
        <div>
            <img src={Profilepic} alt="Profile" />
            <h2>Username</h2>
            <h5>Member since: 2024. 01. 04.</h5>
            <h4>Newbie</h4>
        </div>
    )
}

export default ProfileHeader;