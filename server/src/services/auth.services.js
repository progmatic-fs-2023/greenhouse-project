import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const hashPassword = async password => {
  try {
    const passwordHash = await bcrypt.hash(password, 10);
    return passwordHash;
  } catch (err) {
    throw new Error(err);
  }
};

export const comparePassword = async (password, userPassword) => {
  try {
    const result = await bcrypt.compare(password, userPassword);
    return result;
  } catch (err) {
    throw new Error(err);
  }
};

export const createToken = async payload => {
  try {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '3h',
    });
    return token;
  } catch (err) {
    throw new Error(err);
  }
};
