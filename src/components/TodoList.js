import { styled } from "styled-components"
import TodoItem from "./TodoItem"

const ListBlock = styled.div`
    width: 90%;
    border-bottom: 1px solid lightgray;
    .working {
        padding-left: 20px;
        margin-top:30px;
        font-size: 1.5rem;
        text-align: start;

    }
    .todos {
        display: flex;
        flex-direction: row;
        margin-bottom: 40px;
        flex-wrap: wrap;
    }

`

const TodoList = ({todos, state, onDelete, onToggle}) => {

    return (
        <ListBlock>
            <p className="working">{state}</p>
            <div className="todos">
                {todos.map((todo) => {
                    return <TodoItem todo={todo} state={state} onDelete={onDelete} onToggle={onToggle}/>
                })}
            </div>
        </ListBlock>
    )
}

export { TodoList }