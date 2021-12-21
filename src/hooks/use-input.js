import { useState } from "react";

const useInput = () => {
  const [inputValue, setInputValue] = useState("");

  const valueChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const valueReset = () => {
    setInputValue("");
  };

  return {
    inputValue: inputValue,
    valueChangeHandler,
    valueReset,
  };
};

export default useInput;
