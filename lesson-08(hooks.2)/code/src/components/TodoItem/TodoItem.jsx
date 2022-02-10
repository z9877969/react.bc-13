import s from "./TodoItem.module.scss";
import sprite from "../../assets/icons/sprite.svg";
import { useEffect, useState } from "react";

const ToDoItem = ({
  id,
  title,
  descr,
  priority,
  isDone,
  changeIsDone,
  removeTodo,
}) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let intervalId = null;
    const startTimer = () => {
      intervalId = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    };

    startTimer();

    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <li className={s.toDoItem}>
      <h3 className={s.title}>{title}</h3>
      <p>{timer}</p>
      <p className={isDone ? s.descr + " " + s.done : s.descr}>{descr}</p>
      <p className={s.priority}>
        Priority: <span>{priority}</span>
      </p>
      <label className={s.isDone}>
        Done/NoDone
        <input
          type="checkbox"
          name="isDone"
          checked={isDone}
          onChange={() => changeIsDone(id)}
        />
      </label>
      <button className={s.toDoBtn} onClick={(e) => removeTodo(id)}>
        <svg>
          <use href={sprite + "#icon-bin2"}></use>
        </svg>
      </button>
    </li>
  );
};

export default ToDoItem;
