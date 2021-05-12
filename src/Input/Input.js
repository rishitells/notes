import styled from "styled-components/macro";
import { useEffect, useRef } from "react";

const StyledInput = styled.input`
  padding: 0;
  margin: 0;
  border: none;
  background: inherit;
  outline: none;
  font-size: 18px;
  font-family: inherit;
`;

const Input = ({ value, onChange, handleKeyDown, ...rest }) => {
  const inputRef = useRef();

  const onKeyDown = (e) => {
    const isSubmitted = e.keyCode === 13;
    handleKeyDown(isSubmitted);
  };

  useEffect(() => {
    inputRef.current.select();
  }, []);

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <StyledInput
      onKeyDown={onKeyDown}
      ref={inputRef}
      type="text"
      value={value}
      onChange={handleChange}
      {...rest}
    />
  );
};

export default Input;
