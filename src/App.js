import styled from "styled-components/macro";
import AddNote from "./AddNote/Notes";
import Notes from "./Notes/Notes";
import Content from "./Content/Content";
import { useState } from "react";
import Search from "./Search/Search";
import Flex from "./Flex/Flex";

const Sidebar = styled.div`
  border-right: 1px solid darkgray;
  min-height: 480px;
  width: 280px;
  overflow: hidden;
`;
const NotesWrapper = styled.div`
  margin-top: 12px;
`;
const ContentWrapper = styled.div`
  margin-left: 12px;
`;

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
      <Flex>
        <Sidebar>
          <Flex>
            <Search term={searchTerm} onInputChange={handleSearchTermChange} />
            <AddNote handleClick={handleNoteAdd} />
          </Flex>
          <NotesWrapper>
            <Notes
              selectedId={selectedId}
              onNoteSelection={handleNoteSelection}
              onTitleChange={handleTitleChange}
              items={filteredNotes}
            />
          </NotesWrapper>
        </Sidebar>
        <ContentWrapper>
          {selectedNote && (
            <Content
              id={selectedNote.id}
              title={selectedNote.title}
              onTextChange={handleTextChange}
              onDelete={handleNoteDelete}
              text={selectedNote.text}
            />
          )}
          {!selectedNote && <p>Select a note to begin...</p>}
        </ContentWrapper>
      </Flex>
    </div>
  );
}

export default App;
