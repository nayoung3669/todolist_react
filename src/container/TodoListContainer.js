import { styled } from "styled-components";
import TodoItem from "../components/TodoItem";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const ListBlock = styled.div`
  width: 90%;
  border-bottom: 1px solid lightgray;
  .working {
    padding-left: 20px;
    margin-top: 30px;
    font-size: 1.5rem;
    text-align: start;
  }
  .todos {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    margin-bottom: 40px;
    flex-wrap: wrap;
  }
  .todos:nth-child(2) {
    background-color: #f6f6f6;
  }
`;

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();
  const workingText = "Working...✍🏻";
  const doneText = "Done ! 🎉";

  const onDelete = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }, []);

  return (
    <>
      <ListBlock>
        <p className="working">{workingText}</p>
        <div className="todos">
          {todos
            .filter((todo) => todo.done === false)
            .map((todo) => {
              return (
                <div onClick={() => navigate(`${todo.id}`)}>
                  <TodoItem
                    todo={todo}
                    onDelete={onDelete}
                    onToggle={onToggle}
                  />
                </div>
              );
            })}
        </div>
      </ListBlock>
      <ListBlock>
        <p className="done">{doneText}</p>
        <div className="todos">
          {todos
            .filter((todo) => todo.done === true)
            .map((todo) => {
              return (
                <TodoItem todo={todo} onDelete={onDelete} onToggle={onToggle} />
              );
            })}
        </div>
      </ListBlock>
    </>
  );
};

export { TodoList };
