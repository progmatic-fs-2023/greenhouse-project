import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const hashPassword = async password => {
  const passwordHash = await bcrypt.hash(password, 10);
  return passwordHash;
};

export const comparePassword = async (password, userPassword) => {
  const result = await bcrypt.compare(password, userPassword);
  return result;
};

export const createToken = async payload => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '3h',
  });
  return token;
};
