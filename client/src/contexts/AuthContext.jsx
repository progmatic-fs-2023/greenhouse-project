import { createContext, useContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const login = (userData) => {
    setIsLoggedIn(true);
    setUsername(userData);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  const roleCheck = (role) => {
    if (role === 'admin') {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  };

  // Memoize the context value to avoid unnecessary re-renders
  const authContextValue = useMemo(
    () => ({ isLoggedIn, login, logout, username, roleCheck, isAdmin }),
    [isLoggedIn, username, isAdmin],
  );

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);
