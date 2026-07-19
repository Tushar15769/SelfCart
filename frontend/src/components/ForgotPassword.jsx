import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Input Email/Mobile, 2: OTP & New Password
  const [emailOrMobile, setEmailOrMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateStep1 = () => {
    const newErrors = {};
    const val = emailOrMobile.trim();

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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (validateStep1()) {
      setSuccessMsg('OTP sent successfully (Use code: 123456)');
      setStep(2);
      setErrors({});
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!otp.trim()) {
      newErrors.otp = 'OTP is required';
    } else if (otp.trim() !== '123456') {
      newErrors.otp = 'Invalid OTP. Please enter 123456';
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setIsOtpVerified(true);
      setSuccessMsg('OTP verified successfully. Please enter your new password.');
      setErrors({});
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!newPassword) {
      newErrors.newPassword = 'New Password is required';
    } else if (newPassword.length < 6) {
      newErrors.newPassword = 'Password must be at least 6 characters';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccessMsg('Password has been reset successfully. Redirecting to login...');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="barcode-strip"></div>
        <div className="auth-header">
          <div className="logo">
            <span className="dot"></span>SelfCart
          </div>
          <h2>Reset Password</h2>
          <p>Recover access to your account</p>
        </div>

        <div className="auth-form">
          {successMsg && <div className="success-banner">{successMsg}</div>}

          {step === 1 && (
            <form onSubmit={handleSendOtp} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="form-group">
                <label htmlFor="emailOrMobile">Email or Mobile Number</label>
                <div className="form-input-wrapper">
                  <input
                    id="emailOrMobile"
                    type="text"
                    value={emailOrMobile}
                    onChange={(e) => {
                      setEmailOrMobile(e.target.value);
                      setErrors({});
                    }}
                    placeholder=" shopper@selfcart.com or 9876543210"
                    className={`form-input ${errors.emailOrMobile ? 'input-error' : ''}`}
                  />
                  {errors.emailOrMobile && <span className="error-text">{errors.emailOrMobile}</span>}
                </div>
              </div>
              <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center' }}>
                Send OTP
              </button>
            </form>
          )}

          {step === 2 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="form-group">
                <label htmlFor="otp">Enter 6-Digit OTP</label>
                <div className="otp-container">
                  <input
                    id="otp"
                    type="text"
                    maxLength={6}
                    value={otp}
                    disabled={isOtpVerified}
                    onChange={(e) => {
                      setOtp(e.target.value);
                      setErrors({});
                    }}
                    placeholder="••••••"
                    className={`form-input ${errors.otp ? 'input-error' : ''}`}
                  />
                  <button
                    type="button"
                    onClick={handleVerifyOtp}
                    disabled={isOtpVerified}
                    className="otp-send-btn"
                  >
                    {isOtpVerified ? 'Verified' : 'Verify OTP'}
                  </button>
                </div>
                {errors.otp && <span className="error-text">{errors.otp}</span>}
              </div>

              {isOtpVerified && (
                <form onSubmit={handleResetPassword} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div className="form-group">
                    <label htmlFor="newPassword">New Password</label>
                    <div className="form-input-wrapper">
                      <div style={{ position: 'relative' }}>
                        <input
                          id="newPassword"
                          type={showPassword ? 'text' : 'password'}
                          value={newPassword}
                          onChange={(e) => {
                            setNewPassword(e.target.value);
                            setErrors({});
                          }}
                          placeholder="Minimum 6 characters"
                          className={`form-input ${errors.newPassword ? 'input-error' : ''}`}
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
                      {errors.newPassword && <span className="error-text">{errors.newPassword}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div className="form-input-wrapper">
                      <div style={{ position: 'relative' }}>
                        <input
                          id="confirmPassword"
                          type={showConfirmPassword ? 'text' : 'password'}
                          value={confirmPassword}
                          onChange={(e) => {
                            setConfirmPassword(e.target.value);
                            setErrors({});
                          }}
                          placeholder="Confirm new password"
                          className={`form-input ${errors.confirmPassword ? 'input-error' : ''}`}
                          style={{ paddingRight: '40px' }}
                        />
                        <button
                          type="button"
                          className="password-toggle-btn"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                        >
                          {showConfirmPassword ? (
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
                      {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center' }}>
                    Reset Password
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        <div className="auth-footer">
          <p>
            <Link to="/">Back to Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
