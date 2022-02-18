import s from "./TodoItem.module.scss";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../redux/todos/todosActions";
import sprite from "../../assets/icons/sprite.svg";

const ToDoItem = ({ id, title, descr, priority, isDone }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.toDoItem}>
      <h3 className={s.title}>{title}</h3>
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
          onChange={() => {}} // () => changeIsDone(id)
        />
      </label>
      <button
        className={s.toDoBtn}
        onClick={() => {
          dispatch(removeTodo(id));
          // removeTodo(id);
        }}
      >
        <svg>
          <use href={sprite + "#icon-bin2"}></use>
        </svg>
      </button>
    </li>
  );
};

// const mapDispatchToProps = {
//   removeTodo,
// };

export default ToDoItem;
