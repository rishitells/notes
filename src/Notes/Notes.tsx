import React from "react";

// @ts-ignore
import editIcon from "./edit.svg";
import { useState } from "react";
import Input from "../Input/Input";

const Notes = ({ items, onNoteSelection, onTitleChange, selectedId }) => {
  const [editId, setEditId] = useState(selectedId);

  const handleKeyDown = (isSubmitted) => {
    if (isSubmitted) setEditId(null);
  };

  return (
    <ul data-testid="notesList">
      {items.map((item) => {
        const isSelected = selectedId === item.id;
        const isEditingTitle = editId === item.id;

        return (
          <li
            className="py-3 px-2 cursor-pointer hover:bg-gray-100"
            key={item.id}
            onClick={() => {
              onNoteSelection(item.id);
              // reset edit mode if different note is selected
              if (editId !== null && selectedId !== editId) setEditId(null);
            }}
          >
            <div className="flex justify-between">
              <div>
                {isSelected && isEditingTitle ? (
                  <Input
                    role="titleInput"
                    handleKeyDown={handleKeyDown}
                    value={item.title}
                    onChange={(value) => {
                      onTitleChange(item.id, value);
                    }}
                  />
                ) : (
                  <h2 className="text-xl" data-testid="noteTitle">
                    {item.title}
                  </h2>
                )}
                <div data-testid="noteContentPreview">{item.text}</div>
              </div>
              {isSelected && (
                <button
                  className="w-8 h-8 pl-2 active:bg-gray-200 rounded-r-md"
                  role="editTitle"
                  onClick={() => {
                    setEditId(item.id);
                  }}
                >
                  <img src={editIcon} alt="edit" />
                </button>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Notes;
