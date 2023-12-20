import { useState } from 'react';
import PropTypes from 'prop-types';
import CardHeader from '../HomePageComponents/CardHeader';

function LanguageCard({ language }) {
  const [difficulty, setDifficulty] = useState('easy');
  const [numQuestions, setNumQuestions] = useState(5);

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
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/2048px-Solid_white.svg.png"
          alt="html-img"
          className="card_img"
        />
        <h3>{language}</h3>
      </div>
      <div className="language_card_options">
        <label htmlFor="difficulty">
          Select Difficulty:
          <br />
          <select id="difficulty" value={difficulty} onChange={handleDifficultyChange}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
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
      <button type="button" style={{ marginTop: '20px' }}>
        Start Quiz
      </button>
    </div>
  );
}
LanguageCard.propTypes = { language: PropTypes.string.isRequired };
export default LanguageCard;