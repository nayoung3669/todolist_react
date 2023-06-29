import React from "react";
import { useNavigate } from "react-router-dom";
import { backIcon, doneIcon, trashIcon } from "../assets/icons";
import { TodoItemBlock } from "../styles/todos";

const TodoItem = ({ todo, onRemove, onToggle }) => {
  const navigate = useNavigate();
  const { id, title, text, done } = todo;

  return (
    <TodoItemBlock id={id}>
      <div className="paddingBox">
        <div className="textBox" onClick={() => navigate(`${id}`)}>
          <p className="title">{title}</p>
          <p className="text">{text}</p>
        </div>
        <div className="icons">
          <div className="delete" onClick={() => onRemove(id)}>
            {trashIcon()}
          </div>
          <div className="done" onClick={() => onToggle(id)}>
            {done === true ? backIcon() : doneIcon()}
          </div>
        </div>
      </div>
    </TodoItemBlock>
  );
};

export default React.memo(TodoItem);
