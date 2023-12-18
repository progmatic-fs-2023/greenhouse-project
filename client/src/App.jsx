import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import QuizModuls from './components/QuizModulsComponents/QuizModuls/QuizModuls';
import Home from './pages/Home';
import QuizPage from './pages/Quizpage';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quizmoduls" element={<QuizModuls />} />
        <Route path="/quizpage" element={<QuizPage />} />
      </Route>
    </Routes>
  );
}

export default App;
