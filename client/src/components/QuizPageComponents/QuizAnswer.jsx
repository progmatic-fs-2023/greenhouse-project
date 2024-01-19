import PropTypes from 'prop-types';

export default function QuizAnswer({ answer, nextQuestion }) {
  const handleClick = async () => {
    await nextQuestion(answer.id);
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        {answer.name}
      </button>
    </div>
  );
}
QuizAnswer.propTypes = {
  answer: PropTypes.shape({ id: PropTypes.number, name: PropTypes.string }).isRequired,
  nextQuestion: PropTypes.func.isRequired,
};
