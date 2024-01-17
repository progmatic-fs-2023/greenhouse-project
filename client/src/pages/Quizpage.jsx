import React, { useContext } from 'react';
import QuizQuestionCard from '../components/QuizPageComponents/QuizQuestionCard';
import QuizQuestion from '../components/QuizPageComponents/QuizQuestion';
import QuizResultPage from './QuizResultPage';
import '../components/QuizPageComponents/quizpage.css';
import useQuestion from '../hooks/useQuestion';
import { QuizContext } from '../contexts/QuizContext'; // Adjust the path

export default function QuizPage() {
  const { question, nextQuestion, quizCompleted, correctAnswer } = useQuestion();
  const { totalQuestions, correctAnswers } = useContext(QuizContext);

  if (quizCompleted) {
    // If the quiz is completed, render the result page
    return <QuizResultPage totalQuestions={totalQuestions} correctAnswers={correctAnswers} />;
  }

  // If the quiz is not completed, render the quiz question card
  if (!question) return <div>Loading...</div>;

  return (
    <div className="main_container">
      <div className="quiz_container">
        <div className="quiz_question">
          <QuizQuestion question={question.description} />
        </div>
        <div className="quiz_side">
          <QuizQuestionCard answers={question.answers} nextQuestion={nextQuestion} />
        </div>
      </div>
    </div>
  );
}
