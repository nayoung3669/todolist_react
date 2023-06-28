import React, { useCallback } from "react";
import TodoInput from "../components/TodoInput";
import { useSelector, useDispatch } from "react-redux";
import { add, changeInput } from "../redux/modules/todos";
import { styled } from "styled-components";

const TodoInputContainerBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  border-bottom: 3px solid lightgray;

  button {
    font-family: "Courier New", Courier, monospace;
    margin-right: 20px;
    margin-bottom: 2px;
    height: 36px;
    width: 5rem;
    border-radius: 15px;
    border: none;
    font-size: 1.05rem;
    font-weight: 600;
    background-color: #333333;
    color: white;
  }
`;

const TodoInputContainer = () => {
  const dispatch = useDispatch();
  const input = useSelector(({ todos }) => todos.input);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    const newInput = {
      ...input,
      [name]: value,
    };
    dispatch(changeInput(newInput));
  };

  const onAdd = useCallback(() => {
    input.title === "" || input.text === ""
      ? alert("내용을 입력해주세요!")
      : dispatch(add(input));
    dispatch(changeInput({ title: "", text: "" }));
  }, [dispatch, input]);

  return (
    <TodoInputContainerBlock>
      <TodoInput
        title={input.title}
        text={input.text}
        onChange={onChangeInput}
        onAdd={onAdd}
      />
      <button onClick={onAdd}>ADD</button>
    </TodoInputContainerBlock>
  );
};

export default TodoInputContainer;
