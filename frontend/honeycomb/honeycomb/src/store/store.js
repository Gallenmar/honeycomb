import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './filterSlice';
import listingsReducer from './listingStore';

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    listings: listingsReducer,
  },
});

export default store;
