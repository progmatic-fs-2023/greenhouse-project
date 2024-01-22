import { useEffect, useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { API_URL } from '../../../constants';
import Profilepic from '../../../assets/profilepic.svg';
import plant from '../../../assets/plant.svg';
import pottedPlant from '../../../assets/potted_plant.svg'
import spa from '../../../assets/spa.svg';
import tree from '../../../assets/tree.svg';
import grass from '../../../assets/grass.svg';

function ProfileHeader() {
  const { username, userId } = useAuth();
  const [rank, setRank] = useState("")
  const [xp, setXp] = useState('');
  const [icon, setIcon] = useState();
  const [threshold, setThreshold] = useState(0);
  const ranks = ["Newbie", "Rookie", "Apprentice", "Master", "Legend"];

  useEffect(() => {
    const fetchUserXP = async () => {
      try {
        const response = await fetch(`${API_URL}/profile/${userId}`);

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setXp(data.score.xp);
      } catch (error) {
        throw new Error('Error fetching user XP:', error);
      }
    };

    fetchUserXP();
  }, [userId]);

  useEffect(() => {
  if(xp <= 100){
    setRank(ranks[0]);
    setIcon(pottedPlant);
    setThreshold(100);
    } else if(xp <= 200){
    setRank(ranks[1]);
    setIcon(plant);
    setThreshold(200);
    } else if(xp <= 350){
      setRank(ranks[2]);
      setIcon(spa);
      setThreshold(350);
    } else if(xp <= 500){
      setRank(ranks[3]);
      setIcon(grass);
      setThreshold(500);
    } else if(xp > 500){
      setRank(ranks[4]);
      setIcon(tree);
    }
  });

  const difference = threshold-xp;

  return (
    <div className="profile_header_container">
      <img src={Profilepic} alt="Profile" className="user_pic" />
      <h1>{username}</h1>
      <h2>
        <img src={icon} alt="rank-icon" className="rank_pic" />
        {rank}
        <img src={icon} alt="rank-icon" className="rank_pic" />
        </h2>
        <div className='xp'>
          <h4>{xp} XP</h4>
          <div className="status-bar">
            <div
              className="status-bar-fill"
              style={{ width: `${(xp/threshold)*100}%` }}
            />
            </div>
            <p>{difference} XP until next level</p>
          </div>
    </div>
  );
}

export default ProfileHeader;
