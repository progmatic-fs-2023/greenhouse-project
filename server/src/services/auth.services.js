import bcrypt from 'bcrypt';

export const hashPassword = async password => {
  try {
    const passwordHash = await bcrypt.hash(password, 10);
    return passwordHash;
  } catch (err) {
    throw new Error('Error hashing password');
  }
};

export const comparePassword = async (password, userPassword) => {
  try {
    const result = await bcrypt.compare(password, userPassword);
    return result;
  } catch (err) {
    throw new Error('Error compare password');
  }
};
