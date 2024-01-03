import { Routes, Route } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import Login from './pages/Login';
import QuizModuls from './pages/QuizModuls';
import Home from './pages/Home';
import QuizPage from './pages/Quizpage';
import Layout from './components/Layout/Body/LayoutBody';
import Register from './pages/Register';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quizmoduls" element={<QuizModuls />} />
          <Route path="/quizpage" element={<QuizPage />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
