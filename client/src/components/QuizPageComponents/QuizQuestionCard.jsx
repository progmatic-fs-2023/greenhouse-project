import PropTypes from 'prop-types';
import QuizAnswer from './QuizAnswer';
import QuizHandler from './QuizHandler';
import '../QuizModulsPageComponents/quizmodul.css';

export default function QuizQuestionCard({ answers, nextQuestion, nextQuestionIndex }) {
  return (
    <div className="quiz_question_card">
      <div className="quiz_answer_container">
        {answers.map((answer) => (
          <div key={answer.id} className="quiz_answer">
            <QuizAnswer answer={answer} nextQuestion={nextQuestion} />
          </div>
        ))}
        <QuizHandler nextQuestionIndex={nextQuestionIndex} />
      </div>
    </div>
  );
}

QuizQuestionCard.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  nextQuestion: PropTypes.func.isRequired,
  nextQuestionIndex: PropTypes.number.isRequired,
};
