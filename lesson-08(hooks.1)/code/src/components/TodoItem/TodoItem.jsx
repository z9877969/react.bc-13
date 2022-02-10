// import { Component } from "react";
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
  // state = {
  //   timer: 0,
  // };
  const [timer, setTimer] = useState(0);

  // componentDidMount() {
  //   this.startTimer();
  // }

  // componentWillUnmount() {
  //   clearInterval(this.intervalId);
  //   window.removeEventListener("keydown", () => {});
  // }

  useEffect(() => {
    // if (timer > 0) return;
    let intervalId = null;
    const startTimer = () => {
      intervalId = setInterval(() => {
        // this.setState((prev) => ({ timer: prev.timer + 1 }));
        setTimer((prev) => prev + 1);
        console.log("timer :>> ", timer);
      }, 1000);
    };

    startTimer();

    return () => {
      // componentWillUnmount
      clearInterval(intervalId);
      console.log("componentWillUnmount");
    };
    // eslint-disable-next-line
  }, []);

  console.log("timer :>> ", timer);
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

// data: [ { firstName: "bob", lastName: "dfs" }, { firstName: "frank", lastName: "sdf" }, { firstName "michael", lastName: "sdfs" }, { firstName: "ann", lastName: "dsfs" }, ] 
