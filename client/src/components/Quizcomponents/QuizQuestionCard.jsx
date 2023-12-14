import QuizAnswer from './QuizAnswer';
import QuizQuestion from './QuizQuestion';
import './quizpage.css';

export default function QuizQuestionCard() {
  return (
    <div className="quizquestioncard">
      <div className="quizquestion">
        <QuizQuestion />
      </div>
      <div className="quizanswercontainer">
        <div className="quizanswer">
          <QuizAnswer />
        </div>
        <div className="quizanswer">
          <QuizAnswer />
        </div>
        <div className="quizanswer">
          <QuizAnswer />
        </div>
        <div className="quizanswer">
          <QuizAnswer />
        </div>
      </div>
    </div>
  );
}
