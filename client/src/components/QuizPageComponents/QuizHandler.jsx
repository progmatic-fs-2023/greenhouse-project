import './quizpage.css';
import PropTypes from 'prop-types';

export default function QuizHandler({ nextQuestionIndex }) {
  return (
    <div className="handler">
      <button type="button" onClick={nextQuestionIndex}>
        Next Question
      </button>
    </div>
  );
}

QuizHandler.propTypes = {
  nextQuestionIndex: PropTypes.func.isRequired,
};
