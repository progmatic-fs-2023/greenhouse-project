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

export const findUserById = async userId => {
  const userDatas = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  return userDatas;
};

export const createUser = async newUser => {
  const createdUser = await prisma.user.create({
    data: {
      username: newUser.username,
      password: newUser.password,
      email: newUser.email,
    },
  });
  return createdUser;
};

export const getUsersByRole = async (usersRole, search) => {
  const users = await prisma.user.findMany({
    where: {
      role: usersRole,
      username: {
        contains: search || '',
      },
    },
  });
  return users;
};

export const editUserByRole = async (userId, userRole) => {
  const editedUser = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      role: userRole.role,
    },
  });
  return editedUser;
};
