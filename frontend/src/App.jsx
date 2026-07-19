import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import ProfileSetup from './components/ProfileSetup';
import LandingPage from './components/LandingPage';
import ProtectedRoute from './components/ProtectedRoute';
import SplashVideo from './components/SplashVideo';

export default function App() {
  const [showSplash, setShowSplash] = useState(
    () => !sessionStorage.getItem('splashSeen')
  );

  const handleSplashFinish = () => {
    sessionStorage.setItem('splashSeen', 'true');
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashVideo onFinish={handleSplashFinish} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile-setup" element={
          <ProtectedRoute>
            <ProfileSetup />
          </ProtectedRoute>
        } />
        <Route path="/home" element={
          <ProtectedRoute>
            <LandingPage />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}
