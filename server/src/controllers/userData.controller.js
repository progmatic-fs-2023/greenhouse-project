import { findUserById } from '../services/users.service';

const getUserDatas = async (req, res) => {
  const userId = req.params.id;
  const userDatas = await findUserById(userId);
  res.status(200).json(userDatas);
};

export default {
  getUserDatas,
};
