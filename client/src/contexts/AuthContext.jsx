import { createContext, useContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const login = (userData) => {
    setIsLoggedIn(true);
    setUsername(userData);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  // Memoize the context value to avoid unnecessary re-renders
  const authContextValue = useMemo(
    () => ({ isLoggedIn, login, logout, username }),
    [isLoggedIn, username],
  );

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);
