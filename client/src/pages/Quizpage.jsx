import QuizQuestionCard from '../components/QuizPageComponents/QuizQuestionCard';
import QuizQuestion from '../components/QuizPageComponents/QuizQuestion';
import '../components/QuizPageComponents/quizpage.css';
import useQuestion from '../hooks/useQuestion';

export default function QuizPage() {
  const { question, nextQuestion, correctAnswer } = useQuestion();

  if (!question) return <div>Loading...</div>;
  return (
    <div className="main_container">
      <div className="quiz_container">
        <div className="quiz_question">
          <QuizQuestion question={question.description} />
        </div>
        <div className="quiz_side">
          <QuizQuestionCard answers={question.answers} nextQuestion={nextQuestion} />
        </div>
      </div>
      <p>{`Előző válaszod:${correctAnswer}`}</p>
    </div>
  );
}
