/* import React, { useState, useEffect } from 'react';

function EditPage() {
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async (topic, difficulty) => {
    try {
      const response = await fetch(
        `http://localhost:3030/api/admin/edit?topic=${topic}&difficulty=${difficulty}`,
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch questions.');
      }

      const data = await response.json();
      console.log(data);
      return data.description;
    } catch (error) {
      console.error('Error fetching questions:', error.message);
      throw new Error('Failed to fetch questions. Please try again.');
    }
  };

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      setError('');

      const fetchedQuestions = await fetchData(topic, difficulty);
      setQuestions(fetchedQuestions);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (topic && difficulty) {
      fetchQuestions();
    }
  }, [topic, difficulty]);

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

        <button onClick={fetchQuestions}>Search</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {questions.length > 0 && (
        <div>
          <h3>Questions:</h3>
          <ul>
            {questions.map((question) => (
              <li key={question.id}>{question.description}</li>
              // Add additional details or components to display the questions as needed
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default EditPage;
 */

/* import React, { useState, useEffect } from 'react';

const fetchQuestions = async (topic, difficulty, searchQuery) => {
  try {
    const response = await fetch(
      `http://localhost:3030/api/admin/edit?topic=${topic}&difficulty=${difficulty}&search=${searchQuery}`,
    );

    if (!response.ok) {
      throw new Error('Failed to fetch questions. Please try again.');
    }

    const data = await response.json();
    return data.questions; // Assuming the structure is { questions: [...] }
  } catch (error) {
    throw new Error('Failed to fetch questions. Please try again.');
  }
};

function EditPage() {
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      setLoading(true);
      setError('');

      const fetchedQuestions = await fetchQuestions(topic, difficulty, searchQuery);
      setQuestions(fetchedQuestions);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (topic && difficulty) {
      handleSearch();
    }
  }, [topic, difficulty]);

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
          Search Query:
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </label>

        <button onClick={handleSearch}>Search</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {questions.length > 0 && (
        <div>
          <h3>Questions:</h3>
          <ul>
            {questions.map((question) => (
              <li key={question.id}>{question.description}</li>
              // Add additional details or components to display the questions as needed
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default EditPage;
 */

/* import React, { useState, useEffect } from 'react';

function EditPage() {
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [search, setSearch] = useState('');
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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
      console.log(questions);
      setQuestions(questions);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
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
              <li key={question.id}>{question.description}</li>
              // Add additional details or components to display the questions as needed
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default EditPage; */

/* import React, { useState, useEffect } from 'react';

function EditPage() {
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [search, setSearch] = useState('');
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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
      console.log(questions);
      setQuestions(questions);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
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
              <li key={question.id}>{question.description}</li>
              // Add additional details or components to display the questions as needed
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default EditPage;
 */
