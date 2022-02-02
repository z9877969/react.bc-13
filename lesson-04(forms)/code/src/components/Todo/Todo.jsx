import TodoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import todos from "../../data/todo.json";
import s from "./Todo.module.scss";

const Todo = () => {
  return (
    <div className={s["container"]}>
      <TodoForm />
      <ToDoList items={todos} />
    </div>
  );
};

export default Todo;
