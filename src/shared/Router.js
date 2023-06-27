import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoTemplate from "../components/TodoTemplate";
import DetailPage from "../pages/DetailPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoTemplate />} />
        <Route path=":id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
