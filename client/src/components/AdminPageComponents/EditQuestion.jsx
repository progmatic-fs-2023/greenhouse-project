import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './AdminPageComponents.css';

function EditPage() {
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [search, setSearch] = useState('');
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedQuestion, setUpdatedQuestion] = useState('');

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      setError('');

      const response = await fetch(
        `http://localhost:3030/api/admin/edit?topic=${topic}&difficulty=${difficulty}&search=${search}`,
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch questions.');
      }

      const questions = await response.json();
      setQuestions(questions);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
    setUpdatedQuestion(question.description); // Initialize the textarea with the current question's description
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    setSelectedQuestion({
      ...selectedQuestion,
      description: e.target.value,
    });
  };

  const handleSaveChanges = () => {
    // Add logic to save changes to the backend or perform other actions
    setIsModalOpen(false);
  };

  const handleUpdateQuestion = async () => {
    try {
      const response = await fetch(`http://localhost:3030/api/admin/edit/${selectedQuestion.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ updatedQuestion }),
      });

      if (!response.ok) {
        throw new Error('Failed to update question. Please try again.');
      }

      // Assuming the backend returns the updated question object
      const updatedQuestionFromBackend = await response.json();

      // Update the local questions state with the updated question
      setQuestions((prevQuestions) =>
        prevQuestions.map((question) =>
          question.id === selectedQuestion.id ? updatedQuestionFromBackend : question,
        ),
      );

      // Handle success, e.g., close the modal, reset state, etc.
      setIsModalOpen(false);
      setUpdatedQuestion('');
    } catch (error) {
      console.error('Error updating question:', error.message);
      // Handle error, e.g., show an error message to the user
    }
  };

  useEffect(() => {
    if (topic && difficulty) {
      fetchQuestions();
    }
  }, [topic, difficulty, search]);

  return (
    <div>
      <h2>Edit Page</h2>

      <div>
        <label>
          Select Topic:
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
          Select Difficulty:
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
          Search:
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        </label>

        <button onClick={fetchQuestions}>Search</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {questions.length > 0 && (
        <div>
          <h3>Questions:</h3>
          <ul>
            {questions.map((question) => (
              <li
                key={question.id}
                className="question-item"
                onClick={() => handleQuestionClick(question)}
              >
                {question.description}
              </li>
            ))}
          </ul>
        </div>
      )}

      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
        {selectedQuestion && (
          <div>
            <h2>Edit Question</h2>
            <label>
              Question Description:
              <textarea
                value={updatedQuestion}
                onChange={(e) => setUpdatedQuestion(e.target.value)}
                rows={3}
                cols={40}
                style={{ resize: 'none' }}
              />
            </label>
            {/* Add additional form fields and update logic as needed */}
            <button onClick={handleUpdateQuestion}>Update Question</button>
            <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default EditPage;
