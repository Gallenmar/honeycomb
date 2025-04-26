import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch listings from the API
export const fetchListings = createAsyncThunk(
  'listings/fetchListings',
  async () => {
    const response = await fetch('http://0.0.0.0:8000/apartments/');
    if (!response.ok) {
      throw new Error('Failed to fetch listings');
    }
    return await response.json();
  }
);

const listingSlice = createSlice({
  name: 'listings',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchListings.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchListings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default listingSlice.reducer;
