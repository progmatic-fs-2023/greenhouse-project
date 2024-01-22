import React from 'react';
import PropTypes from 'prop-types';

function QuizHandler({ nextQuestionIndex, isCorrectPresent }) {
  const buttonStyle = {
    backgroundColor: isCorrectPresent ? '' : '#ccc',
    color: isCorrectPresent ? '' : '#666',
    cursor: isCorrectPresent ? 'pointer' : 'not-allowed',
  };

  return (
    <div className="handler">
      <button
        type="button"
        onClick={nextQuestionIndex}
        disabled={!isCorrectPresent}
        style={buttonStyle}
      >
        Next Question
      </button>
    </div>
  );
}

QuizHandler.propTypes = {
  nextQuestionIndex: PropTypes.func.isRequired,
  isCorrectPresent: PropTypes.bool.isRequired,
};

export default QuizHandler;
