import 'dotenv/config';
import { updateUserEmail, updatePassword } from '../services/profile.services';

export const emailUpdate = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedEmail = req.body;
    console.log(updatedEmail);
    const updatedData = await updateUserEmail(userId, updatedEmail);
    res.status(201).json(updatedData);
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
