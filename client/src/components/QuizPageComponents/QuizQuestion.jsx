import './quizpage.css';
import PropTypes from 'prop-types';

export default function QuizQuestion({ question }) {
  return (
    <div className="quiz_question_container">
      <div className='quiz_question_title'>
      <h2>Topic</h2>
      </div>
      <div className='quiz_question_text'>
      <p>{question}</p>
      </div>
    </div>
  );
}
QuizQuestion.propTypes = {
  question: PropTypes.string.isRequired,
};
