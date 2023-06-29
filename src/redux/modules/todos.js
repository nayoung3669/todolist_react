const EDIT = "todos/EDIT";
const CHANGE_INPUT = "todos/CHANGE_INPUT";
const ADD = "todos/ADD";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

export const edit = (input) => ({
  type: EDIT,
  input,
});

export const changeInput = (input) => ({ type: CHANGE_INPUT, input });
let nextId = 6;
export const add = (todo) => {
  return {
    type: ADD,
    todo: {
      id: nextId++,
      title: todo.title,
      text: todo.text,
      done: false,
    },
  };
};
export const toggle = (id) => ({ type: TOGGLE, id });
export const remove = (id) => ({ type: REMOVE, id });

const initialState = {
  input: {
    title: "",
    text: "",
  },
  todos: [
    {
      id: 1,
      title: "리액트 숙련주차 강의 🔥",
      text: "들으면서 메모하기 ",
      done: false,
    },
    {
      id: 2,
      title: " Redux 유튜브 📖",
      text: "스터디 발표 준비",
      done: false,
    },
    {
      id: 3,
      title: "TIL 작성하기!",
      text: "오늘 자정까지 완료 📑",
      done: false,
    },
    {
      id: 4,
      title: "WIL 작성하기 💻",
      text: "Virtual DOM 조사하기",
      done: true,
    },
    {
      id: 5,
      title: "비동기처리 공부 ✍🏻",
      text: "블로그 기록하기",
      done: false,
    },
  ],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case EDIT:   //->신설, 해당하는 항목만 대체하고 다른건 그대로인 배열을 새로 만들어서 넣어줘야함.
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.input.id ? action.input : todo
        ),
      };
    case CHANGE_INPUT:
      return { ...state, input: action.input }; //얕은복사로 괜찮은지 확인하기
    case ADD:
      return { ...state, todos: state.todos.concat(action.todo) };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo,
        ),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
};

export default todos;
