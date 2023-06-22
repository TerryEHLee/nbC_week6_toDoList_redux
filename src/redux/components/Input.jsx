import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { uuid } from "react-uuid";
import { addTodo } from "../modules/todos";

function Input() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const dispatch = useDispatch();
  const handleSubmitButtonClick = (event) => {
    event.preventDefault();

    const newTodo = {
      id: uuid(),
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
        <input type='text' />
        <input type='text' />
        <button type='submit'>add⚡️</button>
      </form>
    </StyledInputBox>
  );
}

export default Input;

const StyledInputBox = styled.div`
  background-color: aqua;
  padding: 20px;
`;
