import React from "react";
// @ts-ignore
import searchIcon from "./search.svg";

const Search = ({ term, onInputChange }) => {
  const handleInputChange = (e) => {
    onInputChange(e.target.value);
  };

  return (
    <div className="flex items-center border-2 border-gray-200 rounded-l-md">
      <img className="h-8 w-8" src={searchIcon} alt="search" />
      <input
        className="py-1.5 px-1 outline-0"
        role="search"
        onChange={handleInputChange}
        value={term}
      />
    </div>
  );
};

export default Search;
