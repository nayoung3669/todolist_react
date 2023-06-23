import { styled } from "styled-components"

const TemplateBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f6f6f6;
    width: 70%;
    min-width: 670px;
    max-width: 1000px;
    height: 1200px;
    margin-top: 2rem;
    border-radius: 20px;
    font-family:'Courier New', Courier, monospace;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    font-weight: 600;

    .header {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80px;
        width: 100%;
        margin-bottom: 13px;
        color: #f6f6f6;
        border-radius: 10px;
        background-color: #4F709C;
        font-size: 2rem;
        font-weight: 600;
    }
`

const TodoTemplate = ({children}) => {
    return (
        <TemplateBlock>
            <div className="header">
                My Todo List
            </div>
            {children}
        </TemplateBlock>
    )
}

export default TodoTemplate

