import styled from 'styled-components/macro';

const StyledInput = styled.input`
  padding: 8px 4px;
`;

const Index = ({value, onChange}) => {
    const handleChange = e => {
        onChange(e.target.value);
    }

    return <StyledInput type="text" value={value} onChange={handleChange} />
}

export default Index;