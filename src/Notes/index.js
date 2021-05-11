import styled from 'styled-components/macro';

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 4px 0;
  cursor: pointer;
`

const Notes = ({items, onNoteSelection}) => {
    return <List>
        {items.map(item => {
            return <ListItem key={item.id} onClick={() => onNoteSelection(item.id)}>{item.title}</ListItem>
        })}
    </List>
}

export default Notes;