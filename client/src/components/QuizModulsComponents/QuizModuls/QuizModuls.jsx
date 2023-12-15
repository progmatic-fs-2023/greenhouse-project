import './quizmodul.css';
import '../../HomepageComponents/card.css';
import LanguageCard from './LanguageCard';

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
