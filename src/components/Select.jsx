// Select.js
import React from 'react';

const Select = ({ onChange }) => {
  const handleOnChange = (event) => {
    onChange(parseInt(event.target.value));
  };

  return (
    <div>
      Filas por página: 
      <select onChange={handleOnChange}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
    </div>
  );
};

export default Select;
