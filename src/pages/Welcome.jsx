import React from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      {/* Top Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <img src="/Food_setu_logov2.svg" alt="Food Setu Logo" className="brand-logo" />
          <h1 className="brand-text">FOOD SETU</h1>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="main-content">
        <div className="auth-card">
          <h2 className="auth-title">
            Log in <span className="text-orange">or</span> Sign up
          </h2>
          
          <button className="btn btn-secondary" onClick={() => navigate('/signup/volunteer')}>
            Signup as Volunteer
          </button>
          
          <div className="divider">
            <span>or</span>
          </div>
          
          <button className="btn btn-primary" onClick={() => navigate('/signup/ngo')}>
            Signup as NGO
          </button>

          {/* Footer inside card for better desktop grouping */}
          <div className="card-footer">
            <p className="footer-text">
              Already have an account? <a href="#" className="login-link">Login</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Welcome;
