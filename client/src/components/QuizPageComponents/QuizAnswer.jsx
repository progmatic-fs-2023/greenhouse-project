import './quizpage.css';
import PropTypes from 'prop-types';

export default function QuizAnswer({ answer, nextQuestion }) {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          nextQuestion(answer.id);
        }}
      >
        {[answer.name]}
      </button>
    </div>
  );
}
QuizAnswer.propTypes = {
  answer: PropTypes.shape({ id: PropTypes.number, name: PropTypes.string }).isRequired,
  nextQuestion: PropTypes.func.isRequired,
};
