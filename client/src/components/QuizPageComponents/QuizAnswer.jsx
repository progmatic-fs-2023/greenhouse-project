/* import './quizpage.css';
import PropTypes from 'prop-types';

export default function QuizAnswer({ answer, nextQuestion }) {
  const handleClick = async () => {
    await nextQuestion(answer.id);
  };

  return (
    <div>
      <button
        type="button"
        style={{
          backgroundColor: answer.hasOwnProperty('isCorrect')
            ? answer.isCorrect
              ? 'green'
              : 'red'
            : 'white',
        }}
        onClick={handleClick}
      >
        {answer.name}
      </button>
    </div>
  );
}
QuizAnswer.propTypes = {
  answer: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string.isRequired,
    isCorrect: PropTypes.bool, // Add this line
  }).isRequired,
  nextQuestion: PropTypes.func.isRequired,
}; */

import './quizpage.css';
import PropTypes from 'prop-types';

export default function QuizAnswer({ answer, nextQuestion }) {
  const { id, name, isCorrect } = answer;

  const getBackgroundColor = () => {
    if (isCorrect === true) {
      return 'green';
    }
    if (isCorrect === false) {
      return 'red';
    }
    return 'white';
  };

  const handleClick = async () => {
    await nextQuestion(id);
  };

  return (
    <div>
      <button
        type="button"
        style={{
          backgroundColor: getBackgroundColor(),
        }}
        onClick={handleClick}
      >
        {name}
      </button>
    </div>
  );
}

QuizAnswer.propTypes = {
  answer: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string.isRequired,
    isCorrect: PropTypes.bool,
  }).isRequired,
  nextQuestion: PropTypes.func.isRequired,
};
