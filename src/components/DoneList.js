import React from "react"
import TodoItem from "./TodoItem"
import { ListBlock } from "./WorkingList"

const DoneList = ({todos, onDelete, onToggle}) => {
    const working = todos.filter((todo) => todo.done === true)
    return (
        <ListBlock>
            <p className="working">Done! 🎉</p>
            <div className="todos">
                {working.map((todo) => {
                    return <TodoItem todo={todo} onDelete={onDelete} onToggle={onToggle}/>
                })}
            </div>
        </ListBlock>
    )
}

export default React.memo(DoneList)
