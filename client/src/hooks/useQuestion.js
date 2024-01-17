import { useContext, useMemo, useState, useEffect } from 'react';
import { QuizContext } from '../contexts/QuizContext';
import { API_URL } from '../constants';

const useQuestion = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState('Start');
  const [quizCompleted, setQuizCompleted] = useState(false);
  const {
    quizQuestions,
    correctAnswers: contextCorrectAnswers,
    setCorrectAnswers,
  } = useContext(QuizContext);
  const question = useMemo(() => quizQuestions[questionIndex], [questionIndex, quizQuestions]);

  const nextQuestion = (answerId) => {
    fetch(`${API_URL}/game/${question.id}/answers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answerId }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        return response.json();
      })
      .then((data) => {
        setCorrectAnswer(data);

        if (data) {
          setCorrectAnswers(contextCorrectAnswers + 1);
        }
      })
      .catch((error) => {
        console.error('Error fetching quiz question:', error);
      });

    if (questionIndex < quizQuestions.length - 1) {
      setQuestionIndex((prevIndex) => prevIndex + 1);
    }

    if (questionIndex >= quizQuestions.length - 1) {
      setQuizCompleted(true);
    }
  };

  useEffect(() => {
    console.log('Correct Answer:', correctAnswer);
    console.log(contextCorrectAnswers);
  }, [contextCorrectAnswers, correctAnswer]);

  return { nextQuestion, question, correctAnswer, quizCompleted };
};

export default useQuestion;
