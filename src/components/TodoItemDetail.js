import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { remove, toggle, edit } from "../redux/modules/todos";
import {
  backIcon,
  confirmIcon,
  doneIcon,
  editIcon,
  homeIcon,
  trashIcon,
} from "../assets/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TodoItemDetail = ({ id }) => {
  const [editing, setEditing] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todos = useSelector(({ todos }) => todos.todos);
  const todoItem = todos.find((todo) => todo.id === Number(id));

  const onRemove = (id) => {
    dispatch(remove(id));
    navigate("/");
  };
  const onToggle = (id) => {
    dispatch(toggle(id));
    navigate("/");
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    const updatedTodoItem = { ...todoItem, [name]: value };
    dispatch(edit(updatedTodoItem));
  };

  const onConfirm = () => {
    navigate(`/${todoItem.id}`);
    setEditing(false);
  };

  if (editing) {
    return (
      <DetailBlock>
        <input
          className="titleEdit"
          name="title"
          type="text"
          value={todoItem.title}
          onChange={onChangeInput}
        />
        <input
          className="textEdit"
          name="text"
          type="text"
          value={todoItem.text}
          onChange={onChangeInput}
        />
        <div className="confirm" onClick={onConfirm}>
          {confirmIcon()}
        </div>
      </DetailBlock>
    );
  }

  return (
    <DetailBlock>
      <div className="textBox">
        <p className="title">{todoItem.title}</p>
        <p className="text">{todoItem.text}</p>
      </div>
      <div className="home" onClick={() => navigate("/")}>
        {homeIcon()}
      </div>
      <div className="edit" onClick={() => setEditing(true)}>
        {editIcon()}
      </div>
      <div className="icons">
        <div className="delete" onClick={() => onRemove(todoItem.id)}>
          {trashIcon()}
        </div>
        <div className="done" onClick={() => onToggle(todoItem.id)}>
          {todoItem.done === true ? backIcon() : doneIcon()}
        </div>
      </div>
    </DetailBlock>
  );
};

export default TodoItemDetail;

const DetailBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border: 0.3px solid lightgray;
  border-radius: 10px;
  background-color: #fbf9d4;
  border: none;
  height: 15em;
  width: 35em;
  padding: 2em;
  box-shadow: 3px 3px 5px rgba(162, 162, 162, 0.5);

  input {
    height: 40px;
    width: 250px;
    font-size: 1.3rem;
    border-radius: 15px;
  }
  .textEdit {
    margin-top: 20px;
    width: 400px;
    height: 100px;
    font-size: 1rem;
  }

  .confirm {
    position: absolute;
    top: 8%;
    right: 3%;
    cursor: pointer;
  }

  .edit {
    position: absolute;
    top: 9%;
    right: 3%;
    cursor: pointer;
  }

  .icons {
    position: absolute;
    top: 82%;
    left: 88%;
    display: flex;
    justify-content: space-between;

    .delete {
      cursor: pointer;
      color: #ff5b5b;
    }

    .done {
      cursor: pointer;
      margin-left: 15px;
      width: 30px;
    }
  }

  .title {
    font-size: 1.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .text {
    font-size: 1.1rem;
    margin: 10px 0px 0px 30px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .home {
    cursor: pointer;
    position: absolute;
    top: -105%;
    right: -30%;
  }

  /* @media screen and (max-width: 1180px) {
    width: 18rem;
    height: 10rem;
    .title {
      font-size: 1.2rem;
      margin: 0;
    }
    .text {
      font-size: 0.9rem;
    }
    .icons {
      top: 78%;
      left: 78%;
    }
    .titleEdit {
      width: 200px;
      font-size: 1rem;
      height: 30px;
    }

    .textEdit {
      width: 250px;
      font-size: 0.8rem;
      height: 60px;
    }

    .home {
      position: absolute;
      top: -200%;
      right: -10%;
      cursor: pointer;
    } */
  }
`;
