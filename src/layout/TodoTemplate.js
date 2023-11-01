import { css, styled } from "styled-components";
import Sidebar from "../components/Sidebar";

const TodoTemplate = ({ children }) => {
  return (
    <TemplateBlock>
      {/* {isNaN(id) && <Sidebar />} */}
      <div className="todoTitle">
        <p>TODO LIST</p>
      </div>
      <div className="content">{children}</div>
    </TemplateBlock>
  );
};

export default TodoTemplate;

const TemplateBlock = styled.div`
  border: 1.5px solid gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f6f6;
  width: 880px;
  margin-top: 30px;
  height: 1040px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  font-weight: 600;

  .sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10.9%;
    height: 930px;
    gap: 50px;
    color: #f6f6f6;
    border-bottom-left-radius: 8px;
    background-color: #7a7a7a;
    font-size: 1rem;
    font-weight: 600;

    ${(props) => {
      props.detailed &&
        css`
          display: none;
        `;
    }};
  }

  .todoTitle {
    text-align: center;
    top: 0.3%;
    width: 100%;
    border-bottom: 2px solid lightgray;
    font-size: 1.9rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .category {
    height: 30px;
    background-color: ;
  }

  /* @media screen and (max-width: 1180px) {
    flex-direction: column;
    width: 400px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }

    .todoTitle {
      margin: 0;
      font-size: 1.4rem;
    }

    .sidebar {
      width: 100%;
      height: 86px;
      gap: 0px;
      font-size: 0.8rem;
      border-radius: 0;
      padding-top: 10px;
      margin-bottom: 10px;
    } */
  }
`;
