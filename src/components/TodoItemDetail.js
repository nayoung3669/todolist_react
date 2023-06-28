import React from "react";
import { styled } from "styled-components";

const DetailBlock = styled.div`
  background-color: #f6f6f6;
  width: 80%;
  height: 100%;
  color: black;
`;

const TodoItemDetail = ({ id }) => {
  return <DetailBlock>TodoItemDetail{id}</DetailBlock>;
};

export default TodoItemDetail;
