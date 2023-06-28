import React from "react";
import { useNavigate } from "react-router-dom";
import { css, styled } from "styled-components";

const TodoItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border: 0.3px solid lightgray;
  border-radius: 8px;
  margin: 5px;

  text-decoration: none;
  color: #000;
  background-color: #fbf9d4;
  display: block;
  height: 10em;
  width: 10em;
  padding: 1em;
  box-shadow: 3px 3px 5px rgba(162, 162, 162, 0.7);

  .textBox {
    cursor: pointer;

    min-height: 120px;
  }

  ${({ id }) =>
    Number(id) % 2 === 0 &&
    css`
      background-color: #faf1fa;
    `}
  p {
    margin: 10px;
  }
  .title {
    font-size: 1.2rem;
  }

  .text {
    font-weight: 500;
    font-size: 1rem;
  }

  .icons {
    position: absolute;
    top: 81%;
    left: 66%;
    display: flex;
    justify-content: space-between;

    .delete {
      cursor: pointer;
      width: 24px;
      color: #f78888;
    }
    .delete:hover {
      fill: #fb2f2f;
    }
    .done {
      cursor: pointer;
      margin-left: 5px;
      width: 25px;
      color: #95b9f6;
    }
  }
`;

const TodoItem = ({ todo, onRemove, onToggle }) => {
  const navigate = useNavigate();
  const { id, title, text, done } = todo;

  return (
    <TodoItemBlock id={id}>
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
    </TodoItemBlock>
  );
};

export default React.memo(TodoItem);

const trashIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    </svg>
  );
};

const doneIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

const backIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
      />
    </svg>
  );
};
