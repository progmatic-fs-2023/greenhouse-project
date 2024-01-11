import { createContext, useContext, useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

const initUserRole = (token) => {
  if (!token) return '';
  const decodedToken = jwtDecode(token);
  return decodedToken.role ? decodedToken.role : '';
};
const initUsername = (token) => {
  if (!token) return '';
  const decodedToken = jwtDecode(token);
  return decodedToken.username ? decodedToken.username : '';
};
const initUserEmail = (token) => {
  if (!token) return '';
  const decodedToken = jwtDecode(token);
  return decodedToken.email ? decodedToken.email : '';
};
const initUserCreationDate = (token) => {
  if (!token) return '';
  const decodedToken = jwtDecode(token);
  return decodedToken.createdAt ? decodedToken.createdAt : '';
};
export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const [username, setUsername] = useState(initUsername(token));
  const [userRole, setUserRole] = useState(initUserRole(token));
  const [userEmail, setUserEmail] = useState(initUserEmail(token));
  const [userCreationDate, setuserCreationDate] = useState(initUserCreationDate(token));

  useEffect(() => {

    if (token) {
      localStorage.setItem('token', token);
      const decodedToken = jwtDecode(token);
      setIsLoggedIn(true);
      setUserRole(decodedToken.role);
      setUsername(decodedToken.username);
      setUserEmail(decodedToken.email);
      setuserCreationDate(decodedToken.createdAt);
    }
  }, [token]);

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
  };

  const authContextValue = useMemo(
    () => ({ isLoggedIn, login, logout, username, userRole, userEmail, userCreationDate }),
    [isLoggedIn, username, userRole, userEmail, userCreationDate],
  );

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);
