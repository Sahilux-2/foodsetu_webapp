import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function CollegeDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const college = location.state?.college;

  if (!college) {
    return (
      <div className="app-container college-details-page" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <h2>College not found.</h2>
        <button className="btn btn-primary" onClick={() => navigate('/home')} style={{marginLeft: '16px'}}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="app-container college-details-page">
      {/* Top Header */}
      <div className="details-header">
        <button className="back-button-nav" aria-label="Go back" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <h1 className="brand-text header-title">FOOD SETU</h1>
      </div>

      <main className="details-main-content">
        <div className="details-card-container">
          <div className="details-image-section">
            <img 
              src={college.img || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop"} 
              alt={college.name} 
              className="details-hero-image"
            />
          </div>
          
          <div className="details-info-section">
            <div className="details-header-row">
              <h2 className="details-college-name">{college.name}</h2>
              <div className={`diet-icon ${college.type} large`}></div>
            </div>

            <p className="details-meta">
              {college.eta} • {college.location}
            </p>
            <div className="details-rating">
              <span className="rating-star">★</span> {college.rating} <span>120 ratings</span>
            </div>

            <div className="details-divider"></div>

            <h3 className="details-subheading">Meal of the day</h3>
            
            <div className="meal-card">
              <div className="meal-header-row">
                <h4 className="meal-title">Today's Special <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></h4>
                <div className="meal-qty-badge">
                  <span className="qty-label">Total</span>
                  <span className="qty-value">36kg</span>
                </div>
              </div>
              <p className="meal-items">{college.food}</p>
            </div>

            <div className="details-action-area">
              <button className="btn btn-primary continue-btn details-cta" onClick={() => navigate('/checkout', { state: { college } })}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CollegeDetails;
