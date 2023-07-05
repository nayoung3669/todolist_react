import React, { useCallback } from "react";
import { TodoInput } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { add, changeInput } from "../redux/modules/todos";
import { styled } from "styled-components";

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
      <button onClick={onAdd}>추가</button>
    </TodoInputContainerBlock>
  );
};

export default TodoInputContainer;

const TodoInputContainerBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;

  button {
    font-family: "Gowun Dodum", sans-serif;
    cursor: pointer;
    margin-right: 20px;
    margin-bottom: 2px;
    height: 36px;
    width: 5rem;
    border-radius: 15px;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    background-color: #5d5d5d;
    color: white;
  }

  @media screen and (max-width: 1180px) {
    flex-direction: column;
    width: 400px;
  }
`;
