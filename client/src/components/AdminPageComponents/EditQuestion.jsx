import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './AdminPageComponents.css';
import NewQuestionForm from './QuestionForm';

function EditPage() {
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [search, setSearch] = useState('');
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorState, setErrorState] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      console.log(fetchedQuestions);
      setQuestions(fetchedQuestions);
    } catch (error) {
      setErrorState(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
    setIsModalOpen(true);
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
      {errorState && <p style={{ color: 'red' }}>{errorState}</p>}

      {questions.length > 0 && (
        <div>
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

      <Modal isOpen={isModalOpen} ariaHideApp={false} onRequestClose={() => setIsModalOpen(false)}>
        {selectedQuestion && (
          <div>
            <h2>Edit Question</h2>
            <NewQuestionForm
              QuestionProps={selectedQuestion.description}
              AnswersProps={selectedQuestion.answers}
              DifficultyProps={selectedQuestion.level}
              TopicProps={selectedQuestion.topicId}
              IdProps={selectedQuestion.id}
            />

            <button type="button" onClick={() => setIsModalOpen(false)}>
              Close Modal
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default EditPage;
