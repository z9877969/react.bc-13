import s from "./TodoItem.module.scss";
import sprite from "../../assets/icons/sprite.svg";

const ToDoItem = ({ title, descr, priority }) => {
  return (
    <li class={s.toDoItem}>
      <h3 class={s.title}>{title}</h3>
      <p class={s.descr}>{descr}</p>
      <p className={s.priority}>
        Priority: <span>{priority}</span>
      </p>
      <label className={s.isDone}>
        Done/NoDone
        <input type="checkbox" name="isDone" />
      </label>
      <button class={s.toDoBtn}>
        <svg>
          <use href={sprite + "#icon-bin2"}></use>
        </svg>
      </button>
    </li>
  );
};

export default ToDoItem;
