import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();
  const college = location.state?.college;
  const [deliveryMethod, setDeliveryMethod] = useState('pickup');

  if (!college) {
    return (
      <div className="app-container checkout-page" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <h2>No order found.</h2>
        <button className="btn btn-primary" onClick={() => navigate('/home')} style={{marginLeft: '16px'}}>Go Home</button>
      </div>
    );
  }

  return (
    <div className="app-container checkout-page">
      <div className="details-header">
        <button className="back-button-nav" aria-label="Go back" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <h1 className="brand-text header-title">FOOD SETU</h1>
      </div>

      <main className="checkout-main">
        <div className="checkout-card">
          <h2 className="checkout-title">Checkout</h2>
          
          <div className="checkout-segment-control">
            <button 
              className={`segment-btn ${deliveryMethod === 'pickup' ? 'active' : ''}`}
              onClick={() => setDeliveryMethod('pickup')}
            >
              Self pickup
            </button>
            <button 
              className={`segment-btn ${deliveryMethod === 'delivery' ? 'active' : ''}`}
              onClick={() => setDeliveryMethod('delivery')}
            >
              Delivery
            </button>
          </div>

          <div className="order-summary">
            <div className="summary-header">
              <h3 className="summary-college">{college.name}</h3>
              <div className={`diet-icon ${college.type}`}></div>
            </div>
            
            <div className="summary-details">
              <div className="summary-item">
                <span className="summary-label">Meal</span>
                <span className="summary-value">{college.food}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Total Quantity</span>
                <span className="summary-value highlight">36kg</span>
              </div>
            </div>
          </div>

          <div className="delivery-info">
            {deliveryMethod === 'pickup' ? (
              <div className="info-box">
                <h4>Pickup Details</h4>
                <p className="info-text"><strong>Address:</strong> {college.location}, New Delhi</p>
                <p className="info-text"><strong>Note:</strong> Please collect within 2 hours of official mess timings.</p>
              </div>
            ) : (
              <div className="info-box">
                <h4>Delivery Details</h4>
                <div className="form-group" style={{marginTop: '12px'}}>
                  <label className="input-label">DELIVERY ADDRESS</label>
                  <input type="text" className="form-input" defaultValue="Robinhood, 110034" />
                </div>
                <div className="summary-item" style={{marginTop: '12px'}}>
                  <span className="summary-label">Estimated Time</span>
                  <span className="summary-value">{college.eta}</span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Delivery Fee</span>
                  <span className="summary-value highlight">Free (Volunteer)</span>
                </div>
              </div>
            )}
          </div>

          <button className="btn btn-primary checkout-btn" onClick={() => navigate('/success')}>
            Place Order
          </button>
        </div>
      </main>
    </div>
  );
}

export default Checkout;
