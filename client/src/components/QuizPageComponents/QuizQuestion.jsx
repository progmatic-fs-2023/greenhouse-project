import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './quizpage.css';
import { QuizContext } from '../../contexts/QuizContext';

export default function QuizQuestion({ question }) {
  const { playedLanguage } = useContext(QuizContext);

  return (
    <div className="quiz_question_container">
      <div className="quiz_question_title">
        <h2>{playedLanguage}</h2>
      </div>
      <div className="quiz_question_text">
        <p>{question}</p>
      </div>
    </div>
  );
}
QuizQuestion.propTypes = {
  question: PropTypes.string.isRequired,
};
