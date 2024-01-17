import { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { API_URL } from '../constants';

export const QuizContext = createContext({});

function QuizProvider({ children }) {
  const [quizQuestions, setQuizQuestions] = useState('');
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const getQuiz = async (language, difficulty, numberOfQuestions) => {
    try {
      const response = await fetch(`${API_URL}/game`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ language, difficulty, numberOfQuestions }),
      });

      const quiz = await response.json();

      setQuizQuestions(quiz.questions);
      setCorrectAnswers(0);
      setTotalQuestions(numberOfQuestions);
    } catch (error) {
      throw new Error();
    }
  };

  const QuizContextValue = useMemo(
    () => ({
      quizQuestions,
      getQuiz,
      correctAnswers,
      setCorrectAnswers, // Make sure setCorrectAnswers is included in the context value
      totalQuestions,
    }),
    [quizQuestions, correctAnswers, totalQuestions],
  );

  return <QuizContext.Provider value={QuizContextValue}>{children}</QuizContext.Provider>;
}

QuizProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default QuizProvider;
