import styled from "styled-components/macro";
import editIcon from "./edit.svg";
import Button from "../Button/Button";
import Flex from "../Flex/Flex";
import { useState } from "react";
import Input from "../Input/Input";

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 0 4px;
  cursor: pointer;
  background: ${({ isSelected }) => (isSelected ? "lightgray" : "white")};
`;

const TitleWrapper = styled.div`
  padding: 12px 0;
`;
const NotePreview = styled.p`
  white-space: nowrap;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Title = styled.h3`
  margin: 0;
  font-weight: bold;
`;

const Notes = ({ items, onNoteSelection, onTitleChange, selectedId }) => {
  const [editId, setEditId] = useState(selectedId);

  const handleKeyDown = (isSubmitted) => {
    if (isSubmitted) setEditId(null);
  };

  return (
    <List data-testid="notesList">
      {items.map((item) => {
        const isSelected = selectedId === item.id;
        const isEditingTitle = editId === item.id;

        return (
          <ListItem
            isSelected={isSelected}
            key={item.id}
            onClick={() => {
              onNoteSelection(item.id);
              // reset edit mode if different note is selected
              if (editId !== null && selectedId !== editId) setEditId(null);
            }}
          >
            <Flex spaceBetween>
              <TitleWrapper>
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
                  <Title data-testid="noteTitle">{item.title}</Title>
                )}
                <NotePreview data-testid="noteContentPreview">
                  {item.text}
                </NotePreview>
              </TitleWrapper>
              {isSelected && (
                <Button
                  role="editTitle"
                  onClick={() => {
                    setEditId(item.id);
                  }}
                >
                  <img src={editIcon} alt="edit" />
                </Button>
              )}
            </Flex>
          </ListItem>
        );
      })}
    </List>
  );
};

export default Notes;