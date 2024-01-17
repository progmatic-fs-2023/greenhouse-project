import React from 'react';
import { Link } from 'react-router-dom';

const QuizResultPage = ({ totalQuestions, correctAnswers }) => {
  return (
    <>
      <div>
        <h2>Quiz Results</h2>
        <p>Total Questions: {totalQuestions}</p>
        <p>Correct Answers: {correctAnswers}</p>
      </div>
      <div style={{ fontSize: 50 }}>
        <p>
          {correctAnswers} / {totalQuestions}
        </p>
      </div>
      <div>
        <Link to="/quizmoduls">
          <button style={{ height: 50, width: 100 }}>NEW QUIZ</button>
        </Link>
      </div>
    </>
  );
};

export default QuizResultPage;
