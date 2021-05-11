import styled from 'styled-components/macro';

import plusIcon from './plus.svg';

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const AddNote = () => {
    return <Button>
        <img alt="add" src={plusIcon}/>
    </Button>
}

export default AddNote;