import styled from 'styled-components/macro';

const TextArea = styled.textarea`
    font-family: inherit;
    padding: 8px;
    width: 30em;
    height: 15em;
`;

const Content = ({id, text, onTextChange}) => {
    console.log('<Content /> --> ', id, text);
    const handleTextChange = (e) => {
        onTextChange(id, e.target.value);
    }

    return <TextArea onChange={handleTextChange} value={text} />
}

export default Content;