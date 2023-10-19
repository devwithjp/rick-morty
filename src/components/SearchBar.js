import React, { useState } from 'react';

function SearchBar({ setSearchTerm,searchTerm }) {

  const handleSearch = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  return (
    <input
      type="text"
      placeholder="Search by name"
      value={searchTerm}
      onChange={handleSearch}
      className="px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
    />
  );
}


export default SearchBar;