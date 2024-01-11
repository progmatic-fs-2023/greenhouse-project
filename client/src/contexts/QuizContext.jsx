import { createContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

export const QuizContext = createContext({});
function QuizProvider({ children }) {
  const [quizQuestions, setQuizQuestions] = useState('');

  useEffect(() => {
    const getQuiz = async () => {
      try {
        const response = await fetch('http://localhost:3030/api/game');
        const quiz = await response.json();
        setQuizQuestions(quiz.questions);
      } catch (error) {
        throw new Error();
      }
    };
    getQuiz();
  }, []);

  const QuizContextValue = useMemo(() => ({ quizQuestions }), [quizQuestions]);

  return <QuizContext.Provider value={QuizContextValue}>{children}</QuizContext.Provider>;
}
QuizProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default QuizProvider;
