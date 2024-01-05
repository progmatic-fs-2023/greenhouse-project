import './quizpage.css';
import PropTypes from 'prop-types';

export default function QuizQuestion({ question }) {
  return (
    <div className="quiz_question_container">
      <h2>Question </h2>
      <p>{question}</p>
    </div>
  );
}
QuizQuestion.propTypes = {
  question: PropTypes.string.isRequired,
};
