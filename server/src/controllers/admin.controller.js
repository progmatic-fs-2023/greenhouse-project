import {
  createQuestion,
  getQuestions,
  createAnswers,
  editQuestions,
} from '../services/admin.services';

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

const getSelectedQuestions = async (req, res) => {
  try {
    const { topic, difficulty, search } = req.query;

    if (!topic || !difficulty) {
      return res.status(400).json({ error: 'Both topic and difficulty are required parameters.' });
    }

    const foundedQuestions = await getQuestions(topic, difficulty, search);
    return res.status(200).json(foundedQuestions);
  } catch (error) {
    console.error('Error in getQuestionsByTopicAndDifficulty:', error);
    return res.status(500).json({ error: 'Failed to fetch questions.' });
  }
};

const editQuestionChanges = async (req, res) => {
  try {
    const questionId = req.params.id;
    const editedQuestion = req.body.updatedQuestion;
    console.log(questionId, editedQuestion);
    const updatedQuestion = await editQuestions(questionId, editedQuestion);

    res.status(200).json(updatedQuestion);
  } catch (error) {
    console.error('Error updating question:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default {
  newQuestion,
  getSelectedQuestions,
  editQuestionChanges,
};
