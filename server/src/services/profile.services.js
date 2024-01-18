import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateUserEmail = async (userId, userEmail) => {
  try {
  const updatedUserEmail = await prisma.user.update({
  where: {
    id: userId,
  },
  data: {
    email: userEmail.newEmail,
  },
});
return updatedUserEmail;
}
catch ( err ){
  console.log(err)
  throw new Error;
}
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
