import { useContext, useMemo, useState } from 'react';
import { QuizContext } from '../contexts/QuizContext';
import { API_URL } from '../constants';

const useQuestion = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState('Start');
  const { quizQuestions } = useContext(QuizContext);
  const question = useMemo(() => quizQuestions[questionIndex], [questionIndex, quizQuestions]);

  const nextQuestion = (answerId) => {
    fetch(`${API_URL}/game/${question.id}/answers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answerId }),
    })
      .then((response) => response.json())

      .then((data) => {
        setCorrectAnswer(data);
      });
    if (questionIndex < quizQuestions.length - 1) setQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return { nextQuestion, question, correctAnswer };
};
export default useQuestion;
