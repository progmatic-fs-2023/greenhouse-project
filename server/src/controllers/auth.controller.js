import 'dotenv/config';
import { findUserByUsername, createUser } from '../services/users.service';
import { hashPassword, comparePassword, createToken } from '../services/auth.services';

const register = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const passwordHash = await hashPassword(password);
    const createdUser = await createUser({
      username,
      password: passwordHash,
      email,
    });
    res.status(201).json({
      message: 'User created',
      user: createdUser,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: 'Failed to create user',
    });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    console.log('Failed to login, username or password not present');
    return res.status(500).json({
      message: 'Failed to login, username or password not present',
    });
  }

  try {
    const user = await findUserByUsername(username);
    const { password: passwordHash, ...userWithoutPassword } = user;
    if (!user) {
      console.log('Failed to login, username is invalid');
      return res.status(500).json({
        message: 'Failed to login, username is invalid',
      });
    }
    const result = await comparePassword(password, user.password);

    if (result) {
      const payload = {
        id: user.id,
        username: user.username,
        role: user.role,
        email: user.email,
        createdAt: user.createdAt,
      };

      const token = await createToken(payload);

      res.cookie('jwt', token, {
        maxAge: 3 * 60 * 60 * 1000,
      });

      return res.status(200).json({
        message: 'Login successful',
        user: userWithoutPassword,
        token,
      });
    }
    console.log('Failed to login, password is incorrect');
    return res.status(500).json({
      message: 'Failed to login, password is incorrect',
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: 'Failed to finish login',
    });
  }
};

export default {
  login,
  register,
};
