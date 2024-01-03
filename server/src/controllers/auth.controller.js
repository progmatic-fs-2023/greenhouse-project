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
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      message: 'Failed to create user',
      error: err.message,
    });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: 'Failed to login',
      error: 'Username or password not present',
    });
  }

  try {
    const user = await findUserByUsername(username);

    if (!user) {
      return res.status(401).json({
        message: 'Failed to login',
        error: 'Username is invalid',
      });
    }
    const result = await comparePassword(password, user.password);

    if (result) {
      const payload = {
        id: user.id,
        username: user.username,
        role: user.role,
      };

      const token = await createToken(payload);

      res.cookie('jwt', token, {
        maxAge: 3 * 60 * 60 * 1000,
      });

      return res.status(200).json({
        message: 'Login successful',
        user,
      });
    }
    return res.status(401).json({
      message: 'Failed to login',
      password: 'Password is incorrect',
    });
  } catch (err) {
    return res.status(400).json({
      message: 'Failed to finish login',
      error: err.message,
    });
  }
};

export default {
  login,
  register,
};
