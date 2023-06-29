import { css, styled } from "styled-components";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";

const TemplateBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #f6f6f6;
  width: 1020px;
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
    width: 200px;

    ${(props) => {
      props.detailed &&
        css`
          display: none;
        `;
    }};
  }

  .todoTitle {
    position: absolute;
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

  @media screen and (max-width: 1180px) {
    flex-direction: column;
    width: 500px;

    .todoTitle {
      top: 0%;
      font-size: 1.25rem;
    }

    .sidebar {
      margin: 0;
      width: 100%;
      height: 68px;
      gap: 0px;
      font-size: 0.9rem;
      border-radius: 0;
      padding-top: 10px;
      margin-bottom: 10px;
    }
  }
`;

const TodoTemplate = ({ children }) => {
  const { id } = useParams();

  return (
    <TemplateBlock>
      {isNaN(id) && <Sidebar />}
      <div className="todoTitle">
        <p>투두 리스트</p>
      </div>
      <div className="content">{children}</div>
    </TemplateBlock>
  );
};

export default TodoTemplate;
