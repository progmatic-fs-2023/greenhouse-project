import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createQuestion = async ({ question, difficulty, topic }) => {
  try {
    const createdQuestion = await prisma.question.create({
      data: {
        description: question,
        level: difficulty,
        topicId: Number(topic),
      },
    });

    return createdQuestion;
  } catch (error) {
    console.error('Error in createQuestion:', error);
    throw new Error('Failed to create question. Please try again.');
  }
};

export const createAnswers = async (questionId, answers) => {
  try {
    const createdAnswers = await prisma.answer.createMany({
      data: answers.map(answer => ({
        questionId,
        name: answer.text,
        isCorrect: answer.isCorrect,
      })),
    });

    return createdAnswers;
  } catch (error) {
    console.error('Error in createAnswers:', error);
    throw new Error('Failed to create answers. Please try again.');
  }
};

/* export const findAnswers = async (topic, difficulty) => {
  const questions = await prisma.question.findMany({
    where: {
      topicId: Number(topic),
      level: difficulty,
    },
  });
  return questions;
};
 */

export const getQuestions = async (topic, difficulty, search) => {
  const questions = await prisma.question.findMany({
    where: {
      topicId: Number(topic),
      level: difficulty,
      description: {
        contains: search || '',
      },
    },
  });
  return questions;
};

export const editQuestions = async (questionId, updatedQuestion) => {
  const editedQuestions = await prisma.question.update({
    where: {
      id: questionId,
    },
    data: {
      description: updatedQuestion,
    },
  });
  return editedQuestions;
};
