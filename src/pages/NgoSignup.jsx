import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NgoSignup() {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState('');
  const [fileName, setFileName] = useState('');

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setMobileNumber(value);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName('');
    }
  };

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
          <div className="brand-logo-placeholder"></div>
          <h1 className="brand-text">FOOD SETU</h1>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="main-content">
        <div className="auth-card form-card">
          <h2 className="screen-title">NGO</h2>
          
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
            </div>

            <div className="form-group">
              <label className="input-label">NGO VERIFICATION</label>
              <div className="file-upload-wrapper">
                <input 
                  type="file" 
                  id="ngo-cert" 
                  accept=".pdf" 
                  className="file-input-hidden"
                  onChange={handleFileChange}
                />
                <label htmlFor="ngo-cert" className={`input-field file-input-label ${!fileName ? 'placeholder' : ''}`}>
                  {fileName || "Certificate.pdf"}
                </label>
              </div>
            </div>

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

export default NgoSignup;
