import '../components/QuizModulsPageComponents/quizmodul.css';
import '../components/HomePageComponents/card.css';
import LanguageCard from '../components/QuizModulsPageComponents/LanguageCard';

function QuizModuls() {
  return (
    <div className="quizmodul_main_container">
      <LanguageCard language="HTML" />
      <LanguageCard language="CSS" />
      <LanguageCard language="JavaScript" />
    </div>
  );
}

export default QuizModuls;
