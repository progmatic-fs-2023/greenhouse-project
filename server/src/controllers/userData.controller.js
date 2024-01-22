import { findUserById, findUserScoreById } from '../services/users.service';

const getUserDatas = async (req, res) => {
  const userId = req.params.id;
  const userDatas = await findUserById(userId);
  res.status(200).json(userDatas);
};

const getUserScore = async (req, res) => {
  const userId = req.params.id;
  const userScore = await findUserScoreById(userId);
  res.status(200).json(userScore);
};

export default {
  getUserDatas,
  getUserScore,
};
