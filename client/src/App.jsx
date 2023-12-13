import { Routes, Route } from 'react-router-dom';
import './App.css';
import AdminLogin from './components/AdminLogin';
import QuizModuls from './components/QuizModuls/QuizModuls';
import AppDiv from './components/AppDiv';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppDiv />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/quizmoduls" element={<QuizModuls />} />
    </Routes>
  );
}

export default App;
