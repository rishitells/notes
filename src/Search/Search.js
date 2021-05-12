import styled from "styled-components/macro";
import searchIcon from "./search.svg";

const Flex = styled.div`
  display: flex;
  border: 1px solid black;
  width: 224px;
  padding: 2px;
  border-radius: 4px;
`;
const Input = styled.input`
  font-family: inherit;
  padding: 4px 2px;
  border: none;
  width: 200px;
  outline: none;
  font-size: 16px;
  border-radius: 4px;
`;

const Search = ({ term, onInputChange }) => {
  const handleInputChange = (e) => {
    onInputChange(e.target.value);
  };

  return (
    <Flex>
      <img height={24} width={24} src={searchIcon} alt="search" />
      <Input role="search" onChange={handleInputChange} value={term} />
    </Flex>
  );
};

export default Search;
