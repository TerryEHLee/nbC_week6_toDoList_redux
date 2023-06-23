import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Detail() {
  const navigate = useNavigate();
  const paramId = useParams().id;

  const todos = useSelector((state) => state.todos);
  const filteredTodo = todos.filter((item) => item.id === paramId)[0];

  return (
    <StyledDetailBox>
      <h1 styled={{ marginBottom: "10px" }}>{filteredTodo.title}</h1>
      {filteredTodo.contents} <br />
      id: {filteredTodo.id} <br />
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        prev
      </button>
    </StyledDetailBox>
  );
}

export default Detail;

const StyledDetailBox = styled.div`
  background-color: lavender;
  padding: 20px;
`;
