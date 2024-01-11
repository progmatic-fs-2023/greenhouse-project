import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getQuestions = async (topicNumber, difficulty, numberOfQuestions) => {
  const questions = await prisma.$queryRaw`
  SELECT * FROM question
  where topic_id=${topicNumber} And level::text=${difficulty} And "isActive"=${true}
  ORDER BY RANDOM()
  LIMIT ${numberOfQuestions};`;
  const answers = await prisma.answer.findMany({
    where: { questionId: { in: questions.map(question => question.id) } },
  });
  answers.sort(() => Math.random() - 0.5);
  return questions.map(question => ({
    ...question,
    answers: answers.filter(answer => answer.questionId === question.id),
  }));
};
export const findAnswer = async id => {
  const question = await prisma.question.findUnique({
    where: { id },
    include: { answers: { select: { id: true, isCorrect: true } } },
  });
  return question;
};
export const getTopicsFromDB = async () => {
  const topics = await prisma.topic.findMany();
  return topics;
};
