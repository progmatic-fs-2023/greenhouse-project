import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './quizpage.css';
import './animations.css';

function QuizResultPage({ totalQuestions, correctAnswers }) {
  return (
    <div className="quiz-result-container">
      <div className="quiz-result-info">
        <div className="quiz-results-heading">Quiz Results</div>
        <p className="quiz-results-text">Total Questions: {totalQuestions}</p>
        <p className="quiz-results-text">Correct Answers: {correctAnswers}</p>
      </div>
      <div className="quiz-result-score" style={{ fontSize: 50 }}>
        <p>
          {correctAnswers} / {totalQuestions}
        </p>
      </div>
      <div className="quiz-result-button">
        <Link to="/quizmoduls">
          <button type="button" className="new-quiz-button">
            NEW QUIZ
          </button>
        </Link>
      </div>
      <div className="firework-container">
        <div className="firework" />
        <div className="firework" />
        <div className="firework" />
      </div>
      <div className="pyro">
        <div className="before" />
        <div className="after" />
      </div>
    </div>
  );
}

QuizResultPage.propTypes = {
  totalQuestions: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
};

export default QuizResultPage;
