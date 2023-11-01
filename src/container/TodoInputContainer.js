import React, { useCallback, useState } from "react";
import { TodoInput } from "../components";
import { styled } from "styled-components";
import { addTodo } from "../api/todos";

const TodoInputContainer = () => {
  const [data, setData] = useState({
    id: "",
    title: "",
    text: "",
    date: new Date(),
    done: false,
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onChangeDate = (e) => {
    let formattedDate = e.toISOString().split("T")[0];
    setData({ ...data, date: formattedDate });
  };

  const onAdd = async () => {
    console.log(data);
    try {
      const res = await addTodo(data);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <TodoInputContainerBlock>
      <TodoInput
        title={data.title}
        text={data.text}
        datee={data.date}
        onChangeInput={onChangeInput}
        onChangeDate={onChangeDate}
        onAdd={onAdd}
      />
      <button className="addBtn" onClick={onAdd}>
        ADD
      </button>
    </TodoInputContainerBlock>
  );
};

export default TodoInputContainer;

const TodoInputContainerBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 65%;

  .addBtn {
    font-family: "Gowun Dodum", sans-serif;
    width: 200px;
    height: 30px;
    margin-top: 20px;
    cursor: pointer;
    border-radius: 15px;
    border: none;
    font-weight: 600;
    background-color: #5d5d5d;
    color: white;
  }

  /* @media screen and (max-width: 1180px) {
    flex-direction: column;
    width: 400px;
  } */
`;
