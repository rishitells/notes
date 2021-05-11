import styled from 'styled-components/macro';

const TextArea = styled.textarea`
    font-family: inherit;
  font-size: 16px;
    padding: 8px;
    width: 30em;
    height: 15em;
`;

const Content = ({id, text, onTextChange}) => {
    const handleTextChange = (e) => {
        onTextChange(id, e.target.value);
    }

    return <TextArea onChange={handleTextChange} value={text} />
}

export default Content;