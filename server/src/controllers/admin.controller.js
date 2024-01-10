import 'dotenv/config';
import { createQuestion } from '../services/admin.services';
import { createAnswers } from '../services/admin.services';

const newQuestion = async (req, res) => {
  try {
    const { difficulty, topic, question, answers } = req.body;
    /* console.log(req.body); */
    const newQuestion = await createQuestion({
      difficulty,
      topic,
      question,
    });
    console.log(newQuestion.id);

    const newAnswers = await createAnswers(newQuestion.id, answers);
    console.log(newAnswers);

    res.status(201).json({ message: 'Question added successfully', question: newQuestion });
  } catch (error) {
    console.error('Error in addQuestion:', error);
    res.status(500).json({ error: 'Failed to add question. Please try again.' });
  }
};

const editQuestion = async (req, res) => {};

export default {
  newQuestion,
  editQuestion,
};
