import QuizAnswer from './QuizAnswer';
import QuizQuestion from './QuizQuestion';
import '../components/quizpage.css';

export default function QuizQuestionCard() {
  return (
    <>
      <div className="quizquestioncard">
        <div className="quizquestion">
          <QuizQuestion></QuizQuestion>
        </div>
        <div className="quizanswercontainer">
          <div className="quizanswer">
            <QuizAnswer></QuizAnswer>
          </div>
          <div className="quizanswer">
            <QuizAnswer></QuizAnswer>
          </div>
          <div className="quizanswer">
            <QuizAnswer></QuizAnswer>
          </div>
          <div className="quizanswer">
            <QuizAnswer></QuizAnswer>
          </div>
        </div>
      </div>
    </>
  );
}
