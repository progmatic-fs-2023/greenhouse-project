/* // QuizForm.js
import React, { useState } from 'react';

const QuizForm = () => {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState(['', '', '', '']);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [formErrors, setFormErrors] = useState({}); // Új állapot a validációs hibák tárolásához

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleCheckboxChange = (index) => {
    const newCorrectAnswers = [...correctAnswers];
    const isAlreadySelected = newCorrectAnswers.includes(index);

    if (isAlreadySelected) {
      newCorrectAnswers.splice(newCorrectAnswers.indexOf(index), 1);
    } else {
      newCorrectAnswers.push(index);
    }

    setCorrectAnswers(newCorrectAnswers);
  };

  const handleTopicChange = (e) => {
    setSelectedTopic(e.target.value);
  };

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  const validateForm = () => {
    const errors = {};

    if (!question.trim()) {
      errors.question = 'A kérdés nem lehet üres.';
    }

    if (!selectedTopic) {
      errors.topic = 'Válassz egy témát.';
    }

    if (!difficulty) {
      errors.difficulty = 'Válassz nehézségi szintet.';
    }

    answers.forEach((answer, index) => {
      if (!answer.trim()) {
        errors[`answer${index + 1}`] = `A válasz ${index + 1}. opció nem lehet üres.`;
      }
    });

    if (correctAnswers.length === 0) {
      errors.correctAnswers = 'Jelölj legalább egy helyes választ.';
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0; // Ha nincs hiba, a validáció sikeres
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(correctAnswers, answers);

    if (validateForm()) {
      // Csak akkor folytassa a beküldést, ha a validáció sikeres
      // Frontend oldali műveletek, pl. API hívás vagy adatok küldése a backend felé
      const response = await fetch('http://localhost:3030/api/admin/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question,
          answers,
          correctAnswers,
          selectedTopic,
          difficulty,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        // Ha sikeres a beküldés, akkor ide kerülhetnek további műveletek
        console.log('Sikeres beküldés!', responseData);
      } else {
        console.log('A beküldés sikertelen. Kérem, ellenőrizze a megadott adatokat.');
      }
      console.log('Question:', question);
      console.log('Topic:', selectedTopic);
      console.log('Difficulty:', difficulty);
      console.log('Answers:', answers);
      console.log('Correct Answers:', correctAnswers);
    }
  };

  return (
    <div>
      <h1>Kvíz Űrlap</h1>

      <p>
        Adja meg a kérdést a négy válasszal, majd jelölje be csak az igaz válaszokat a válaszok
        alatt lévő checkboxok segítségével.
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="tema">Válassz egy témát:</label>
          <select id="tema" onChange={handleTopicChange} value={selectedTopic} required>
            <option value="" disabled>
              Válassz egy témát
            </option>
            <option value="1">HTML</option>
            <option value="2">CSS</option>
            <option value="3">JavaScript</option>
          </select>
        </div>

        <div>
          <label htmlFor="nehezseg">Nehézségi szint:</label>
          <select id="nehezseg" onChange={handleDifficultyChange} value={difficulty} required>
            <option value="" disabled>
              Válassz nehézségi szintet
            </option>
            <option value="EASY">Easy</option>
            <option value="MEDIUM">Medium</option>
            <option value="HARD">Hard</option>
          </select>
        </div>

        <div>
          <label htmlFor="kerdes">Kérdés:</label>
          <input
            type="text"
            id="kerdes"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>

        {answers.map((answer, index) => (
          <div key={index}>
            <label htmlFor={`valasz${index + 1}`}>Válasz {index + 1}:</label>
            <input
              type="text"
              id={`valasz${index + 1}`}
              value={answer}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
              placeholder={`Adja meg a választ ${index + 1}. opcióhoz...`}
              required
            />
          </div>
        ))}

        <div>
          {answers.map((_, index) => (
            <div key={index}>
              <label>
                <input
                  type="checkbox"
                  checked={correctAnswers.includes(index)}
                  onChange={() => handleCheckboxChange(index)}
                />{' '}
                {answers[index]}
              </label>
            </div>
          ))}
        </div>

        <div>
          {Object.keys(formErrors).map((key) => (
            <p key={key} style={{ color: 'red', margin: '0' }}>
              {formErrors[key]}
            </p>
          ))}
        </div>

        <button type="submit">Űrlap elküldése</button>
      </form>
    </div>
  );
};

export default QuizForm;
 */
