import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { css, styled } from "styled-components";

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
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  font-weight: 600;

  .sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 8.6%;
    height: 89.7%;
    width: 100%;
    color: #f6f6f6;
    border-bottom-left-radius: 8px;
    background-color: #7a7a7a;
    font-size: 1.4rem;
    font-weight: 600;

    ${(props) => {
      props.detailed &&
        css`
          display: none;
        `;
    }}
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
`;

const TodoTemplate = ({ children }) => {
  const params = useParams();
  return (
    <TemplateBlock>
      <div className="todoTitle">
        <p>Todo List</p>
      </div>
      {isNaN(params.id) && (
        <div className="sidebar">
          <div className="category">
            진행 중 <FontAwesomeIcon icon={faCaretRight} />
          </div>
          <div className="category">
            완료 <FontAwesomeIcon icon={faCaretRight} />
          </div>
        </div>
      )}

      <div className="content">{children}</div>
    </TemplateBlock>
  );
};

export default TodoTemplate;