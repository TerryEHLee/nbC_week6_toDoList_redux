import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../modules/todos";
import { switchTodo } from "../modules/todos";
import { useNavigate } from "react-router-dom";

function TodoList({ isActive }) {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteButtonClick = (id) => {
    dispatch(removeTodo(id));
  };

  const handleSwitchButtonClick = (id) => {
    dispatch(switchTodo(id));
  };
  return (
    <StyledListBox>
      <h4>{isActive ? "🚀 Working Lists" : "🧸 Done Lists"}</h4>
      {todos
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return (
            <StyledTodoBox key={item.id}>
              <h4>{item.title}</h4>
              <p>{item.contents}</p>
              <button onClick={() => handleSwitchButtonClick(item.id)}>
                {isActive ? "⚡️ Complete" : "💨 Back to work"}
              </button>
              <button onClick={() => handleDeleteButtonClick(item.id)}>
                🍫 Delete
              </button>
              <br />
              <br />
              <button
                onClick={() => {
                  navigate(`/${item.id}`);
                }}
              >
                🧐 Detail
              </button>
            </StyledTodoBox>
          );
        })}
    </StyledListBox>
  );
}

export default TodoList;

const StyledListBox = styled.div`
  background-color: #20201f;
  padding: 20px;
`;

const StyledTodoBox = styled.div`
  background-color: #060606;
  color: white;
  padding: 10px;
  margin: 5px;
`;
