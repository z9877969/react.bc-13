import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectPriority from "../components/SelectPriority/SelectPriority";
import TodoForm from "../components/TodoForm/TodoForm";
import TodoList from "../components/TodoList/TodoList";
import { getLocalid } from "../redux/auth/authSelectors";
import { getTodos } from "../redux/todos/todosOperations";

const TodosPage = () => {
  const dispatch = useDispatch();
  const localId = useSelector(getLocalid);

  useEffect(() => {
    localId && dispatch(getTodos());
  }, [dispatch, localId]);

  return (
    <div>
      <SelectPriority />
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodosPage;
