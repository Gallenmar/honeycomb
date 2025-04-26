import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import Layout from "./Layout"
import like from "../../public/like.svg";
import dislike from "../../public/dislike.svg";
import superLike from "../../public/super.svg";
import { dislikeItem, superLikeItem, likeItem } from "../store/propertyStore";
import { useNavigate } from "react-router-dom";

function PropertyDetails({ onBack, onFavorites }) {
  const [activeTab, setActiveTab] = useState("pictures")
  const { currentItem } = useSelector((state) => state.property);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLike = () => {
    dispatch(likeItem(currentItem?.listing_details?.listing_id));
    navigate("/");
  }

  const handleDislike = () => {
    dispatch(dislikeItem(currentItem?.listing_details?.listing_id));
    navigate("/");
  }

  const handleSuperLike = () => {
    dispatch(superLikeItem(currentItem?.listing_details?.listing_id));
    navigate("/");
  }

  return (
    <Layout activeIcon="filter">

      <div className="content">
        <div className="property-header">
          <div className="property-title-container">
            <h1 className="property-details-title">{currentItem.location.city} {currentItem.location.street}</h1>
            <div className="property-rating">
              <button className="rating-button red">
                <img src={dislike} alt="dislike" onClick={handleDislike}/>
              </button>
              <button className="rating-button yellow">
                <img src={superLike} alt="super" onClick={handleSuperLike}/>
              </button>
              <button className="rating-button green">
                <img src={like} alt="like" onClick={handleLike}/>
              </button>
            </div>
          </div>

          <p className="property-description">
            {currentItem.rent_details.description_summary
              .split(/(?:[;•]|(?<!\d)-|-(?![a-zA-Z]))/)
              .map((part, idx) => (
                <span key={idx}>
                  {part.trim()}<br />
                </span>
              ))}
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
                {currentItem.image_url.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt="Property"
                    className="gallery-image"
                    onClick={() => window.open(image, "_blank")}
                  />
                ))}
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
    </Layout>
  )
}

export default PropertyDetails
