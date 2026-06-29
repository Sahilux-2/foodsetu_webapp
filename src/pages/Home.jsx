import React from 'react';

function Home() {
  const collegesSection1 = [
    {
      name: "GGSIPU EDC",
      food: "Palak paneer - Jasmine Rice - Aloo gobhi",
      eta: "15 to 20 mins - 4km",
      rating: "4.5",
      type: "veg",
      img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop"
    },
    {
      name: "SHARDA UNIVERSITY",
      food: "Egg - Rice - Curry",
      eta: "25 to 30 mins - 8km",
      rating: "4.2",
      type: "non-veg",
      img: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop"
    },
    {
      name: "DELHI UNIVERSITY (NORTH CAMPUS)",
      food: "Rajma Rice - Chole Bhature - Lassi",
      eta: "10 to 15 mins - 3km",
      rating: "4.7",
      type: "veg",
      img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop"
    },
    {
      name: "DTU MESS 3",
      food: "Chicken Biryani - Raita - Gulab Jamun",
      eta: "20 to 25 mins - 6km",
      rating: "4.4",
      type: "non-veg",
      img: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=600&h=400&fit=crop"
    }
  ];

  const collegesSection2 = [
    {
      name: "AMITY UNIVERSITY",
      food: "Curry - Rice - Curd",
      eta: "15 to 20 mins - 4km",
      rating: "4.5",
      type: "veg",
      img: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&h=400&fit=crop"
    },
    {
      name: "AMITY UNIVERSITY CAMPUS",
      food: "Curry - Rice - Roti",
      eta: "15 to 20 mins - 5km",
      rating: "4.5",
      type: "veg",
      img: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600&h=400&fit=crop"
    },
    {
      name: "IIT DELHI HOSTEL 4",
      food: "Paneer Butter Masala - Naan - Dal Makhani",
      eta: "12 to 18 mins - 3.5km",
      rating: "4.8",
      type: "veg",
      img: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600&h=400&fit=crop"
    },
    {
      name: "NSUT MAIN MESS",
      food: "Egg Bhurji - Paratha - Curd",
      eta: "18 to 22 mins - 4.8km",
      rating: "4.3",
      type: "non-veg",
      img: "https://images.unsplash.com/photo-1592285853152-707168707f18?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="home-container">
      {/* Dashboard Top Header (Orange Location Strip) */}
      <div className="dashboard-header">
        <div className="location-bar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="location-text">Robinhood, 110034</span>
        </div>
      </div>

      <main className="dashboard-content">
        {/* Search Bar */}
        <div className="search-container">
          <div className="search-input-wrapper">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" className="search-input" placeholder="Search" />
            <svg className="mic-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" x2="12" y1="19" y2="22"></line>
            </svg>
          </div>
        </div>

        {/* Filters */}
        <div className="filters-container">
          <button className="filter-pill filter-dropdown">
            filter
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <button className="filter-pill">Near me</button>
          <button className="filter-pill">Veg</button>
          <button className="filter-pill">Non-veg</button>
        </div>

        {/* Section 1 */}
        <section className="dashboard-section">
          <div className="section-header">
            <hr className="section-line" />
            <h3 className="section-title">MESS HANDPICKED FOR YOU</h3>
            <hr className="section-line" />
          </div>
          
          <div className="cards-grid">
            {collegesSection1.map((item, index) => (
              <div key={index} className="college-card">
                <div className="card-image-wrapper">
                  <img src={item.img} alt={item.name} className="card-image" />
                  <div className="rating-badge">
                    {item.rating}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '2px'}}>
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                      <line x1="9" y1="9" x2="9.01" y2="9"></line>
                      <line x1="15" y1="9" x2="15.01" y2="9"></line>
                    </svg>
                  </div>
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h4 className="college-name">{item.name}</h4>
                    <div className={`diet-icon ${item.type}`}></div>
                  </div>
                  <p className="college-food">{item.food}</p>
                  <p className="college-eta">{item.eta}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2 */}
        <section className="dashboard-section">
          <div className="section-header">
            <hr className="section-line" />
            <h3 className="section-title">WITHIN 5 KILOMETERS</h3>
            <hr className="section-line" />
          </div>
          
          <div className="cards-grid">
            {collegesSection2.map((item, index) => (
              <div key={index} className="college-card">
                <div className="card-image-wrapper">
                  <img src={item.img} alt={item.name} className="card-image" />
                  <div className="rating-badge">
                    {item.rating}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '2px'}}>
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                      <line x1="9" y1="9" x2="9.01" y2="9"></line>
                      <line x1="15" y1="9" x2="15.01" y2="9"></line>
                    </svg>
                  </div>
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h4 className="college-name">{item.name}</h4>
                    <div className={`diet-icon ${item.type}`}></div>
                  </div>
                  <p className="college-food">{item.food}</p>
                  <p className="college-eta">{item.eta}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
