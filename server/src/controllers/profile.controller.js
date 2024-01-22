import 'dotenv/config';
import { updateUserEmail, updatePassword } from '../services/profile.services';
import { findUserById } from '../services/users.service';
import { comparePassword, hashPassword } from '../services/auth.services';

export const userDataUpdate = async (req, res) => {
  try {
    const userId = req.params.id;
    const { newEmail } = req.body;
    const updatedDataEmail = await updateUserEmail(userId, newEmail);
    res.status(201).json([updatedDataEmail]);
  } catch (error) {
    console.error('Error updating user data', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const passwordUpdate = async (req, res) => {
  try {
    const userId = req.params.id;
    const { currentPassword, newPassword } = req.body.currentPassword;
    const user = await findUserById(userId);
    const matchedPassword = await comparePassword(currentPassword, user.password);
    if (matchedPassword) {
      const hashedNewPassword = await hashPassword(newPassword);
      const updatedData = await updatePassword(userId, hashedNewPassword);
      res.status(201).json(updatedData);
    } else {
      throw new Error();
    }
  } catch (error) {
    console.error('Error updating password', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
