import styled from 'styled-components/macro';

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 12px 4px;
  cursor: pointer;
  background: ${({isSelected}) => isSelected ? 'lightgray' : 'white'}
`

const Notes = ({items, onNoteSelection, selectedId}) => {
    return <List>
        {items.map(item => {
            return <ListItem isSelected={selectedId === item.id} key={item.id} onClick={() => onNoteSelection(item.id)}>{item.title}</ListItem>
        })}
    </List>
}

export default Notes;