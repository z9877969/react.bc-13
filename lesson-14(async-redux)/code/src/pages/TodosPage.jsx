import { useEffect } from "react";
import { useDispatch } from "react-redux";
import SelectPriority from "../components/SelectPriority/SelectPriority";
import TodoForm from "../components/TodoForm/TodoForm";
import TodoList from "../components/TodoList/TodoList";
import { getTodos } from "../redux/todos/todosOperations";

const TodosPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div>
      <SelectPriority />
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodosPage;
