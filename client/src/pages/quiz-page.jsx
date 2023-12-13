import QuizQuestionCard from '../components/QuizQuestionCard';
import QuizHandler from '../components/QuizHandler';
import '../components/quizpage.css';

export default function QuizPage() {
  return (
    <div className="container">
      <div className="handlerside">
        <p>quiz Handler</p>
        <QuizHandler />
      </div>
      <div className="quizside">
        <p>quiz itself</p>
        <QuizQuestionCard />
      </div>
    </div>
  );
}
