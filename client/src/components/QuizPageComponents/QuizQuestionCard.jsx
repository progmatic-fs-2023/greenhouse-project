import PropTypes from 'prop-types';
import QuizAnswer from './QuizAnswer';
import QuizHandler from './QuizHandler';
import './quizpage.css';
import '../QuizModulsPageComponents/quizmodul.css';

export default function QuizQuestionCard({ answers, nextQuestion }) {
  return (
    <div className="quiz_question_card">
      <div className="quiz_answer_container">
        {answers.map((answer) => (
          <div key={answer.id} className="quiz_answer">
            <QuizAnswer answer={answer} nextQuestion={nextQuestion} />
          </div>
        ))}
        <QuizHandler />
      </div>
    </div>
  );
}
QuizQuestionCard.propTypes = {
  answers: PropTypes.arrayOf({ id: PropTypes.number, name: PropTypes.string }).isRequired,
  nextQuestion: PropTypes.func.isRequired,
};
