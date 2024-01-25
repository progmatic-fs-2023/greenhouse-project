import { useContext, useEffect, useState } from 'react';
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
  const [question, setQuestion] = useState(quizQuestions[questionIndex]);

  useEffect(() => {
    setQuestion(quizQuestions[questionIndex]);
  }, [questionIndex, quizQuestions]);

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
      setCorrectAnswer(data.isCorrect);

      setQuestion((prevQuestion) => ({
        ...prevQuestion,
        answers: prevQuestion.answers.map((answer) => ({
          ...answer,
          isCorrect: data.question.answers.find((a) => a.id === answer.id)?.isCorrect,
          isSelected: answer.id === answerId, // Add isSelected property
        })),
      }));

      if (data.isCorrect) {
        setCorrectAnswers(contextCorrectAnswers + 1);
      }
    } catch (error) {
      setErrorState(error.message);
    }
  };

  const nextQuestionIndex = () => {
    if (questionIndex <= quizQuestions.length - 1) {
      setQuestionIndex((prevIndex) => prevIndex + 1);

      if (questionIndex >= quizQuestions.length - 1) {
        setQuizCompleted(true);
      }
    }
  };

  return {
    nextQuestion,
    question,
    errorState,
    correctAnswer,
    quizCompleted,
    nextQuestionIndex,
  };
};

export default useQuestion;
