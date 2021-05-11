import styled from 'styled-components/macro';
import AddNote from "./AddNote";
import Notes from "./Notes";
import Content from "./Content";
import {useState} from "react";
import Search from "./Search";

const Flex = styled.div`
  display: flex;
`;
const Sidebar = styled.div`
  border-right: 1px solid darkgray;
  min-height: 480px;
`;
const NotesWrapper = styled.div`
  margin-top: 12px;
`
const ContentWrapper = styled.div`
  margin-left: 12px;
`
const initialNotes = [{id: 1, title: 'Hello world!', text: 'This is my first note!'}, {
    id: 2,
    title: 'Hello universe!',
    text: 'This is my second note!'
}];

function App() {
    const [notes, setNotes] = useState(initialNotes);
    const [selectedId, setSelectedId] = useState(null);
    const [searchTerm, setSearchTerm] = useState('')

    const filteredNotes = notes.filter(note => note.title.includes(searchTerm));
    const selectedNote = notes.find(note => note.id === selectedId);

    const handleNoteSelection = (id) => {
        setSelectedId(id)
    }

    const handleSearchTermChange = (term) => {
        setSearchTerm(term);
    }

    const handleTextChange = (id, text) => {
        setNotes(prevNotes => {
            return prevNotes.map(item => {
                if (item.id === id) return {...item, text: text}
                return item;
            })
        })
    }

    return (
        <div className="App">
            <Flex>
                <Sidebar>
                    <Flex>
                        <Search term={searchTerm} onInputChange={handleSearchTermChange}/>
                        <AddNote/>
                    </Flex>
                    <NotesWrapper>
                        <Notes selectedId={selectedId} onNoteSelection={handleNoteSelection} items={filteredNotes}/>
                    </NotesWrapper>
                </Sidebar>
                <ContentWrapper>
                    {selectedNote &&
                    <Content id={selectedNote.id} onTextChange={handleTextChange} text={selectedNote.text}/>}
                    {!selectedNote && <p>Select a note to begin...</p>}
                </ContentWrapper>
            </Flex>
        </div>
    );
}

export default App;
