import { useSelector } from "react-redux";
import {
  getFilteredTodos,
  getFilteredTodosMemo,
  getTodosFilter,
  getTodosItems,
} from "../../redux/todos/todosSelectors";
import ToDoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss";

// const getFilteredTodos = ({ items, filter }) => {
//   if (filter === "all") return items;
//   return items.filter((el) => el.priority === filter);
// };

const ToDoList = () => {
  // const items = useSelector(getTodosItems);
  // const filter = useSelector(getTodosFilter);

  // const todos = getFilteredTodos({ items, filter });
  // const filteredTodos = useSelector(getFilteredTodos);
  const filteredTodos = useSelector(getFilteredTodosMemo);


  return filteredTodos.length ? (
    <ul className={s.list}>
      {filteredTodos.map(({ title, descr, id, priority, isDone }) => (
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
