import { css, styled } from "styled-components";

export const TodoItemBlock = styled.div`
  padding: 5px 7px;
  width: 25%;
  display: flex;

  .paddingBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    border: 0.3px solid lightgray;
    border-radius: 8px;
    text-decoration: none;
    background-color: #fbf9d4;
    display: block;
    border: none;
    height: 7.8em;
    width: 100%;
    padding: 1em;
    box-shadow: 3px 3px 5px rgba(162, 162, 162, 0.38);

    ${({ id }) =>
      Number(id) % 2 === 0 &&
      css`
        background-color: #faf1fa;
      `}
  }

  &:hover {
    animation: vibration 0.3s infinite;
    .paddingBox {
      box-shadow: 3px 3px 5px rgba(162, 162, 162, 0.7);
    }
  }

  .textBox {
    cursor: pointer;
    min-height: 120px;
  }

  p {
    margin: 10px;
  }
  .title {
    font-size: 1rem;
  }

  .text {
    font-weight: 500;
    font-size: 0.8rem;
  }

  .icons {
    position: absolute;
    top: 76%;
    left: 72%;
    display: flex;
    justify-content: space-between;

    .delete {
      cursor: pointer;
      color: #ff5b5b;
    }

    .done {
      cursor: pointer;
      margin-left: 15px;
      width: 20px;
    }
  }
  @keyframes vibration {
    from {
      transform: rotate(1deg);
    }
    to {
      transform: rotate(-1deg);
    }
  }
`;
