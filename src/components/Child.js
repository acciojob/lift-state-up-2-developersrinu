import React from 'react';
import './App.css';

function Child({ inputValue, onInputChange }) {
  const handleInput = (event) => {
    const newValue = event.target.value;
    onInputChange(newValue);
  };

  return (
    <div className="child">
      <h3>Child Component</h3>
      <input
        type="text"
        value={inputValue}
        onChange={handleInput}
        placeholder="Type here..."
      />
      <p>Input Value in Child: {inputValue}</p>
    </div>
  );
}

export default Child;
