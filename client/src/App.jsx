import { Routes, Route } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
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
=======
import AdminLogin from './components/AdminLoginComponents/AdminLogin';
import QuizModuls from './components/QuizModulsComponents/QuizModuls/QuizModuls';
import Home from './components/HomeComponents/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/quizmoduls" element={<QuizModuls />} />
    </Routes>
>>>>>>> main
  );
}

export default App;
