import React from "react";
import TodoTemplate from "../components/TodoTemplate";
import TodoInputContainer from "../container/TodoInputContainer";
import TodoListContainer from "../container/TodoListContainer";
const MainPage = () => {
  return (
    <TodoTemplate>
      <TodoInputContainer />
      <TodoListContainer />
    </TodoTemplate>
  );
};

export default MainPage;
