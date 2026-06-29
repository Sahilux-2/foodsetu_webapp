import React from 'react';
import { useNavigate } from 'react-router-dom';

function Success() {
  const navigate = useNavigate();

  return (
    <div className="app-container success-page">
      <div className="success-content">
        <div className="success-icon-wrapper">
          <svg className="success-tick" viewBox="0 0 52 52">
            <circle className="success-circle" cx="26" cy="26" r="25" fill="none" />
            <path className="success-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
          </svg>
        </div>
        <h1 className="success-title">Order Successfully Placed!</h1>
        <p className="success-message">
          The mess has received your request. Please ensure timely pickup or coordinate with your delivery agent.
        </p>
        <button className="btn btn-primary back-home-btn" onClick={() => navigate('/home')}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default Success;
