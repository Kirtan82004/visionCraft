import React from 'react';
import { Search } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../store/filterSlice'; // Assuming you are managing the search query in a Redux slice


const SearchBar = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.filter.searchQuery); // Get the current search query from Redux store

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search eyewear, lenses, etc."
        className="pl-10 pr-4 py-2 border border-gray-300 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))} // Update search query in Redux store
      />
      <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
    </div>
  );
};

export default SearchBar;
