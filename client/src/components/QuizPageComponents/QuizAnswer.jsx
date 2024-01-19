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
