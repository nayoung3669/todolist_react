import { styled } from "styled-components";

const TemplateBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #f6f6f6;
  min-width: 1270px;
  height: 1050px;
  margin-top: 2rem;
  border-radius: 20px;
  font-family: "Courier New", Courier, monospace;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  font-weight: 600;

  .sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 8.3%;
    height: 90%;
    width: 100%;
    color: #f6f6f6;
    border-radius: 8px;
    background-color: #828282;
    font-size: 1.4rem;
    font-weight: 600;
  }
  .todoTitle {
    position: absolute;
    text-align: center;
    top: 0.3%;
    width: 100%;
    border-bottom: 2px solid lightgray;
    font-size: 2rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: end;
  }
`;

const TodoTemplate = ({ children }) => {
  return (
    <TemplateBlock>
      <div className="todoTitle">
        <p>Todo List</p>
      </div>
      <div className="sidebar">
        <p>Todo List</p>
      </div>
      <div className="content">{children}</div>
    </TemplateBlock>
  );
};

export default TodoTemplate;
