import React from "react";
import TodoItemDetail from "../components/TodoItemDetail";
import { useParams } from "react-router-dom";
import TodoTemplate from "../components/TodoTemplate";

const DetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <TodoTemplate>
        <TodoItemDetail id={id} />
      </TodoTemplate>
    </div>
  );
};

export default DetailPage;
