import React, { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Modal from 'react-modal';
import './AdminPageComponents.css';

//! Admit that, only God knows what's in this code.

function EditPage() {
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [search, setSearch] = useState('');
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorState, setErrorState] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedQuestion, setUpdatedQuestion] = useState('');

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      setErrorState('');

      const response = await fetch(
        `http://localhost:3030/api/admin/edit?topic=${topic}&difficulty=${difficulty}&search=${search}`,
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch questions.');
      }

      const fetchedQuestions = await response.json();
      setQuestions(fetchedQuestions);
    } catch (error) {
      setErrorState(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
    setUpdatedQuestion(question.description);
    setIsModalOpen(true);
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

      const updatedQuestionFromBackend = await response.json();

      setQuestions((prevQuestions) =>
        prevQuestions.map((question) =>
          question.id === selectedQuestion.id ? updatedQuestionFromBackend : question,
        ),
      );

      setIsModalOpen(false);
      setUpdatedQuestion('');
    } catch (error) {
      throw new Error('Error updating question:', error.message);
    }
  };

  useEffect(() => {
    if (topic && difficulty) {
      fetchQuestions();
    }
  }, [topic, difficulty, search]);

  return (
    <div className='edit_question_main_container'>
      <div className='edit_question_container'>
      <h2>Edit Page</h2>
      <div className='edit_question_form'>
        <label htmlFor="topicSearch">
          Select Topic:
          <select id="topicSearch" value={topic} onChange={(e) => setTopic(e.target.value)}>
            <option value="" disabled>
              Select Topic
            </option>
            <option value={Number(1)}>HTML</option>
            <option value={Number(2)}>CSS</option>
            <option value={Number(3)}>JavaScript</option>
          </select>
        </label>

        <label htmlFor="diffSearch">
          Select Difficulty:
          <select
            id="diffSearch"
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

        <label htmlFor="textSearch">
          Search:
          <input
            id="textSearch"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>

        <button type="button" onClick={fetchQuestions}>
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {errorState && <p className='error-message'>{errorState}</p>}

      {questions.length > 0 && (
        <div className='questions_container'>
          <h3>Questions:</h3>
          <ul>
            {questions.map((question) => (
              <li
                role="presentation"
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
            <label htmlFor="questionTextarea">
              Question Description:
              <textarea
                id="questionTextarea"
                value={updatedQuestion}
                onChange={(e) => setUpdatedQuestion(e.target.value)}
                rows={3}
                cols={40}
                style={{ resize: 'none' }}
              />
            </label>
            <button type="button" onClick={handleUpdateQuestion}>
              Update Question
            </button>
            <button type="button" onClick={() => setIsModalOpen(false)}>
              Close Modal
            </button>
          </div>
        )}
      </Modal>
    </div>
    </div>
  );
}

export default EditPage;
