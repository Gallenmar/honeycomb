import { useState } from "react";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPreferences } from "../store/filterSlice"; // adjust path if needed

function LikesInterests() {
  const savedPreferences = useSelector((state) => state.filters.preferences || []);
  const [selectedPreferences, setSelectedPreferences] = useState(savedPreferences);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const togglePreference = (preference) => {
    if (selectedPreferences.includes(preference)) {
      setSelectedPreferences(
        selectedPreferences.filter((p) => p !== preference)
      );
    } else {
      setSelectedPreferences([...selectedPreferences, preference]);
    }
  };

  const isSelected = (preference) => {
    return selectedPreferences.includes(preference);
  };

  const onContinue = () => {
    dispatch(setPreferences(selectedPreferences)); // <-- Save to store
    navigate("/filter");
  };

  return (
    <Layout
      title="Likes, Interests"
      subtitle="Share your needs — find your home"
      activeIcon="filter"
    >
      <div className="likes-interests">
        <div className="preferences-grid">
          <button
            className={`preference-button ${
              isSelected("pet-friendly") ? "selected" : ""
            }`}
            onClick={() => togglePreference("pet-friendly")}
          >
            <span className="icon">🐾</span>
            <span className="text">Pet-friendly</span>
          </button>

          <button
            className={`preference-button ${
              isSelected("outdoor-space") ? "selected" : ""
            }`}
            onClick={() => togglePreference("outdoor-space")}
          >
            <span className="icon">🌳</span>
            <span className="text">Outdoor space</span>
          </button>

          <button
            className={`preference-button ${
              isSelected("utilities-included") ? "selected" : ""
            }`}
            onClick={() => togglePreference("utilities-included")}
          >
            <span className="icon">💡</span>
            <span className="text">Utilities Included</span>
          </button>

          <button
            className={`preference-button ${
              isSelected("gym-access") ? "selected" : ""
            }`}
            onClick={() => togglePreference("gym-access")}
          >
            <span className="icon">🏋️</span>
            <span className="text">Gym access</span>
          </button>

          <button
            className={`preference-button ${
              isSelected("parking") ? "selected" : ""
            }`}
            onClick={() => togglePreference("parking")}
          >
            <span className="icon">🚗</span>
            <span className="text">Parking</span>
          </button>

          <button
            className={`preference-button ${
              isSelected("low-noise-area") ? "selected" : ""
            }`}
            onClick={() => togglePreference("low-noise-area")}
          >
            <span className="icon">🔇</span>
            <span className="text">Low-noise area</span>
          </button>

          <button
            className={`preference-button ${
              isSelected("short-term") ? "selected" : ""
            }`}
            onClick={() => togglePreference("short-term")}
          >
            <span className="icon">⏱️</span>
            <span className="text">Short-term</span>
          </button>

          <button
            className={`preference-button ${
              isSelected("near-public-transportation") ? "selected" : ""
            }`}
            onClick={() => togglePreference("near-public-transportation")}
          >
            <span className="icon">🚆</span>
            <span className="text">Near public transportation</span>
          </button>

          <button
            className={`preference-button ${
              isSelected("smoke-free") ? "selected" : ""
            }`}
            onClick={() => togglePreference("smoke-free")}
          >
            <span className="icon">🚭</span>
            <span className="text">Smoke-free</span>
          </button>

          <button
            className={`preference-button ${
              isSelected("balcony") ? "selected" : ""
            }`}
            onClick={() => togglePreference("balcony")}
          >
            <span className="icon">🏠</span>
            <span className="text">Balcony</span>
          </button>

          <button
            className={`preference-button ${
              isSelected("accessible") ? "selected" : ""
            }`}
            onClick={() => togglePreference("accessible")}
          >
            <span className="icon">♿</span>
            <span className="text">Accessible</span>
          </button>

          <button
            className={`preference-button ${
              isSelected("storage-space") ? "selected" : ""
            }`}
            onClick={() => togglePreference("storage-space")}
          >
            <span className="icon">📦</span>
            <span className="text">Storage space</span>
          </button>
        </div>
      </div>

      <div className="footer">
        <button className="continue-button" onClick={onContinue}>
          Continue
        </button>
      </div>
    </Layout>
  );
}

export default LikesInterests;
