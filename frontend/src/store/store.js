import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './filterSlice';
import listingsReducer from './listingStore';
import propertyReducer from './propertyStore';

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    listings: listingsReducer,
    property: propertyReducer,
  },
});

export default store;
