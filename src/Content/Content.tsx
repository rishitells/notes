import React from "react";

// @ts-ignore
import deleteIcon from "./delete.svg";
import { useEffect, useRef } from "react";

const Header = ({ id, title, onDelete }) => {
  return (
    <div className="flex justify-between">
      <h4 className="text-2xl">{title}</h4>
      <button role="deleteNote" onClick={() => onDelete(id)}>
        <img src={deleteIcon} alt="delete" />
      </button>
    </div>
  );
};

const Content = ({ id, text, title, onTextChange, onDelete }) => {
  const inputRef = useRef();

  useEffect(() => {
    // @ts-ignore
    inputRef.current.focus();
  }, [id]);

  const handleTextChange = (e) => {
    onTextChange(id, e.target.value);
  };

  return (
    <div>
      <Header
        data-testid="noteContentHeader"
        id={id}
        title={title}
        onDelete={onDelete}
      />
      <textarea
        className="w-full my-2 border-2 border-gray-200 outline-none px-2 py-2"
        data-testid="noteContentEditable"
        ref={inputRef}
        onChange={handleTextChange}
        value={text}
      />
      <p data-testid="count">{text.length}</p>
    </div>
  );
};

export default Content;
