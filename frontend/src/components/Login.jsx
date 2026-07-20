import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from '../context/AuthContext';
import '../styles/Auth.css';

export default function Login() {
  const navigate = useNavigate();
  const { login: authLogin, googleLogin } = useAuth();
  const [formData, setFormData] = useState({
    emailOrMobile: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleSuccess = async (credentialResponse) => {
    console.log('[Google Login] credentialResponse:', credentialResponse);
    const credential = credentialResponse.credential;
    console.log('[Google Login] credential present:', !!credential);
    if (!credential) {
      setErrors((prev) => ({ ...prev, auth: 'Google sign-in failed. Could not retrieve credential.' }));
      return;
    }
    try {
      const result = await googleLogin(credential);
      console.log('[Google Login] Backend response:', result);
      if (result.data?.user?.profileCompleted) {
        navigate('/home');
      } else {
        navigate('/profile-setup');
      }
    } catch (err) {
      console.error('[Google Login] Backend error:', err);
      setErrors((prev) => ({ ...prev, auth: 'Google sign-in failed. Please try again.' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const val = formData.emailOrMobile.trim();

    if (!val) {
      newErrors.emailOrMobile = 'Email or Mobile Number is required';
    } else {
      const isDigits = /^\d+$/.test(val);
      if (isDigits) {
        if (val.length !== 10) {
          newErrors.emailOrMobile = 'Mobile number must be exactly 10 digits';
        }
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(val)) {
          newErrors.emailOrMobile = 'Please enter a valid email address';
        }
      }
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        setErrors({});
        const userData = await authLogin(formData.emailOrMobile.trim(), formData.password);
        if (userData?.profileCompleted) {
          navigate('/home');
        } else {
          navigate('/profile-setup');
        }
      } catch (err) {
        setErrors((prev) => ({
          ...prev,
          auth: err.message || 'Invalid email, mobile number, or password',
        }));
      }
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear errors when typing
    setErrors((prev) => ({
      ...prev,
      [name]: null,
      auth: null,
    }));
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="barcode-strip"></div>
        <div className="auth-header">
          <div className="logo">
            <span className="dot"></span>SelfCart
          </div>
          <h2>Sign In</h2>
          <p>Access your queue-free shopping portal</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="emailOrMobile">Email or Mobile Number</label>
            <div className="form-input-wrapper">
              <input
                id="emailOrMobile"
                type="text"
                name="emailOrMobile"
                value={formData.emailOrMobile}
                onChange={handleChange}
                placeholder="e.g. shopper@selfcart.com or 9876543210"
                className={`form-input ${errors.emailOrMobile ? 'input-error' : ''}`}
              />
              {errors.emailOrMobile && <span className="error-text">{errors.emailOrMobile}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="form-input-wrapper">
              <div style={{ position: 'relative' }}>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`form-input ${errors.password ? 'input-error' : ''}`}
                  style={{ paddingRight: '40px' }}
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && <span className="error-text">{errors.password}</span>}
            </div>
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              Remember Me
            </label>
            <Link to="/forgot-password" className="auth-link">
              Forgot Password?
            </Link>
          </div>

          {errors.auth && (
            <div className="error-text" style={{ textAlign: 'center', marginBottom: '8px' }}>
              {errors.auth}
            </div>
          )}

          <div className="auth-actions">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={() => setErrors((prev) => ({ ...prev, auth: 'Google sign-in failed.' }))}
                theme="filled_black"
                size="large"
                shape="rectangular"
                text="continue_with"
            />
            </div>
        </form>

        <div className="auth-footer">
          <p>
            {"New to SelfCart? "}
            <Link to="/signup">Create New Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
