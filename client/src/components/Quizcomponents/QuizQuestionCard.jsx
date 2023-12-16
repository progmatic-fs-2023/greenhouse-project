import QuizAnswer from './QuizAnswer';
import QuizHandler from './QuizHandler';
import './quizpage.css';

export default function QuizQuestionCard() {
  return (
    <div className="quiz_question_card">
      <div className="quiz_answer_container">
        <div className="quiz_answer">
          <QuizAnswer />
        </div>
        <div className="quiz_answer">
          <QuizAnswer />
        </div>
        <div className="quiz_answer">
          <QuizAnswer />
        </div>
        <div className="quiz_answer">
          <QuizAnswer />
        </div>
        <div className="handler_side">
          <QuizHandler />
        </div>
      </div>
    </div>
  );
}
