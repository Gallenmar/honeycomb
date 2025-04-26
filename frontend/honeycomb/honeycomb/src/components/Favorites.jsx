import { useState } from "react"

function Favorites({ onBack, onViewDetails }) {
  const [activeTab, setActiveTab] = useState("all")

  const favoriteProperties = [
    {
      id: 1,
      title: "Elm Street 34",
      image: "/placeholder.svg?height=150&width=150",
      rating: 4.5,
    },
    {
      id: 2,
      title: "Pine Lane 5",
      image: "/placeholder.svg?height=150&width=150",
      rating: 4.8,
    },
    {
      id: 3,
      title: "Maple Oak Road 7",
      image: "/placeholder.svg?height=150&width=150",
      rating: 4.1,
    },
    {
      id: 4,
      title: "Cedar Drive 9",
      image: "/placeholder.svg?height=150&width=150",
      rating: 4.3,
    },
    {
      id: 5,
      title: "Birch Way 10",
      image: "/placeholder.svg?height=150&width=150",
      rating: 4.6,
    },
  ]

  return (
    <div className="screen favorites">
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
        <h1 className="favorites-title">Favourites</h1>

        <div className="favorites-tabs">
          <button className={`tab-button ${activeTab === "all" ? "active" : ""}`} onClick={() => setActiveTab("all")}>
            All
          </button>
          <button
            className={`tab-button ${activeTab === "good-price" ? "active" : ""}`}
            onClick={() => setActiveTab("good-price")}
          >
            Good Price
          </button>
          <button
            className={`tab-button ${activeTab === "visit-later" ? "active" : ""}`}
            onClick={() => setActiveTab("visit-later")}
          >
            Visit Later
          </button>
          <button
            className={`tab-button ${activeTab === "waiting-reply" ? "active" : ""}`}
            onClick={() => setActiveTab("waiting-reply")}
          >
            Waiting Reply
          </button>
        </div>

        <div className="favorites-grid">
          {favoriteProperties.map((property) => (
            <div key={property.id} className="favorite-card" onClick={onViewDetails}>
              <div className="favorite-image-container">
                <img src={property.image || "/placeholder.svg"} alt={property.title} className="favorite-image" />
                <div className="favorite-rating">
                  <span className="rating-icon">⭐</span>
                  <span className="rating-value">{property.rating}</span>
                </div>
              </div>
              <div className="favorite-title">{property.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bottom-navigation">
        <button className="nav-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
              stroke="#CCCCCC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="nav-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z"
              stroke="#CCCCCC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="nav-button active">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z"
              fill="#FF7A59"
              stroke="#FF7A59"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="nav-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
              stroke="#CCCCCC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
              stroke="#CCCCCC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Favorites
