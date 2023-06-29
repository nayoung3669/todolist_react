import React from "react";
import { styled } from "styled-components";

const TodoInputBlock = styled.div`
  display: flex;
  align-items: center;
  height: 65px;
  width: 92%;
  margin-left: 10px;

  p {
    width: 60px;
    font-size: 1rem;
    margin-right: 20px;
    margin-right: 2rem;
  }
  input {
    width: 14rem;
    height: 30px;
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
      <p>할 일:</p>
      <input type="text" name="title" value={title} onChange={onChange} />
      <p>설명: </p>
      <input type="text" name="text" value={text} onChange={onChange} />
    </TodoInputBlock>
  );
};

export default React.memo(TodoInput);
