import { useState } from "react"

function LikesInterests({ onContinue, onBack, onSkip }) {
  const [selectedPreferences, setSelectedPreferences] = useState([])

  const togglePreference = (preference) => {
    if (selectedPreferences.includes(preference)) {
      setSelectedPreferences(selectedPreferences.filter((p) => p !== preference))
    } else {
      setSelectedPreferences([...selectedPreferences, preference])
    }
  }

  const isSelected = (preference) => {
    return selectedPreferences.includes(preference)
  }

  return (
    <div className="screen likes-interests">
      <div className="header">
        <button className="back-button" onClick={onBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="#FF7A59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="skip-button" onClick={onSkip}>
          Skip
        </button>
      </div>

      <div className="content">
        <h1 className="title">Likes, Interests</h1>
        <p className="subtitle">Share your needs — find your home</p>

        <div className="preferences-grid">
          <button
            className={`preference-button ${isSelected("pet-friendly") ? "selected" : ""}`}
            onClick={() => togglePreference("pet-friendly")}
          >
            <span className="icon">🐾</span>
            <span className="text">Pet-friendly</span>
          </button>

          <button
            className={`preference-button ${isSelected("outdoor-space") ? "selected" : ""}`}
            onClick={() => togglePreference("outdoor-space")}
          >
            <span className="icon">🌳</span>
            <span className="text">Outdoor space</span>
          </button>

          <button
            className={`preference-button ${isSelected("utilities-included") ? "selected" : ""}`}
            onClick={() => togglePreference("utilities-included")}
          >
            <span className="icon">💡</span>
            <span className="text">Utilities Included</span>
          </button>

          <button
            className={`preference-button ${isSelected("gym-access") ? "selected" : ""}`}
            onClick={() => togglePreference("gym-access")}
          >
            <span className="icon">🏋️</span>
            <span className="text">Gym access</span>
          </button>

          <button
            className={`preference-button ${isSelected("parking") ? "selected" : ""}`}
            onClick={() => togglePreference("parking")}
          >
            <span className="icon">🚗</span>
            <span className="text">Parking</span>
          </button>

          <button
            className={`preference-button ${isSelected("low-noise-area") ? "selected" : ""}`}
            onClick={() => togglePreference("low-noise-area")}
          >
            <span className="icon">🔇</span>
            <span className="text">Low-noise area</span>
          </button>

          <button
            className={`preference-button ${isSelected("short-term") ? "selected" : ""}`}
            onClick={() => togglePreference("short-term")}
          >
            <span className="icon">⏱️</span>
            <span className="text">Short-term</span>
          </button>

          <button
            className={`preference-button ${isSelected("near-public-transportation") ? "selected" : ""}`}
            onClick={() => togglePreference("near-public-transportation")}
          >
            <span className="icon">🚆</span>
            <span className="text">Near public transportation</span>
          </button>

          <button
            className={`preference-button ${isSelected("smoke-free") ? "selected" : ""}`}
            onClick={() => togglePreference("smoke-free")}
          >
            <span className="icon">🚭</span>
            <span className="text">Smoke-free</span>
          </button>

          <button
            className={`preference-button ${isSelected("balcony") ? "selected" : ""}`}
            onClick={() => togglePreference("balcony")}
          >
            <span className="icon">🏠</span>
            <span className="text">Balcony</span>
          </button>

          <button
            className={`preference-button ${isSelected("accessible") ? "selected" : ""}`}
            onClick={() => togglePreference("accessible")}
          >
            <span className="icon">♿</span>
            <span className="text">Accessible</span>
          </button>

          <button
            className={`preference-button ${isSelected("storage-space") ? "selected" : ""}`}
            onClick={() => togglePreference("storage-space")}
          >
            <span className="icon">📦</span>
            <span className="text">Storage space</span>
          </button>
        </div>

        <button className="load-more-button">Load More</button>
      </div>

      <div className="footer">
        <button className="continue-button" onClick={onContinue}>
          Continue
        </button>
      </div>
    </div>
  )
}

export default LikesInterests
