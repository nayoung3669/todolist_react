import React from "react";
import Calendar from "react-calendar";
import { styled } from "styled-components";

const TodoInput = ({ title, text, date, onChangeInput, onChangeDate }) => {
  return (
    <TodoInputBlock>
      <div className="inputs">
        <p>할 일:</p>
        <input
          type="text"
          name="title"
          value={title}
          onChange={onChangeInput}
        />
        <p>설명: </p>
        <input type="text" name="text" value={text} onChange={onChangeInput} />
      </div>
      <div className="date">
        <p> 날짜 선택</p>
        <div className="calendar">
          <Calendar onChange={onChangeDate} value={date} />
        </div>
      </div>
    </TodoInputBlock>
  );
};

export default React.memo(TodoInput);

const TodoInputBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 20px;

  .inputs {
    display: flex;
    align-items: center;
  }

  .date {
    display: flex;
    margin: 0 150px 0 150px;
  }
  .calendar {
    width: 290px;
    margin: auto;
  }

  p {
    width: 100px;
    margin-right: 10px;
  }

  input {
    margin-right: 2rem;
    width: 14rem;
    height: 30px;
    border-radius: 15px;
    border: 2px solid black;
  }
  & + & {
    margin-left: 20px;
  }
`;
