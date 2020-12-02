import React, { useState } from 'react';
import './SearchBar.css';

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');
  const onFormSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };
  // console.log(input);
  return (
    <form className="search-bar" onSubmit={(e) => onFormSubmit(e)}>
      <div className="container">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <i className="fas fa-search" />
            </span>
          </div>
          <input
            className="form-control form-control-lg"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. Star Wars"
          />
        </div>
      </div>
    </form>
  );
}
