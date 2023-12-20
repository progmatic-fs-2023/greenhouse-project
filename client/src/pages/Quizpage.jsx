import QuizQuestionCard from '../components/QuizPageComponents/QuizQuestionCard';
import QuizQuestion from '../components/QuizPageComponents/QuizQuestion';
import '../components/QuizPageComponents/quizpage.css';

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
