import 'dotenv/config';
import { getQuestions, findAnswer, getTopicsFromDB } from '../services/game.services';
import mapLanguageToNumber from '../middlewares/topicToNumber.middleware';

export const quizQuestions = async (req, res) => {
  const number = mapLanguageToNumber(req.body.language);
  const { language } = req.body;
  const { difficulty } = req.body;
  const { numberOfQuestions } = req.body;
  console.log(language, difficulty, numberOfQuestions, number);
  const questions = await getQuestions(number, difficulty, numberOfQuestions);
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
export const getTopics = async (_, res) => {
  const topics = await getTopicsFromDB();
  res.status(200).json({ topics });
};
