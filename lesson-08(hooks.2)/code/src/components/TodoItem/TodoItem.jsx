import { useContext, useEffect, useState, useRef } from "react";
import s from "./TodoItem.module.scss";
import sprite from "../../assets/icons/sprite.svg";
import { TodoContext, useTodoContext } from "../../context/TodoContext";

// let i = 0;

const ToDoItem = ({ id, title, descr, priority, isDone }) => {
  const { changeIsDone, removeTodo } = useContext(TodoContext);

  const [timer, setTimer] = useState(0);

  const ref = useRef(null);
  // console.log("ref :>> ", ref);

  // let intervalId = null; // 1

  useEffect(() => {
    const startTimer = () => {
      ref.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
      // console.log("initervalId_useEffect :>> ", intervalId);
    };

    // startTimer();

    return () => {
      clearInterval(ref.current);
    };
    // eslint-disable-next-line
  }, []);

  // useEffect(() => {
  //   i++;
  //   ref.current = "useEffect-" + i;
  // }, [timer]);

  // console.log("intervalId :>> ", intervalId);

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
      <button
        type="button"
        onClick={() => {
          clearInterval(ref.current);
        }}
      >
        StopTimer
      </button>
    </li>
  );
};

export default ToDoItem;
