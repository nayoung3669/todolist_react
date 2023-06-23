import React from "react"
import { styled } from "styled-components"

const TodoItemBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 125px;
    width: 190px;
    background-color: white;
    border : 1px solid lightgray;
    border-radius: 10px;
    margin: 5px;

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

    .buttons {
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
        height: 25px;
        button {
            font-size: 0.8rem;
            border: 1px solid lightgray;
            border-radius : 7px;
            margin: 3px;
            cursor: pointer;
        }
        .delete {
            color: red;
        }
        .done {
            color: blue;
        }

    }
`

const TodoItem = ({todo, state, onDelete, onToggle}) => {
    const {id, title, text} = todo
    return (
        <TodoItemBlock>
            <p className="title">{title}</p>
            <p className="text">{text}</p>
            <div className="buttons">
                <button className="delete" onClick={() => onDelete(id)}>DELETE</button>
                <button className="done" onClick={() => onToggle(id)}>{state === "Working..." ? "DONE" : "CANCEL"}</button>
            </div>
        </TodoItemBlock>
    )

}

export default React.memo(TodoItem)