import React from 'react';

function SearchBar({ searchTerm, handleSearch }) {
  return (
    <div>
      <h1>Search Route IDs</h1>
      <input
        type="text"
        placeholder="Search by Route ID or Name"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
