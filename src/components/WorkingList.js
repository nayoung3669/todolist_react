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

const WorkingList = ({todos, onDelete, onToggle}) => {
    const working = todos.filter((todo) => todo.done === false)
    return (
        <ListBlock>
            <p className="working">Working...🔥</p>
            <div className="todos">
                {working.map((todo) => {
                    return <TodoItem todo={todo} onDelete={onDelete} onToggle={onToggle}/>
                })}
            </div>
        </ListBlock>
    )
}

export { WorkingList, ListBlock }