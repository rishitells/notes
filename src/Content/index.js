import styled from 'styled-components/macro';
import Flex from "../Flex";
import Button from "../Button";
import deleteIcon from './delete.svg';
import {useEffect, useRef} from "react";

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
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, [id]);

    const handleTextChange = (e) => {
        onTextChange(id, e.target.value);
    }

    return (
        <>
            <Header id={id} title={title} onDelete={onDelete}/>
            <TextArea ref={inputRef} onChange={handleTextChange} value={text}/>
            <p>{text.length}</p>
        </>
    )
}

export default Content;