import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Terms() {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="app-container">
      {/* Top Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand" onClick={() => navigate(-1)}>
          <button className="back-button-nav" aria-label="Go back">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <img src="/Food_setu_logov2.svg" alt="Food Setu Logo" className="brand-logo" />
          <h1 className="brand-text">FOOD SETU</h1>
        </div>
      </nav>

      <main className="main-content">
        <div className="auth-card terms-card">
          <h2 className="terms-title">Accept Food Bridge's Terms & Conditions</h2>
          
          <p className="terms-intro">
            By selecting <strong>“I agree”</strong> below, I have reviewed and agree to the Terms of Use and acknowledge the Privacy Notice.
          </p>

          <hr className="terms-divider" />

          <ul className="terms-list">
            <li>Self Pick up within 5 Kgs/11lbs of food.</li>
            <li>Must be collected within 2 hours after official mess timings.</li>
            <li>Specific food items may vary daily.</li>
            <li>Detailed description of the available food items.</li>
            <li>Includes nutritional information where applicable.</li>
            <li>The program and developers are not responsible for food quality or safety, participants must verify these on their own.</li>
          </ul>

          <hr className="terms-divider bottom-divider" />

          <div className="terms-footer">
            <label className="checkbox-container">
              <span>I agree</span>
              <input 
                type="checkbox" 
                checked={agreed} 
                onChange={(e) => setAgreed(e.target.checked)} 
              />
              <span className="checkmark"></span>
            </label>

            <button 
              className={`btn btn-primary terms-next-btn ${!agreed ? 'disabled' : ''}`}
              disabled={!agreed}
              onClick={() => navigate('/home')}
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Terms;
