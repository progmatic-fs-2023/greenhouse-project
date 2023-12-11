import LanguageCard from './LanguageCard';

const QuizModuls = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <LanguageCard language="HTML" />
      <LanguageCard language="CSS" />
      <LanguageCard language="JavaScript" />
    </div>
  );
};

export default QuizModuls;
