import React from 'react';

const Search = ({ onSearch }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Buscar por Nombre..."
      onChange={handleSearch}
    />
  );
};

export default Search;
