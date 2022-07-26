import React from "react";

import AddNote from "./AddNote/AddNote";
import Notes from "./Notes/Notes";
import Content from "./Content/Content";
import { useState } from "react";
import Search from "./Search/Search";

function App({ initialNotes }) {
  const [notes, setNotes] = useState(initialNotes);
  const [selectedId, setSelectedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const selectedNote = notes.find((note) => note.id === selectedId);

  const handleNoteSelection = (id) => {
    setSelectedId(id);
  };

  const handleSearchTermChange = (term) => {
    setSearchTerm(term);
  };

  const handleTextChange = (id, text) => {
    setNotes((prevNotes) => {
      return prevNotes.map((item) => {
        if (item.id === id) return { ...item, text };
        return item;
      });
    });
  };

  const handleNoteAdd = () => {
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: prevNotes.length ? prevNotes[prevNotes.length - 1].id + 1 : 1,
        title: "New note",
        text: "",
      },
    ]);
  };

  const handleTitleChange = (id, title) => {
    setNotes((prevNotes) => {
      return prevNotes.map((item) => {
        if (item.id === id) return { ...item, title };
        return item;
      });
    });
  };

  const handleNoteDelete = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((item) => item.id !== id);
    });
  };

  return (
    <div className="App">
      <div className="flex pt-4 justify-center">
        <div className="w-64">
          <div className="flex py-2">
            <Search term={searchTerm} onInputChange={handleSearchTermChange} />
            <AddNote handleClick={handleNoteAdd} />
          </div>
          <div>
            <Notes
              selectedId={selectedId}
              onNoteSelection={handleNoteSelection}
              onTitleChange={handleTitleChange}
              items={filteredNotes}
            />
          </div>
        </div>
        <div className="w-96 pl-4 pt-3">
          {selectedNote && (
            <Content
              id={selectedNote.id}
              title={selectedNote.title}
              onTextChange={handleTextChange}
              onDelete={handleNoteDelete}
              text={selectedNote.text}
            />
          )}
          {!selectedNote && <h2 className="text-2xl">Select a note to begin...</h2>}
        </div>
      </div>
    </div>
  );
}

export default App;
