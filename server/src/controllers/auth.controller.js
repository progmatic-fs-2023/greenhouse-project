import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { findUserByUsername, createUser } from '../services/users.service';
import HttpError from '../utils/HttpError';

const register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const passwordHash = await bcrypt.hash(password, 10);
    const createdUser = await createUser({
      username,
      password: passwordHash,
      role: 'admin',
    });
    res.status(201).json({
      message: 'User created',
      user: createdUser,
    });
  } catch (err) {
    res.status(400).json({
      message: 'Failed to create user',
      error: err.message,
    });
  }
};

const login = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    
    return next(new HttpError('Failed to login',400))
    
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
    const result = await bcrypt.compare(password, user.password);

    if (result) {
      const payload = {
        id: user.id,
        username: user.username,
        role: user.role,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '3h',
      });

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
