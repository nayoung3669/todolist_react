import React from "react";
import { useCallback, useState } from "react";
import { styled } from "styled-components";

const TodoInputBlock = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65px;
  width: 90%;
  border-bottom: 2px solid lightgray;
  padding-bottom: 10px;

  p {
    font-size: 1.2rem;
    margin-right: 20px;
  }

  input {
    min-width: 100px;
    height: 30px;
    width: 20rem;
    margin-right: 100px;
    border-radius: 15px;
    border: 2px solid black;
  }

  button {
    font-family: "Courier New", Courier, monospace;
    margin-right: 20px;
    margin-bottom: 2px;
    height: 35px;
    width: 6rem;
    border-radius: 10px;
    border: none;
    font-weight: 600;
    background-color: #808080;
    color: white;
  }

  & + & {
    margin-left: 20px;
  }
`;

const TodoInput = ({ onAdd }) => {
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    text: "",
  });

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setTodo({
        ...todo,
        [name]: [value],
      });
    },
    [todo],
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      !todo.title || !todo.text ? alert("내용을 입력하세요.") : onAdd(todo);
      setTodo({ title: "", text: "" });
    },
    [todo, onAdd],
  );

  return (
    <TodoInputBlock onSubmit={(e) => onSubmit(e)}>
      <p>Title: </p>
      <input
        type="text"
        name="title"
        value={todo.title}
        onChange={(e) => onChange(e)}
      />
      <p>Todo: </p>
      <input
        type="text"
        name="text"
        value={todo.text}
        onChange={(e) => onChange(e)}
      />
      <button type="submit">ADD</button>
    </TodoInputBlock>
  );
};

export default React.memo(TodoInput);
