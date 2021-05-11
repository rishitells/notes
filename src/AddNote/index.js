import styled from 'styled-components/macro';

const Link = styled.a`
    color: teal;
  cursor: pointer;
`;

const AddNote = () => {
    return <Link>
        Add Note
    </Link>
}

export default AddNote;