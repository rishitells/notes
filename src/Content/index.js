import styled from 'styled-components/macro';
import Flex from "../Flex";
import Button from "../Button";
import deleteIcon from './delete.svg';

const TextArea = styled.textarea`
  font-family: inherit;
  font-size: 16px;
  padding: 8px;
  width: 30em;
  height: 15em;
`;

const Header = ({id, title, onDelete}) => {
    return <Flex spaceBetween>
        <h4>{title}</h4>
        <Button onClick={() => onDelete(id)}>
            <img src={deleteIcon} alt="delete"/>
        </Button>
    </Flex>
}

const Content = ({id, text, title, onTextChange, onDelete}) => {
    const handleTextChange = (e) => {
        onTextChange(id, e.target.value);
    }

    return (
        <>
            <Header id={id} title={title} onDelete={onDelete}/>
            <TextArea onChange={handleTextChange} value={text}/>
        </>
    )
}

export default Content;