import { TodoItemDetail } from "../components";
import { useParams } from "react-router-dom";
import TodoTemplate from "../layout/TodoTemplate";

const DetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <TodoTemplate>
        <TodoItemDetail id={id} />
      </TodoTemplate>
    </div>
  );
};

export default DetailPage;
