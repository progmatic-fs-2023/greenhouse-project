import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateUserEmail = async (userId, userEmail) => {
  try {
    const updatedUserEmail = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        email: userEmail,
      },
    });
    return updatedUserEmail;
  } catch (err) {
    console.log(err);
    throw new Error();
  }
};

export const updateUsername = async (userId, userName) => {
  try {
    const updatedUsername = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        username: userName,
      },
    });
    return updatedUsername;
  } catch (err) {
    console.log(err);
    throw new Error();
  }
};

export const updatePassword = async (userId, hashedNewPassword) => {
  const updatedPassword = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      password: hashedNewPassword,
    },
  });

  return updatedPassword;
};

export const findUserXp = async (userId) => {
  const experiencePoints = await prisma.user.findUnique({
    where:{
      id: userId,
    },
    include: {
      score:{
        select: {
          xp: true,
        }
      }
    },
  })
  return experiencePoints;
};
