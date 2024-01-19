import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function QuizResultPage({ totalQuestions, correctAnswers }) {
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
          <button type="button" style={{ height: 50, width: 100 }}>
            NEW QUIZ
          </button>
        </Link>
      </div>
    </>
  );
}

QuizResultPage.propTypes = {
  totalQuestions: PropTypes.number.isRequired, // Assume totalQuestions is a number
  correctAnswers: PropTypes.number.isRequired, // Assume correctAnswers is a number
};

export default QuizResultPage;
