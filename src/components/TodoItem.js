import React from "react";
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
    top: 73%;
    left: 60%;
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    height: 30px;

    .delete {
      width: 26px;
      color: #f36e6e;
    }
    .delete:hover {
      fill: #f36e6e;
    }
    .done {
      margin-left: 10px;
      width: 28px;
      color: #8181eb;
    }
  }
`;

const TodoItem = ({ todo, onDelete, onToggle }) => {
  const { id, title, text } = todo;

  return (
    <TodoItemBlock id={id}>
      <p className="title">{title}</p>
      <p className="text">{text}</p>
      <div className="icons">
        <div className="delete" onClick={() => onDelete(id)}>
          {trashIcon()}
        </div>
        <di className="done" onClick={() => onToggle(id)}>
          {doneIcon()}
        </di>
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
