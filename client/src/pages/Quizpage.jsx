import QuizQuestionCard from '../components/Quizcomponents/QuizQuestionCard';
import QuizQuestion from '../components/Quizcomponents/QuizQuestion';
import '../components/Quizcomponents/quizpage.css';

export default function QuizPage() {
  return (
    <div className="main_container">
      <div className="quiz_container">
        <div className="quiz_question">
          <QuizQuestion />
        </div>
        <div className="quiz_side">
          <QuizQuestionCard />
        </div>
      </div>
    </div>
  );
}
