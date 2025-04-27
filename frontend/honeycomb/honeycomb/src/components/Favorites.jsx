import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Layout from "./Layout"
import { setCurrentItems } from "../store/propertyStore"
import camera from "../../public/Camera.svg"

function Favorites({ onViewDetails }) {
  const [activeTab, setActiveTab] = useState("all")
  const dispatch = useDispatch()
  const { superLikedItems, currentItems } = useSelector((state) => state.property)
  const { items } = useSelector((state) => state.listings)


  useEffect(() => {
    dispatch(setCurrentItems(items.filter(item => superLikedItems.includes(item.listing_details.listing_id))))
  }, [superLikedItems, items, dispatch])

  return (
    <Layout title="Saved" activeIcon="saved">
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
        {currentItems.map((property) => (
          <div key={property.id} className="favorite-card" onClick={onViewDetails}>
            <div className="favorite-image-container">
              <img src={property?.image_url[0] || "/placeholder.svg"} alt={property.title} className="favorite-image" />
              <div className="favorite-rating">
                <img src={camera} alt="camera" className="camera-icon" />
                <span className="camera-count">{property.image_url.length}</span>
                <span className="rating-icon">⭐</span>
                <span className="rating-value">{Math.floor(Math.random() * 5)}</span> {/* Premium FEATURE: See how  many users have superliked/liked this appratment*/}
              </div>
            </div>
            <div className="favorite-title">{property.location.city} {property.location.street}</div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Favorites
