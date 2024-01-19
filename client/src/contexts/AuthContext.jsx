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
export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const [userId, setUserId] = useState(initUserId(token));
  const [username, setUsername] = useState('');
  const [userRole, setUserRole] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userCreationDate, setuserCreationDate] = useState('');

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
          setuserCreationDate(responseData.createdAt);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    }

    fetchUserData();
  }, [userId]);

  const login = (userData) => {
    setToken(userData.token);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUsername('');
    setUserRole('');
    setUserEmail('');
    setuserCreationDate('');
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
    }),
    [isLoggedIn, username, userRole, userEmail, userCreationDate, userId, token, setUserEmail],
  );

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);
