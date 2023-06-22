import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../modules/todos";

function Input() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const dispatch = useDispatch();
  const handleSubmitButtonClick = (event) => {
    event.preventDefault();

    const newTodo = {
      id: uuidv4(),
      title,
      contents,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
  };

  const handleTitleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentsInputChange = (event) => {
    setContents(event.target.value);
  };

  return (
    <StyledInputBox>
      <form onSubmit={handleSubmitButtonClick}>
        <input onChange={handleTitleInputChange} value={title} type='text' />
        <input
          onChange={handleContentsInputChange}
          value={contents}
          type='text'
        />
        <button type='submit'>add⚡️</button>
      </form>
    </StyledInputBox>
  );
}

export default Input;

const StyledInputBox = styled.div`
  background-color: #616464;
  padding: 20px;
`;
