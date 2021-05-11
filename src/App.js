import styled from 'styled-components/macro';
import AddNote from "./AddNote";
import Notes from "./Notes";
import Content from "./Content";
import {useState} from "react";

const Flex = styled.div`
  display: flex;
`;
const ContentWrapper = styled.div`
  margin-left: 8px;
`;

const initialNotes = [{id: 1, title: 'Hello world!', text: 'This is my first note!'}, {id: 2, title: 'Hello universe!', text: 'This is my second note!'}];

function App() {
    const [notes, setNotes] = useState(initialNotes);
    const [selectedId, setSelectedId] = useState(null);

    const selectedNote = notes.find(note => note.id === selectedId);

    const handleNoteSelection = (id) => {
        setSelectedId(id)
    }

    const handleTextChange = (id, text) => {
        setNotes(prevNotes => {
            return prevNotes.map(item => {
                if(item.id === id) return { ...item, text: text }
                return item;
            })
        })
    }

    return (
        <div className="App">
            <AddNote />
            <Flex>
                <Notes onNoteSelection={handleNoteSelection} items={notes}/>
                <ContentWrapper>
                    {selectedNote && <Content id={selectedNote.id} onTextChange={handleTextChange} text={selectedNote.text}/>}
                </ContentWrapper>
            </Flex>
        </div>
    );
}

export default App;
