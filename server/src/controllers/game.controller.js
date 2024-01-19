import 'dotenv/config';
import {
  getQuestions,
  checkCorrectAnswer,
  getTopicsFromDB,
  modifyXp,
  getUsersScore,
} from '../services/game.services';
import mapLanguageToNumber from '../middlewares/topicToNumber.middleware';

export const quizQuestions = async (req, res) => {
  const number = mapLanguageToNumber(req.body.language);
  const { language, numberOfQuestions, difficulty } = req.body;
  console.log(language, difficulty, numberOfQuestions, number);
  const questions = await getQuestions(number, difficulty, numberOfQuestions);
  res.status(200).json({ questions });
};

export const handleAnswer = async (req, res) => {
  const questionId = req.params.id;
  const { answerId } = req.body;
  const { userId } = req;
  const isCorrect = await checkCorrectAnswer(answerId, questionId);
  if (isCorrect.isCorrect && userId) await modifyXp(userId, questionId);
  res.status(200).json(isCorrect);
};

export const getTopics = async (_, res) => {
  const topics = await getTopicsFromDB();
  res.status(200).json({ topics });
};

export const getLeaderboard = async (req, res) => {
  const usersLeaderboard = await getUsersScore();
  res.status(200).json(usersLeaderboard);
};
