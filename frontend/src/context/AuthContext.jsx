import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import * as authService from '../services/authService';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await authService.getCurrentUser();
        setUser(res.data?.user ?? res.user ?? null);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const login = useCallback(async (email, password) => {
    const res = await authService.login(email, password);
    const userData = res.data?.user ?? res.user;
    setUser(userData);
    return userData;
  }, []);

  const logout = useCallback(async () => {
    await authService.logout();
    setUser(null);
  }, []);

  const updateProfile = useCallback(async (profileData) => {
    const res = await authService.updateProfile(profileData);
    const userData = res.data?.user ?? res.user;
    setUser(userData);
    return userData;
  }, []);

  const googleLogin = useCallback(async (accessToken) => {
    const res = await authService.googleLogin(accessToken);
    const userData = res.data?.user ?? res.user;
    setUser(userData);
    return userData;
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, googleLogin, updateProfile, loading, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
