import { useState } from "react"
import BottomNavigation from "./BottomNavigation"

function PropertyDetails({ onBack, onFavorites }) {
  const [activeTab, setActiveTab] = useState("pictures")

  return (
    <div className="screen property-details">
      <div className="header">
        <button className="back-button" onClick={onBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="#FF7A59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="header-actions">
          <button className="search-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M21 21L16.65 16.65" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="more-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="content">
        <div className="property-header">
          <div className="property-title-container">
            <h1 className="property-title">Test Street 1A</h1>
            <div className="property-rating">
              <button className="rating-button red">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    fill="#fff"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="rating-button yellow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill="#FFD700"
                    stroke="#FFD700"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="rating-button green">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    fill="#4CAF50"
                    stroke="#4CAF50"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 12L11 15L16 10"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <p className="property-description">
            Bright and modern 3-bedroom flat featuring an open-plan living area, stylish kitchen, and spacious bedroom.
            Ideally located close to shops, cafes, and public transport for easy city access.
          </p>

          <div className="property-tabs">
            <button
              className={`tab-button ${activeTab === "pictures" ? "active" : ""}`}
              onClick={() => setActiveTab("pictures")}
            >
              Pictures
            </button>
            <button
              className={`tab-button ${activeTab === "videos" ? "active" : ""}`}
              onClick={() => setActiveTab("videos")}
            >
              Videos
            </button>
            <button
              className={`tab-button ${activeTab === "contact" ? "active" : ""}`}
              onClick={() => setActiveTab("contact")}
            >
              Contact
            </button>
            <button
              className={`tab-button ${activeTab === "more" ? "active" : ""}`}
              onClick={() => setActiveTab("more")}
            >
              More
            </button>
          </div>

          <div className="property-gallery">
            {activeTab === "pictures" && (
              <div className="gallery-grid">
                <img src="https://www.ss.lv/msg/lv/real-estate/flats/riga/centre/ahbje.html#photo-1&hd-image=1" alt="Property" className="gallery-image" />
                <img src="/placeholder.svg?height=100&width=100" alt="Property" className="gallery-image" />
                <img src="/placeholder.svg?height=100&width=100" alt="Property" className="gallery-image" />
                <img src="/placeholder.svg?height=100&width=100" alt="Property" className="gallery-image" />
              </div>
            )}
          </div>

          <div className="property-features">
            <h3 className="features-title">Features</h3>
            <div className="features-list">
              <div className="feature-item">
                <span className="feature-icon">🚗</span>
                <span className="feature-text">Parking</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🏠</span>
                <span className="feature-text">Balcony</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🐾</span>
                <span className="feature-text">Pet-friendly</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNavigation activeIcon="filter" onFavorites={onFavorites} />
    </div>
  )
}

export default PropertyDetails
