import ToDoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss";

const ToDoList = ({ items }) => {
  return (
    <ul className={s.list}>
      {items.map(({ title, descr, id, priority, isDone }) => (
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
  );
};

export default ToDoList;
