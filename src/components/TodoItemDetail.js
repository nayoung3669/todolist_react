import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { remove, toggle } from "../redux/modules/todos";
import { backIcon, doneIcon, trashIcon } from "../assets/icons";

const DetailBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border: 0.3px solid lightgray;
  border-radius: 8px;
  background-color: #fbf9d4;
  border: none;
  height: 14em;
  margin-bottom: 100px;
  width: 38em;
  padding: 2em;
  box-shadow: 3px 3px 5px rgba(162, 162, 162, 0.7);

  .icons {
    position: absolute;
    top: 76%;
    left: 72%;
    display: flex;
    .delete {
      cursor: pointer;
    }
  }

  .title {
    font-size: 1.5rem;
  }
  .text {
    font-size: 1.3rem;
    margin: 50px 0px 0px 30px;
  }
`;

const TodoItemDetail = ({ id }) => {
  const dispatch = useDispatch();
  const todos = useSelector(({ todos }) => todos.todos);
  const onRemove = (id) => dispatch(remove(id));
  const onToggle = (id) => dispatch(toggle(id));

  const todoItem = todos.find((todo) => todo.id === Number(id));
  console.log(todoItem);

  return (
    <DetailBlock>
      <div className="textBox">
        <p className="title">{todoItem.title}</p>
        <p className="text">{todoItem.text}</p>
      </div>
      <div className="icons">
        <div className="delete" onClick={() => onRemove(id)}>
          {trashIcon()}
        </div>
        <div className="done" onClick={() => onToggle(id)}>
          {todoItem.done === true ? backIcon() : doneIcon()}
        </div>
      </div>
    </DetailBlock>
  );
};

export default TodoItemDetail;
