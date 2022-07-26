import React, { useEffect, useRef } from "react";

const Input = ({ value, onChange, handleKeyDown, ...rest }) => {
  const inputRef = useRef();

  const onKeyDown = (e) => {
    const isSubmitted = e.keyCode === 13;
    handleKeyDown(isSubmitted);
  };

  useEffect(() => {
    // @ts-ignore
    inputRef.current.select();
  }, []);

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <input
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
