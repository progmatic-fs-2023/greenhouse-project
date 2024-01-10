import React, { useState } from 'react';
import './QuestionForm.css';

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

    // Validate form inputs
    if (!difficulty || !topic || !question || answers.some((answer) => answer.text.trim() === '')) {
      setFormError('Please fill in all required fields.');
      return;
    }

    // Check if at least one correct answer is selected
    if (!answers.some((answer) => answer.isCorrect)) {
      setFormError('Please select at least one correct answer.');
      return;
    }

    try {
      // Send the data to the backend API endpoint using fetch
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
        // Handle error responses
        const errorData = await response.json();
        setFormError(errorData.error || 'Failed to add question.');
        return;
      }

      // Clear the form fields and error message after successful submission
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
      // Handle errors from the fetch request
      console.error('Fetch error:', error);
      setFormError('Failed to add question. Please try again.');
    }
  };

  return (
    <div className="question-form-container">
      <h2>Quiz Form</h2>
      <p>This form allows you to add a question with one correct and three wrong answers.</p>

      {formError && <p className="error-message">{formError}</p>}

      <form className="quiz-form" onSubmit={handleSubmit}>
        <label>
          Difficulty:
          <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
            <option value="" disabled>
              Select Difficulty
            </option>
            <option value="EASY">Easy</option>
            <option value="MEDIUM">Medium</option>
            <option value="HARD">Hard</option>
          </select>
        </label>

        <label>
          Topic:
          <select value={topic} onChange={(e) => setTopic(e.target.value)}>
            <option value="" disabled>
              Select Topic
            </option>
            <option value={Number(1)}>HTML</option>
            <option value={Number(2)}>CSS</option>
            <option value={Number(3)}>JavaScript</option>
          </select>
        </label>

        <label>
          Question:
          <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
        </label>

        <label>
          Answers:
          {answers.map((answer, index) => (
            <div key={index} className="answer-group">
              <label>
                Answer {index + 1}:
                <input
                  type="text"
                  value={answer.text}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                />
              </label>
              <label>
                Correct:
                <input
                  type="checkbox"
                  checked={answer.isCorrect}
                  onChange={() => handleCheckboxChange(index)}
                />
              </label>
            </div>
          ))}
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default QuestionForm;
