import React, { useState } from 'react';
import './AdminPageComponents.css';
import '../../login.css';

function QuestionForm() {
  const [difficulty, setDifficulty] = useState('');
  const [topic, setTopic] = useState('');
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([
    { text: '', isCorrect: false },
    { text: '', isCorrect: false },
    { text: '', isCorrect: false },
    { text: '', isCorrect: false },
  ]);
  const [formError, setFormError] = useState('');

  const handleAnswerChange = (index, text) => {
    const newAnswers = [...answers];
    newAnswers[index].text = text;
    setAnswers(newAnswers);
  };

  const handleCheckboxChange = (index) => {
    const newAnswers = [...answers];
    newAnswers[index].isCorrect = !newAnswers[index].isCorrect;
    setAnswers(newAnswers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!difficulty || !topic || !question || answers.some((answer) => answer.text.trim() === '')) {
      setFormError('Please fill in all required fields.');
      return;
    }

    if (!answers.some((answer) => answer.isCorrect)) {
      setFormError('Please select at least one correct answer.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3030/api/admin/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          difficulty,
          topic,
          question,
          answers,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setFormError(errorData.error || 'Failed to add question.');
        return;
      }

      setDifficulty('');
      setTopic('');
      setQuestion('');
      setAnswers([
        { text: '', isCorrect: false },
        { text: '', isCorrect: false },
        { text: '', isCorrect: false },
        { text: '', isCorrect: false },
      ]);
      setFormError('');
    } catch (error) {
      setFormError('Failed to add question. Please try again.');
    }
  };

  return (
    <div className="question-container">
      <div className="question-form-container">
        <h2>Quiz Form</h2>
        <p id="question-form-p">
          This form allows you to add a question with one correct and three wrong answers.
        </p>

        <form className="quiz-form" onSubmit={handleSubmit}>
          <label htmlFor="difficulty">
            Difficulty:
            <select
              id="difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="" disabled>
                Select Difficulty
              </option>
              <option value="EASY">Easy</option>
              <option value="MEDIUM">Medium</option>
              <option value="HARD">Hard</option>
            </select>
          </label>

          <label htmlFor="topic">
            Topic:
            <select id="topic" value={topic} onChange={(e) => setTopic(e.target.value)}>
              <option value="" disabled>
                Select Topic
              </option>
              <option value={Number(1)}>HTML</option>
              <option value={Number(2)}>CSS</option>
              <option value={Number(3)}>JavaScript</option>
            </select>
          </label>

          <label htmlFor="question">
            Question:
            <input
              id="question"
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </label>

          <label htmlFor="answers">
            {answers
              .map((a, index) => ({ key: `a-${index}`, ...a }))
              .map((answer, index) => (
                <div id="answers" key={answer.key} className="answer-group">
                  <label htmlFor="answer">
                    Answer {index + 1}:
                    <input
                      id="answer"
                      type="text"
                      value={answer.text}
                      onChange={(e) => handleAnswerChange(index, e.target.value)}
                    />
                  </label>
                  <label htmlFor="checkbox">
                    Correct:
                    <input
                      id="checkbox"
                      type="checkbox"
                      checked={answer.isCorrect}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </label>
                </div>
              ))}
          </label>

          {formError && <p className="error-message">{formError}</p>}

          <button type="submit" className="admin-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default QuestionForm;
