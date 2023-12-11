import './App.css';
import AdminLogin from './components/AdminLogin';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import QuizModuls from './components/QuizModuls/QuizModuls';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/admin" element={<AdminLogin />}></Route>
      <Route path='/quizmoduls' element={<QuizModuls/>}></Route>
    </Routes>
  );
}

export default App;
