import React from "react";
import TodoTemplate from "../components/TodoTemplate";
import { TodoList } from "../container/TodoListContainer";

const MainPage = () => {
  return (
    <div>
      <TodoTemplate>
        <TodoList />
      </TodoTemplate>
    </div>
  );
};

export default MainPage;
