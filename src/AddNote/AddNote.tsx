import React from "react";
// @ts-ignore
import plusIcon from "./plus.svg";

const AddNote = ({ handleClick }) => {
  return (
    <button
      className="px-2 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 rounded-r-md"
      role="addNote"
      onClick={handleClick}
    >
      <img alt="add" src={plusIcon} />
    </button>
  );
};

export default AddNote;
