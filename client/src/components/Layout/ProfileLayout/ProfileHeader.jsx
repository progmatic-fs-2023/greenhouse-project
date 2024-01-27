import { useEffect, useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { API_URL } from '../../../constants';
import ranks from '../../../utils/ranks';
import calculateRanks from '../../QuizPageComponents/CalculateRanks';
import Profilepic from '../../../assets/profilepic.svg';
import plant from '../../../assets/plant.svg';
import pottedPlant from '../../../assets/potted_plant.svg';
import spa from '../../../assets/spa.svg';
import tree from '../../../assets/tree.svg';
import grass from '../../../assets/grass.svg';

function ProfileHeader() {
  const { username, userId } = useAuth();
  const [rank, setRank] = useState('');
  const [xp, setXp] = useState('');
  const [icon, setIcon] = useState();
  const [threshold, setThreshold] = useState(0);
  const difference = threshold - xp;
  const { lowerThreshold, upperThreshold } = calculateRanks(xp);

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
    if (xp < 100) {
      setRank(ranks.newbie.name);
      setIcon(pottedPlant);
      setThreshold(ranks.newbie.xpThreshold);
    } else if (xp < 200) {
      setRank(ranks.rookie.name);
      setIcon(plant);
      setThreshold(ranks.rookie.xpThreshold);
    } else if (xp < 350) {
      setRank(ranks.apprentice.name);
      setIcon(spa);
      setThreshold(ranks.apprentice.xpThreshold);
    } else if (xp < 500) {
      setRank(ranks.expert.name);
      setIcon(grass);
      setThreshold(500);
    } else if (xp >= 500) {
      setRank(ranks.legend.name);
      setIcon(tree);
    }
  });

  return (
    <div className="profile_header_container">
      <img src={Profilepic} alt="Profile" className="user_pic" />
      <h1>{username}</h1>
      <h2>
        <img src={icon} alt="rank-icon" className="rank_pic" />
        {rank}
        <img src={icon} alt="rank-icon" className="rank_pic" />
      </h2>
      <div className="xp">
        <h4>{xp || 0}xp</h4>
        <div className="status-bar">
          <div
            className="status-bar-fill"
            style={{
              width:
                xp > 0
                  ? `${((xp - lowerThreshold) / (upperThreshold - lowerThreshold)) * 100}%`
                  : 0,
            }}
          />
        </div>
        <div>{xp > 500 ? <p> </p> : <p>{difference}xp until next level</p>}</div>
      </div>
    </div>
  );
}

export default ProfileHeader;
