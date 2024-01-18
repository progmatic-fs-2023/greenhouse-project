import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateUserEmail = async (userId, userEmail) => {
  const updatedUserEmail = await prisma.user.update({
  where: {
    id: userId,
  },
  data: {
    email: userEmail.email,
  },
});
  return updatedUserEmail;
}

export const updatePassword = async (userId, userPassword) => {
  const updatedPassword = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      password: userPassword
    }
  });

  return updatedPassword;
};
