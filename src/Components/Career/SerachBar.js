import React from 'react';
const SearchBar = ({ filterData }) => {
  const handleChange = (e) => {
    filterData(e.target.value);
  };

  return (
    <div className='search-bar'>
      <input type="text" placeholder="Search by Position or Department" onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
