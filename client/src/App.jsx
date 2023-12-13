import { Routes, Route } from 'react-router-dom';
import './App.css';
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
  );
}

export default App;
