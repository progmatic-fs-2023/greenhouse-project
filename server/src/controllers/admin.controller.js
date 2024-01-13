import {
  createQuestion,
  getQuestions,
  createAnswers,
  editQuestions,
  editAnswers,
} from '../services/admin.services';

const newQuestion = async (req, res) => {
  try {
    const { difficulty, topic, question, answers } = req.body;
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
    const jsonData = JSON.stringify(foundedQuestions.answers);
    console.log(jsonData);
    return res.status(200).json(foundedQuestions);
  } catch (error) {
    console.error('Error in getQuestionsByTopicAndDifficulty:', error);
    return res.status(500).json({ error: 'Failed to fetch questions.' });
  }
};

const editQuestionChanges = async (req, res) => {
  try {
    const questionId = req.params.id;
    const updatedQuestionData = req.body;
    console.log(updatedQuestionData);
    const updatedQuestion = await editQuestions(questionId, updatedQuestionData);
    await editAnswers(questionId, updatedQuestionData);

    res.status(201).json(updatedQuestion);
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
