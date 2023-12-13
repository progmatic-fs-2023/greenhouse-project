import { useState } from 'react';
import PropTypes from 'prop-types';

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
    <div style={{ textAlign: 'center', padding: '20px', border: '1px solid #ddd', margin: '10px' }}>
      <h3>{language}</h3>
      <div>
        <label htmlFor="difficulty">
          Select Difficulty:
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
