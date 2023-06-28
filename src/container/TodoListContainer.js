import { styled } from "styled-components";
import TodoItem from "../components/TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { remove, toggle } from "../redux/modules/todos";

const ListBlock = styled.div`
  width: 90%;
  border-bottom: 1px solid lightgray;
  height: 360px;
  .progress {
    padding-left: 20px;
    margin-top: 30px;
    font-size: 1.5rem;
    text-align: start;
  }
  .todos {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: row;
    margin-bottom: 40px;
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

const workingText = "Working...✍🏻";
const doneText = "Done ! 🎉";

const TodoListContainer = () => {
  const dispatch = useDispatch();
  const todos = useSelector(({ todos }) => todos.todos);

  const onRemove = (id) => dispatch(remove(id));
  const onToggle = (id) => dispatch(toggle(id));

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
                  todo={todo}
                  onRemove={onRemove}
                  onToggle={onToggle}
                  inDetail={false}
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
                  todo={todo}
                  onRemove={onRemove}
                  onToggle={onToggle}
                  inDetail={false}
                />
              );
            })}
        </div>
      </ListBlock>
    </>
  );
};

export default TodoListContainer;
