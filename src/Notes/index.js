import styled from 'styled-components/macro';
import editIcon from './edit.svg';
import Button from "../Button";
import Flex from "../Flex";
import {useState} from "react";
import Input from "../Input";

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 0 4px;
  cursor: pointer;
  background: ${({isSelected}) => isSelected ? 'lightgray' : 'white'}
`

const TitleWrapper = styled.div`
  padding: 12px 0;
`;

const Title = styled.h4`
  margin: 0;
  font-weight: normal;
`

const Notes = ({items, onNoteSelection, onTitleChange, selectedId}) => {
    const [editId, setEditId] = useState(selectedId);

    const handleKeyDown = (isEnterPressed) => {
        if(isEnterPressed) setEditId(null);
    }

    return <List>
        {items.map(item => {
            const isSelected = selectedId === item.id;
            const isEditingTitle = editId === item.id;

            return <ListItem isSelected={isSelected} key={item.id} onClick={() => {
                onNoteSelection(item.id);
                // reset edit mode if different note is selected
                if(editId !== null && selectedId !== editId) setEditId(null);
            }}>
                <Flex spaceBetween>
                    <TitleWrapper>{isSelected && isEditingTitle ? <Input handleKeyDown={handleKeyDown} value={item.title} onChange={(value) => {onTitleChange(item.id, value)}}/> :
                        <Title>{item.title}</Title>}</TitleWrapper>
                    {isSelected && <Button onClick={() => {
                        setEditId(item.id);
                    }}><img src={editIcon} alt="edit"/></Button>}
                </Flex>
            </ListItem>
        })}
    </List>
}

export default Notes;