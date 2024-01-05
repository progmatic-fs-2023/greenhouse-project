import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getQuestions = async () => {
  const questions = await prisma.question.findMany({
    include: { answers: { select: { id: true, name: true } } },
  });
  return questions;
};
export const findAnswer = async id => {
  const question = await prisma.question.findUnique({
    where: { id },
    include: { answers: { select: { id: true, isCorrect: true } } },
  });
  return question;
};
