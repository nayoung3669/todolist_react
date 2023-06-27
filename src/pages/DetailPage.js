import React from "react";
import TodoItemDetail from "../components/TodoItemDetail";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <TodoItemDetail id={id} />
    </div>
  );
};

export default DetailPage;
