import { createQuestion, /* findAnswers */ createAnswers } from '../services/admin.services';

const newQuestion = async (req, res) => {
  try {
    const { difficulty, topic, question, answers } = req.body;
    /* console.log(req.body); */
    const createdQuestion = await createQuestion({
      difficulty,
      topic,
      question,
    });
    console.log(createdQuestion.id);

    const newAnswers = await createAnswers(createdQuestion.id, answers);
    console.log(newAnswers);

    res.status(201).json({ message: 'Question added successfully', question: createdQuestion });
  } catch (error) {
    console.error('Error in addQuestion:', error);
    res.status(500).json({ error: 'Failed to add question. Please try again.' });
  }
};

/* const editQuestion = async (req, res) => {
  try {
    const { topic, difficulty } = req.query;

    if (!topic || !difficulty) {
      return res.status(400).json({ error: 'Both topic and difficulty are required parameters.' });
    }

    const foundedQuestions = await findAnswers(topic, difficulty);

    res.status(200).json({ foundedQuestions });
  } catch (error) {
    console.error('Error in getQuestionsByTopicAndDifficulty:', error);
    res.status(500).json({ error: 'Failed to fetch questions.' });
  }
}; */

export default {
  newQuestion,
  /* editQuestion, */
};
