import React, { useState } from 'react';
import './App.css';

import Child from './Child';

function Parent() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (newValue) => {
    setInputValue(newValue);
  };

  return (
    <div className="parent">
      <h2>Parent Component</h2>
      <Child inputValue={inputValue} onInputChange={handleInputChange} />
      <p>Input Value in Parent: {inputValue}</p>
    </div>
  );
}

export default Parent;
