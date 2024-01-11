import { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { API_URL } from '../constants';

export const QuizContext = createContext({});

function QuizProvider({ children }) {
  const [quizQuestions, setQuizQuestions] = useState('');
  const getQuiz = async (language, difficulty, numberOfQuestions) => {
    try {
      const respone = await fetch(`${API_URL}/game`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ language, difficulty, numberOfQuestions }),
      });
      const quiz = await respone.json();
      setQuizQuestions(quiz.questions);
    } catch (error) {
      throw new Error();
    }
  };
  const QuizContextValue = useMemo(() => ({ quizQuestions, getQuiz }), [quizQuestions]);
  return <QuizContext.Provider value={QuizContextValue}>{children}</QuizContext.Provider>;
}
QuizProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default QuizProvider;
