import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => { 
  // si el useSatate() esta vacio es una variable undefined 
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSumit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 0) {
      setCategories((cats) => [inputValue,...cats]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSumit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
