import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "all",
  priceRange: [0, 10000], // Min - Max Price
  brand: "all",
  rating: 0, // Minimum Rating Filter
  searchQuery: "",
  sortBy: "relevance", // Options: relevance, priceLowToHigh, priceHighToLow, rating
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    setRating: (state, action) => {
      state.rating = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    resetFilters: (state) => {
      state.category = "all";
      state.priceRange = [0, 10000];
      state.brand = "all";
      state.rating = 0;
      state.searchQuery = "";
      state.sortBy = "relevance";
    },
  },
});

export const {
  setCategory,
  setPriceRange,
  setBrand,
  setRating,
  setSearchQuery,
  setSortBy,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
