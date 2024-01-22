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

export const destroyUserById = async userId => {
  try {
    await prisma.$transaction(async prisma => {
      const userScores = await prisma.score.findMany({
        where: { userId },
      });

      if (userScores.length > 0) {
        await prisma.score.deleteMany({
          where: { userId },
        });
      }
      await prisma.user.delete({
        where: { id: userId },
      });
    });
    return true;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};
