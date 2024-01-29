import { createContext, useContext, useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { jwtDecode } from 'jwt-decode';
import { API_URL } from '../constants';

const AuthContext = createContext();

const initUserId = (token) => {
  if (!token) return '';
  const decodedToken = jwtDecode(token);
  return decodedToken.id ? decodedToken.id : '';
};
const initUserRole = (token) => {
  if (!token) return '';
  const decodedToken = jwtDecode(token);
  return decodedToken.role ? decodedToken.role : '';
};

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const [userId, setUserId] = useState(initUserId(token));
  const [username, setUsername] = useState('');
  const [userRole, setUserRole] = useState(initUserRole);
  const [userEmail, setUserEmail] = useState('');
  const [userCreationDate, setUserCreationDate] = useState('');
  const [userXp, setUserXp] = useState(undefined);
  const [errorState, setErrorState] = useState('');
  const [subscribed, setSubscribed] = useState()

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      const decodedToken = jwtDecode(token);
      setIsLoggedIn(true);
      setUserId(decodedToken.id);
    }
  }, [token]);

  useEffect(() => {
    async function fetchUserData() {
      if (token && isLoggedIn) {
        try {
          const response = await fetch(`${API_URL}/userdata/${userId}`);
          const responseData = await response.json();
          setUserRole(responseData.role);
          setUsername(responseData.username);
          setUserEmail(responseData.email);
          setUserCreationDate(responseData.createdAt);
          setUserXp(responseData.score.xp);
          setSubscribed(responseData.isSubscribed);
        } catch (error) {
          setErrorState(error.message);
        }
      }
    }

    fetchUserData();
  }, [userId, userEmail, username, userXp, subscribed]);

  async function fetchUserScore() {
    if (token && isLoggedIn) {
      try {
        const response = await fetch(`${API_URL}/userdata/score/${userId}`);
        const responseData = await response.json();
        setUserXp(responseData.xp);
      } catch (error) {
        setErrorState(error.message);
      }
    }
  }

  const login = (userData) => {
    setToken(userData.token);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUsername('');
    setUserRole('');
    setUserEmail('');
    setUserCreationDate('');
    setUserId('');
    setToken('');
  };

  const authContextValue = useMemo(
    () => ({
      isLoggedIn,
      login,
      logout,
      username,
      userRole,
      userEmail,
      userCreationDate,
      userId,
      token,
      setUserEmail,
      setUsername,
      setUserXp,
      errorState,
      userXp,
      fetchUserScore,
      subscribed,
      setSubscribed,
    }),
    [
      isLoggedIn,
      username,
      userRole,
      userEmail,
      userCreationDate,
      userId,
      token,
      setUserEmail,
      setUsername,
      setUserXp,
      errorState,
      userXp,
      fetchUserScore,
      subscribed,
    ],
  );

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);
