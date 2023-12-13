import './App.css';
import { useEffect, useState } from 'react';
import { API_URL } from './constants';
import QuizPage from './pages/quiz-page';

function App() {
  const [isConnect, setIsConnect] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}`).then((response) => {
      if (response.ok) setIsConnect(true);
    });
  }, []);

  return (
    <div>
      <QuizPage />
      <ul>
        <li>
          {isConnect ? '✅' : '️❗️'} Connect to backend {!isConnect && 'failed'}
        </li>
      </ul>
    </div>
  );
}

export default App;
