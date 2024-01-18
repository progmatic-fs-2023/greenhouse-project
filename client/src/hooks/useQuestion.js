import { useContext, useMemo, useState } from 'react';
import { QuizContext } from '../contexts/QuizContext';
import { API_URL } from '../constants';
import { useAuth } from '../contexts/AuthContext';

const useQuestion = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [errorState, setErrorState] = useState('');
  const { quizQuestions } = useContext(QuizContext);
  const { token } = useAuth();

  const question = useMemo(() => quizQuestions[questionIndex], [questionIndex, quizQuestions]);

  const nextQuestion = async (answerId) => {
    try {
      const response = await fetch(`${API_URL}/game/${question.id}/answers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token ? `Bearer ${token}` : undefined,
        },
        body: JSON.stringify({ answerId }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setCorrectAnswer(data);

      if (questionIndex < quizQuestions.length - 1) {
        setQuestionIndex((prevIndex) => prevIndex + 1);
      }
    } catch (error) {
      setErrorState(error.message);
    }
  };

  return { nextQuestion, question, errorState, correctAnswer };
};
export default useQuestion;
