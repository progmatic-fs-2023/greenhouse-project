import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const findUserByUsername = async username => {
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  return user;
};

export const createUser = async newUser => {
  const createdUser = await prisma.user.create({
    data: {
      username: newUser.username,
      password: newUser.password,
      role: newUser.role,
      email: newUser.email,
    },
  });

  return createdUser;
};
