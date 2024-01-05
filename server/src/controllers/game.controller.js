import 'dotenv/config';
import { getQuestions, findAnswer } from '../services/game.services';

export const quizQuestions = async (_, res) => {
  const questions = await getQuestions();
  res.status(200).json({ questions });
};
export const handleAnswer = async (req, res) => {
  const questionId = req.params.id;
  const { answerId } = req.body;
  const question = await findAnswer(questionId);
  const askAnswers = question.answers;

  const foundAnswer = askAnswers.find(answer => answer.id === answerId);

  res.status(200).json(foundAnswer.isCorrect);
};
