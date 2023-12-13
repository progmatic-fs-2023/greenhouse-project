import './App.css';
import AdminLogin from './components/AdminLogin';
import { Routes, Route } from 'react-router-dom';
import QuizModuls from './components/QuizModuls/QuizModuls';
import AppDiv from './components/AppDiv';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppDiv />}></Route>
      <Route path="/admin" element={<AdminLogin />}></Route>
      <Route path="/quizmoduls" element={<QuizModuls />}></Route>
    </Routes>
  );
}

export default App;
