import '../components/QuizModulsPageComponents/quizmodul.css';
import '../components/HomePageComponents/card.css';
import Description from '../components/QuizModulsPageComponents/Description';
import LanguageCard from '../components/QuizModulsPageComponents/LanguageCard';

function QuizModuls() {
  return (
    <div className="quizmodul_main_container">
      <Description />
      <div className='language_card_container'>
      <LanguageCard title='< / >' language="HTML" />
      <LanguageCard title='{ }' language="CSS" />
      <LanguageCard title='JS' language="JavaScript" />
      </div>
    </div>
  );
}

export default QuizModuls;
