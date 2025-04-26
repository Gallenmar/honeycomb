import { useSelector, useDispatch } from 'react-redux';
import { setFilters, resetFilters } from '../store/filterSlice.js';
import Layout from './Layout';

function FilterOptions({ onApply, onBack }) {
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const handleChange = (name, value) => {
    dispatch(setFilters({ [name]: value }));
  }

  const handleReset = () => {
    dispatch(resetFilters());
  }

  return (
    <Layout 
      title="Filter Options"
      subtitle="Manage your preferences to find the perfect home."
      showBackButton={true}
      onBack={onBack}
      activeIcon="filter"
    >
      <button className="reset-button" onClick={handleReset}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="#FF7A59"
            strokeWidth="1.5"
          />
          <path d="M15 9L9 15M9 9L15 15" stroke="#FF7A59" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      <div className="filter-form">
        <div className="form-group">
          <label>Looking for</label>
          <div className="select-wrapper">
            <select value={filters.propertyType} onChange={(e) => handleChange("propertyType", e.target.value)}>
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Condo">Condo</option>
            </select>
            <span className="select-arrow">
              <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1L6 5L11 1"
                  stroke="#FF7A59"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="form-group">
          <label>Rent or Buy</label>
          <div className="select-wrapper">
            <select value={filters.rentOrBuy} onChange={(e) => handleChange("rentOrBuy", e.target.value)}>
              <option value="Rent">Rent</option>
              <option value="Buy">Buy</option>
            </select>
            <span className="select-arrow">
              <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1L6 5L11 1"
                  stroke="#FF7A59"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="form-group">
          <label>Preferred Number of Bedrooms</label>
          <div className="select-wrapper">
            <select value={filters.bedrooms} onChange={(e) => handleChange("bedrooms", e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4+">4+</option>
            </select>
            <span className="select-arrow">
              <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1L6 5L11 1"
                  stroke="#FF7A59"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="form-group">
          <label>Preferred Number of Bathrooms</label>
          <div className="select-wrapper">
            <select value={filters.bathrooms} onChange={(e) => handleChange("bathrooms", e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4+">4+</option>
            </select>
            <span className="select-arrow">
              <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1L6 5L11 1"
                  stroke="#FF7A59"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="form-group">
          <label>Neighborhood</label>
          <div className="select-wrapper location">
            <select value={filters.neighborhood} onChange={(e) => handleChange("neighborhood", e.target.value)}>
              <option value="Agenskalns">Agenskalns</option>
              <option value="Downtown">Downtown</option>
              <option value="Suburbs">Suburbs</option>
            </select>
            <span className="select-arrow">
              <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1L6 5L11 1"
                  stroke="#FF7A59"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="location-pin">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 8.5C9.10457 8.5 10 7.60457 10 6.5C10 5.39543 9.10457 4.5 8 4.5C6.89543 4.5 6 5.39543 6 6.5C6 7.60457 6.89543 8.5 8 8.5Z"
                  stroke="#3730A3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 14C10 11.5 13 9.36396 13 6.5C13 3.63604 10.7614 1.5 8 1.5C5.23858 1.5 3 3.63604 3 6.5C3 9.36396 6 11.5 8 14Z"
                  stroke="#3730A3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="form-group">
          <label>Price Range</label>
          <div className="price-range">
            <div className="price-labels">
              <span>50 - 3000 €</span>
              <span className="current-price">{filters.priceRange} €</span>
            </div>
            <input
              type="range"
              min="50"
              max="3000"
              value={filters.priceRange}
              onChange={(e) => handleChange("priceRange", e.target.value)}
              className="range-slider"
            />
          </div>
        </div>

        <button className="advanced-filter-button">
          Advance Filter Options
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 12L10 8L6 4"
              stroke="#FF7A59"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </Layout>
  );
}

export default FilterOptions;
