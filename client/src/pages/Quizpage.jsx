import QuizQuestionCard from '../components/Quizcomponents/QuizQuestionCard';
import QuizHandler from '../components/Quizcomponents/QuizHandler';
import '../components/Quizcomponents/quizpage.css';

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
