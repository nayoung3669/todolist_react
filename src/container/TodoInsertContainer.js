import React, { useCallback, useRef, useState } from "react";
import TodoInput from "../components/TodoInput";

const TodoInsertContainer = () => {
  const nextId = useRef(0);

  const onAdd = useCallback((todo) => {
    nextId.current += 1;
    const newTodo = {
      id: nextId.current,
      title: todo.title,
      text: todo.text,
      done: false,
    };
    setTodos((todos) => todos.concat(newTodo));
  }, []);

  return (
    <div>
      <TodoInput onAdd={onAdd} />
    </div>
  );
};

export default TodoInsertContainer;
