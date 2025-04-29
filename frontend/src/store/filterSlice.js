import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  propertyType: "Apartment",
  rentOrBuy: "Rent",
  bedrooms: "2",
  bathrooms: "1",
  neighborhood: "Agenskalns",
  priceRange: 300,
  preferences: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      return { ...state, ...action.payload };
    },
    setPreferences: (state, action) => {
      state.preferences = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const { setFilters, setPreferences, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
