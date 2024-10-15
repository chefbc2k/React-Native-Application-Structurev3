import { useState, useEffect } from 'react';
import { authService } from '../services/authService';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    const status = await authService.checkAuthStatus();
    setIsAuthenticated(status);
  };

  const login = async (email: string, password: string) => {
    const success = await authService.login(email, password);
    if (success) {
      setIsAuthenticated(true);
    }
    return success;
  };

  const register = async (email: string, password: string) => {
    const success = await authService.register(email, password);
    if (success) {
      setIsAuthenticated(true);
    }
    return success;
  };

  const logout = async () => {
    await authService.logout();
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, register, logout };
};