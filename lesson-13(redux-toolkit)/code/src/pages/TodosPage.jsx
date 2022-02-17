import SelectPriority from "../components/SelectPriority/SelectPriority";
import TodoForm from "../components/TodoForm/TodoForm";
import TodoList from "../components/TodoList/TodoList";

const TodosPage = () => {
  return (
    <div>
      <SelectPriority />
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodosPage;
