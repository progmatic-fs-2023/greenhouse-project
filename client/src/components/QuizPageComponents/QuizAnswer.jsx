/* import PropTypes from 'prop-types';

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
 */

import PropTypes from 'prop-types';

export default function QuizAnswer({
  answer,
  nextQuestion,
  correctAnswer,
  selectedAnswer,
  onAnswerClick,
}) {
  const { id, name } = answer;

  const getBackgroundColor = () => {
    if (selectedAnswer !== null) {
      if (id === correctAnswer) {
        return 'green';
      }
      if (id === selectedAnswer) {
        return 'red';
      }
    }
    return 'white';
  };

  const handleClick = async () => {
    await nextQuestion(id);
    onAnswerClick(id);
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
  correctAnswer: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  selectedAnswer: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onAnswerClick: PropTypes.func.isRequired,
};
