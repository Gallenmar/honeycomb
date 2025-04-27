import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings } from "../store/listingStore"; // Adjust the path as needed
import {
  likeItem,
  dislikeItem,
  selectItem,
  superLikeItem,
} from "../store/propertyStore";
import Layout from "./Layout";
import info from "../../public/info.svg";
import like from "../../public/like.svg";
import dislike from "../../public/dislike.svg";
import superLike from "../../public/super.svg";
import { useNavigate } from "react-router-dom";

const PropertyListing = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.listings);
  const navigate = useNavigate();
  const {
    likedItems,
    dislikedItems,
    superLikedItems,
    currentItem,
    loading: currentItemLoading,
    error: currentItemError,
  } = useSelector((state) => state.property);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchListings());
  }, [dispatch]);

  useEffect(() => {
    if (!loading && items.length > 0) {
      dispatch(
        selectItem(
          items.filter(
            (item) =>
              !likedItems.includes(item.listing_details.listing_id) &&
              !dislikedItems.includes(item.listing_details.listing_id) &&
              !superLikedItems.includes(item.listing_details.listing_id)
          )[0]
        )
      ); // todo: select random that was not selected before
      console.log("Listings from server:", items);
    }
  }, [loading, items]);

  useEffect(() => {
    dispatch(
      selectItem(
        items.filter(
          (item) =>
            !likedItems.includes(item.listing_details.listing_id) &&
            !dislikedItems.includes(item.listing_details.listing_id) &&
            !superLikedItems.includes(item.listing_details.listing_id)
        )[0]
      )
    );
  }, [likedItems, dislikedItems, superLikedItems]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    currentItem && (
      <Layout activeIcon="home">
        <div className="header">
          <div className="header-actions">
            <button className="search-button">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 21L16.65 16.65"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="notification-button">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="more-button">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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

        <div className="shift-image-container">
          <img
            src={currentItem.image_url[(imageIndex+1)% currentItem.image_url.length]}
            alt="Property"
            className="property-image shift-image"
          />
        </div>
        <div className="shift-image-container shift-image-container2">
          <img
            src={currentItem.image_url[(imageIndex+2)% currentItem.image_url.length]}
            alt="Property"
            className="property-image shift-image"
          />
        </div>
        <div className="property-image-container">
          <img
            src={currentItem.image_url[imageIndex]}
            alt="Property"
            className="property-image"
            onClick={() =>
              setImageIndex((imageIndex + 1) % currentItem.image_url.length)
            }
          />

          <div className="property-info-overlay">
            <h2 className="property-title">
              {currentItem.location.city} {currentItem.location.street}
            </h2>
            <h3 className="property-subtitle">
              {currentItem.rent_details.rent_pricing_eur}€{" "}
              {currentItem.rent_details.rent_type}
            </h3>
            <div className="property-features-tags">
              <span className="feature-tag">
                {currentItem.outdoor_features.parking
                  ? "Parking " + currentItem.outdoor_features.parking_type
                  : "No Parking"}
              </span>
              <span className="feature-tag">
                {currentItem.property_characteristics.renovated
                  ? "Renovated"
                  : "Not Renovated"}
              </span>
              <span className="feature-tag">
                {!currentItem.rent_details.pet_friendly
                  ? "Pet-Friendly"
                  : "No Pets"}
              </span>
            </div>
          </div>
        </div>

        <div className="property-action-buttons">
          <button className="action-button red">
            <img
              src={dislike}
              alt="dislike"
              onClick={() =>
                dispatch(dislikeItem(currentItem?.listing_details?.listing_id))
              }
            />
          </button>
          <button className="action-button yellow">
            <img
              src={superLike}
              alt="super"
              onClick={() =>
                dispatch(
                  superLikeItem(currentItem?.listing_details?.listing_id)
                )
              }
            />
          </button>
          <button className="action-button green">
            <img
              src={like}
              alt="like"
              onClick={() =>
                dispatch(likeItem(currentItem?.listing_details?.listing_id))
              }
            />
          </button>
          <button className="action-button">
            <img
              src={info}
              alt="info"
              onClick={() => navigate("/property-details")}
            />
          </button>
        </div>
      </Layout>
    )
  );
};

export default PropertyListing;
