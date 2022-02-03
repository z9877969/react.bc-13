import ToDoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss";

const ToDoList = ({ items, changeIsDone, removeTodo }) => {
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
          changeIsDone={changeIsDone}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
