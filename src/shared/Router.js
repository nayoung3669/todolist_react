import { Route, Routes } from "react-router-dom";
import TodoTemplate from "../components/TodoTemplate";
import DetailPage from "../pages/DetailPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoTemplate />} />
      <Route path=":id" element={<DetailPage />} />
    </Routes>
  );
};

export default Router;
