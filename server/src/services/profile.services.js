import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const findUserEmail = async email => {
    const userEmail = await prisma.user.findUnique({
      where: { email }
    });
  
    return userEmail;
  };

export const findUserCreationDate = async createdAt => {
    const creationDate = await prisma.user.findUnique({
      where: {
        createdAt,
      },
    });
  
    return creationDate;
};