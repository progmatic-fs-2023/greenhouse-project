import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import CardHeader from '../HomePageComponents/CardHeader';
import { QuizContext } from '../../contexts/QuizContext';

function LanguageCard({ title, language }) {
  const [difficulty, setDifficulty] = useState('EASY');
  const [numQuestions, setNumQuestions] = useState(5);
  const { getQuiz } = useContext(QuizContext);
  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  const handleNumQuestionsChange = (e) => {
    setNumQuestions(Number(e.target.value));
  };

  return (
    <div className="card">
      <CardHeader />
      <div className="language_card_content">
        <p className="title_text">{title}</p>
        <h3>{language}</h3>
      </div>
      <div className="language_card_options">
        <label htmlFor="difficulty">
          Select Difficulty:
          <br />
          <select id="difficulty" value={difficulty} onChange={handleDifficultyChange}>
            <option value="EASY">Easy</option>
            <option value="MEDIUM">Medium</option>
            <option value="HARD">Hard</option>
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="numberOfQuestions">
          Number of Questions:
          <br />
          <input
            id="numberOfQuestions"
            type="number"
            value={numQuestions}
            onChange={handleNumQuestionsChange}
            min="1"
          />
        </label>
      </div>
      <NavLink to="/quizpage">
        <button
          type="button"
          style={{ marginTop: '20px' }}
          onClick={() => {
            getQuiz(language, difficulty, numQuestions);
          }}
        >
          Start Quiz
        </button>
      </NavLink>
    </div>
  );
}
LanguageCard.propTypes = {
  language: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default LanguageCard;
