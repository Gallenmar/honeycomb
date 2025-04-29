import { createSlice, createAction } from '@reduxjs/toolkit';

// Define a custom action creator (optional but recommended for clarity)
export const likeItem = createAction('listings/likeItem');
export const superLikeItem = createAction('listings/superLikeItem');
export const dislikeItem = createAction('listings/dislikeItem');
export const selectItem = createAction('listings/selectItem');
export const setCurrentItems = createAction('listings/setCurrentItems');

const listingSlice = createSlice({
  name: 'listings',
  initialState: {
    likedItems: [],
    dislikedItems: [],
    superLikedItems: [],
    currentItem: null,
    currentItems: [],
    loading: false,
    error: null,
  },
  reducers: {
    likeItem: (state, action) => {
      state.likedItems.push(action.payload);
    },
    dislikeItem: (state, action) => {
      state.dislikedItems.push(action.payload);
    },
    selectItem: (state, action) => {
      state.currentItem = action.payload;
    },
    superLikeItem: (state, action) => {
      state.superLikedItems.push(action.payload);
    },
    setCurrentItems: (state, action) => {
      state.currentItems = action.payload;
    },
  },
});

export default listingSlice.reducer;
