import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function VolunteerSignup() {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [timer, setTimer] = useState(29);
  const [otpValue, setOtpValue] = useState('');

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setMobileNumber(value);
  };

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 5);
    setOtpValue(value);
  };

  const handleSendOtp = () => {
    if (mobileNumber.length === 10) {
      setShowOtp(true);
      setTimer(29);
      setOtpValue('');
    }
  };

  useEffect(() => {
    let interval;
    if (showOtp && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [showOtp, timer]);

  useEffect(() => {
    let timeoutId;
    if (showOtp) {
      // Simulate auto-fill OTP after 5 seconds with 5 digits
      timeoutId = setTimeout(() => {
        setOtpValue('12345');
      }, 5000);
    }
    return () => clearTimeout(timeoutId);
  }, [showOtp]);

  return (
    <div className="app-container">
      {/* Top Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand" onClick={() => navigate('/')}>
          <button className="back-button-nav" aria-label="Go back">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <img src="/Food_setu_logov2.svg" alt="Food Setu Logo" className="brand-logo" />
          <h1 className="brand-text">FOOD SETU</h1>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="main-content">
        <div className="auth-card form-card">
          <h2 className="screen-title">VOLUNTEER</h2>
          
          <form className="auth-form" onSubmit={(e) => { e.preventDefault(); navigate('/terms'); }}>
            <div className="form-group">
              <label className="input-label">NAME</label>
              <input type="text" className="input-field" placeholder="" />
            </div>

            <div className="form-group">
              <label className="input-label">EMAIL</label>
              <input type="email" className="input-field" placeholder="" />
            </div>

            <div className="form-group">
              <label className="input-label">MOBILE NUMBER</label>
              <div className="mobile-input-group">
                <span className="country-code">+91</span>
                <input 
                  type="tel" 
                  className="input-field mobile-field" 
                  placeholder="" 
                  value={mobileNumber}
                  onChange={handleMobileChange}
                  maxLength={10}
                />
              </div>
              {!showOtp ? (
                <div 
                  className={`otp-action ${mobileNumber.length !== 10 ? 'disabled' : ''}`} 
                  onClick={handleSendOtp}
                >
                  Send OTP
                </div>
              ) : (
                <div className="otp-timer">Resend OTP in <span className="text-orange">00:{timer < 10 ? `0${timer}` : timer}</span></div>
              )}
            </div>

            {showOtp && (
              <div className="form-group">
                <label className="input-label">VERIFY OTP</label>
                <input 
                  type="text" 
                  className="input-field" 
                  value={otpValue}
                  onChange={handleOtpChange}
                  maxLength={5}
                  placeholder="" 
                />
              </div>
            )}

            <div className="form-footer">
              <div className="language-selector">
                Choose language
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
              <button type="submit" className="btn btn-primary continue-btn">
                Continue
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default VolunteerSignup;
