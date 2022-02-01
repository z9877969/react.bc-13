import s from "./ToDoItem.module.scss";

// const Button = ({ cbOnClick, styles }) => {
//   return (
//     <button onClick={cbOnClick} className={styles.close}>
//       X
//     </button>
//   );
// };

const ToDoItem = ({ cbRemoveItem, title, descr, id, date }) => {
  const removeItem = () => cbRemoveItem(id); // removeToDo("654654654") ||removeToDo("987987987")
  return (
    <li class={s.toDoItem}>
      <p class={s.date}>{date}</p>
      <h3 class={s.title}>{title}</h3>
      <p class={s.descr}>{descr}</p>
      {/* <p class={s.descr}></p> */}
      <button onClick={removeItem} class={s.descr}>
        X
      </button>
    </li>
  );
};

export default ToDoItem;
