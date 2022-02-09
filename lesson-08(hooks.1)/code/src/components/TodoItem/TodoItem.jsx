import { Component } from "react";
import s from "./TodoItem.module.scss";
import sprite from "../../assets/icons/sprite.svg";

class ToDoItem extends Component {
  state = {
    timer: 0,
  };

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    window.removeEventListener("keydown", () => {});
  }

  startTimer = () => {
    this.intervalId = setInterval(() => {
      this.setState((prev) => ({ timer: prev.timer + 1 }));
    }, 1000);
  };

  render() {
    const { id, title, descr, priority, isDone, changeIsDone, removeTodo } =
      this.props;
    return (
      <li className={s.toDoItem}>
        <h3 className={s.title}>{title}</h3>
        <p>{this.state.timer}</p>
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
  }
}

export default ToDoItem;
