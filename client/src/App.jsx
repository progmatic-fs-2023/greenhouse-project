import { Routes, Route } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import Login from './pages/Login';
import QuizModuls from './pages/QuizModuls';
import Home from './pages/Home';
import QuizPage from './pages/Quizpage';
import MainLayout from './components/Layout/MainLayout/Body/LayoutBody';
import Register from './pages/Register';
import QuizProvider from './contexts/QuizContext';
import Profile from './pages/Profile';
import Account from './components/ProfilePageComponents/Account';
import Password from './components/ProfilePageComponents/Password';
import DailyGoal from './components/ProfilePageComponents/DailyGoal';
import Leaderboard from './components/ProfilePageComponents/Leaderboard';
import Premium from './components/ProfilePageComponents/Premium';
import Notifications from './components/ProfilePageComponents/Notifications';
import ProtectedRoute from './components/ProtectedPageComponents/ProtectedRoute';
import AdminPage from './pages/AdminPage';
import NewQuestion from './components/AdminPageComponents/NewQuestion';
import EditQuestion from './components/AdminPageComponents/EditQuestion';

function App() {
  return (
    <AuthProvider>
      <QuizProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quizmoduls" element={<QuizModuls />} />
            <Route path="/quizpage" element={<QuizPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />}>
              <Route path="account" element={<Account />} />
              <Route path="password" element={<Password />} />
              <Route path="daily-goal" element={<DailyGoal />} />
              <Route path="leaderboard" element={<Leaderboard />} />
              <Route path="premium" element={<Premium />} />
              <Route path="notifications" element={<Notifications />} />
            </Route>
            <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/admin/new" element={<NewQuestion />} />
              <Route path="/admin/edit" element={<EditQuestion />} />
            </Route>
            {/* <Route path="/admin/edit" element={<EditQuestion />} /> */}
          </Route>
        </Routes>
      </QuizProvider>
    </AuthProvider>
  );
}

export default App;
