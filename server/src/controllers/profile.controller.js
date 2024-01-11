import 'dotenv/config';
import { findUserEmail, findUserCreationDate } from '../services/profile.services';

export const getUserEmail = async (req, res) => {
  const email = await findUserEmail();
  res.status(200).json({ email });
};

export const getUserCreationDate = async (req, res) => {
    const createdAt = await findUserCreationDate();
    res.status(200).json({ createdAt });
  };