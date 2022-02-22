import { useSelector } from "react-redux";
import { getFilteredTodosMemo } from "../../redux/todos/todosSelectors";
import ToDoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss";

const ToDoList = () => {
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
