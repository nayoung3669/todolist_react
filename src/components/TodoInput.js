import React from "react";
import { styled } from "styled-components";

const TodoInputBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65px;
  width: 80%;

  p {
    font-size: 1.2rem;
    margin-right: 10px;
  }
  input {
    padding-left: 10px;
    min-width: 100px;
    height: 30px;
    width: 23rem;
    margin-right: 2rem;
    border-radius: 15px;
    border: 2px solid black;
  }
  & + & {
    margin-left: 20px;
  }
`;

const TodoInput = ({ title, text, onChange }) => {
  return (
    <TodoInputBlock>
      <p>Title: </p>
      <input type="text" name="title" value={title} onChange={onChange} />
      <p>Todo: </p>
      <input type="text" name="text" value={text} onChange={onChange} />
    </TodoInputBlock>
  );
};

export default React.memo(TodoInput);
