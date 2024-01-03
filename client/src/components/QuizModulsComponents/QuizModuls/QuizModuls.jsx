import './quizmodul.css';
import '../../HomepageComponents/card.css';
import LanguageCard from './LanguageCard';
import Description from './Description'

function QuizModuls() {
  return (
    <div className='quizmodul_container'>
      <div className="description_container">
        <Description />
      </div>
      <div className="quizmodul_main_container">
        <LanguageCard  title="< / >" language="HTML" />
        <LanguageCard title="{ }" language="CSS" />
        <LanguageCard title="JS" language="JavaScript" />
      </div>
    </div>
  );
}

export default QuizModuls;
