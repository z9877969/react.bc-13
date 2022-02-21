import { useSelector } from "react-redux";
import ToDoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss";

const getFilteredTodos = ({ items, filter }) => {
  if (filter === "all") return items;
  return items.filter((el) => el.priority === filter);
};

const ToDoList = () => {
  const { items, filter } = useSelector((state) => state.todos);

  const todos = getFilteredTodos({ items, filter });

  return todos.length ? (
    <ul className={s.list}>
      {todos.map(({ title, descr, id, priority, isDone }) => (
        <ToDoItem
          key={id}
          id={id}
          title={title}
          descr={descr}
          priority={priority}
          isDone={isDone}
        />
      ))}
    </ul>
  ) : null;
};

export default ToDoList;
