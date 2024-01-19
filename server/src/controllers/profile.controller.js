import 'dotenv/config';
import { updateUserEmail, updateUsername, updatePassword } from '../services/profile.services';

export const userDataUpdate = async (req, res) => {
  try {
    const userId = req.params.id;
    const { newUsername, newEmail } = req.body;
    const updatedDataEmail = await updateUserEmail(userId, newEmail);
    const updatedDataUsername = await updateUsername(userId, newUsername);
    res.status(201).json([updatedDataEmail, updatedDataUsername]);
    console.log(updatedDataEmail);
  } catch (error) {
    console.error('Error updating user data', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const passwordUpdate = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedPassword = req.body;
    console.log(updatedPassword);
    const updatedData = await updatePassword(userId, updatedPassword);
    res.status(201).json(updatedData);
  } catch (error) {
    console.error('Error updating password', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
