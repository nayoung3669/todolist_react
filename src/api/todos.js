import axios from "axios";

const SERVER = "http://localhost:8080";

//전체조회
export const getTodos = async () => {
  const res = await axios.get("/api/todos");
  return res;
};

//상세조회
export const getTodo = async (id) => {
  const res = await axios.get(`/api/todos/detail/${id}`);
  return res;
};

//추가
export const addTodo = async (formData) => {
  console.log(formData);
  const res = await axios.post(`${SERVER}/api/todos`, formData);
  return res;
};

//수정
export const updateTodo = async (id, updatedTodo) => {
  const res = await axios.put(`/api/todos/${id}`, updatedTodo);
  return res;
};

//삭제
export const deleteTodo = async (id) => {
  const res = await axios.delete(`/api/todos/${id}`);
  return res;
};
