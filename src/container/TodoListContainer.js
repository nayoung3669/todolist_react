import { styled } from "styled-components";
import { TodoItem } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { remove, toggle } from "../redux/modules/todos";
import React from "react";
import { useCallback } from "react";

const workingText = "Working...✍🏻";
const doneText = "Done ! 🎉";

const TodoListContainer = () => {
  const dispatch = useDispatch();
  const todos = useSelector(({ todos }) => todos.todos);

  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);

  return (
    <>
      <ListBlock>
        <p className="progress">{workingText}</p>
        <div className="todos">
          {todos
            .filter((todo) => todo.done === false)
            .map((todo) => {
              return (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onRemove={onRemove}
                  onToggle={onToggle}
                />
              );
            })}
        </div>
      </ListBlock>
      <ListBlock>
        <p className="progress">{doneText}</p>
        <div className="todos">
          {todos
            .filter((todo) => todo.done === true)
            .map((todo) => {
              return (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onRemove={onRemove}
                  onToggle={onToggle}
                />
              );
            })}
        </div>
      </ListBlock>
    </>
  );
};

export default React.memo(TodoListContainer);

const ListBlock = styled.div`
  width: 90%;
  border-bottom: 1px solid lightgray;
  height: 360px;
  .progress {
    padding-left: 50px;
    margin-top: 30px;
    font-size: 1.5rem;
    text-align: start;
  }
  .todos {
    margin: 0px 20px 0px 20px;
    width: 95%;
    height: 80%;
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    flex-wrap: wrap;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .todos:nth-child(even) {
    background-color: #f6f6f6;
  }
`;
