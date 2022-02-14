import {
  Component,
  useState,
  useEffect,
  useContext,
  useMemo,
  useCallback,
  useLayoutEffect,
} from "react";
import { TodoContext, useTodoContext } from "../../context/TodoContext";
import SelectPriority from "../SelectPriority/SelectPriority";
import TodoForm, { priorityOptions as PRIORITY } from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import s from "./Todo.module.scss";

const hardCalc = () => {
  let n = 0;
  while (n < 1000000000) {
    n++;
  }
};

const Todo = () => {
  // const { todos } = useTodoContext();
  const { todos, addTodo, scrollHeight } = useContext(TodoContext);

  const [priority, setPriority] = useState("all");
  const [lang, setLang] = useState("ru");

  const handleSelect = useCallback((e) => {
    const { value } = e.target;
    setPriority(value);
  }, []);  

  const getFilterTodos = useCallback(() => {
    // hardCalc();
    if (priority === "all") return todos; // []
    return todos.filter((el) => el.priority === priority); // priority
  }, [todos, priority]);

  // const items = getFilterTodos();
  const items = useMemo(() => getFilterTodos(), [todos, priority]);
  // const

  useEffect(() => {
    window.scrollTo({
      top: scrollHeight,
      behavior: "smooth",
    });
    console.log("useEffect_todos");
  }, [todos]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  })

  console.log("RENDER");

  return (
    <div className={s["container"]}>
      <select
        name="lang"
        value={lang}
        onChange={(e) => setLang(e.target.value)}
      >
        <option value="ru">Ru</option>
        <option value="uk">Uk</option>
      </select>
      <SelectPriority
        handleSelect={handleSelect}
        PRIORITY={PRIORITY}
        priority={priority}
      />
      <TodoForm priority={priority} />
      <ToDoList items={items} />
      <button
        type="button"
        onClick={() =>
          addTodo({ title: "Title", descr: "Description", priority: "low" })
        }
      >
        LoadMore
      </button>
    </div>
  );
};

export default Todo;

// const useeffect = (cb, dep) => {
//   cb()
// }

// useeffect(() => {
//   // instruction
// }, [someProp])
