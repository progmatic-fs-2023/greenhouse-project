import { useContext, useMemo, useState, useEffect } from 'react';
import { QuizContext } from '../contexts/QuizContext';
import { API_URL } from '../constants';
import { useAuth } from '../contexts/AuthContext';

const useQuestion = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [errorState, setErrorState] = useState('');
  const [quizCompleted, setQuizCompleted] = useState(false);
  const {
    quizQuestions,
    correctAnswers: contextCorrectAnswers,
    setCorrectAnswers,
  } = useContext(QuizContext);
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

      if (data) {
        setCorrectAnswers(contextCorrectAnswers + 1);
      }

      if (questionIndex < quizQuestions.length - 1) {
        setQuestionIndex((prevIndex) => prevIndex + 1);
      }

      if (questionIndex >= quizQuestions.length - 1) {
        setQuizCompleted(true);
      }
    } catch (error) {
      setErrorState(error.message);
    }
  };

  return { nextQuestion, question, errorState, correctAnswer, quizCompleted };
};

export default useQuestion;
