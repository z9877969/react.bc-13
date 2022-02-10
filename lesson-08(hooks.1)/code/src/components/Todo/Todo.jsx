import { Component, useState, useEffect } from "react";
import TodoForm, { priorityOptions as PRIORITY } from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import todosDB from "../../data/todo.json";
import s from "./Todo.module.scss";

const Todo = ({ prop1 }) => {
  // state = {
  //   todos: [], // []
  //   priority: "all",
  // };
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || todosDB
    // []
  );
  const [priority, setPriority] = useState("all");

  // componentDidMount() {
  //   const todosFromLS = JSON.parse(localStorage.getItem("todos")) || [];
  //   this.setState({ todos: todosFromLS });
  // }

  // getSnapshotBeforeUpdate() {
  //   return document.body.scrollHeight;
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (prevState.todos !== this.state.todos) {
  //     localStorage.setItem("todos", JSON.stringify(this.state.todos));
  //   }
  //   if (prevState.todos !== this.state.todos) {
  //     window.scrollTo({
  //       top: snapshot - 200,
  //       behavior: "smooth",
  //     });
  //   }
  // }

  const addTodo = (todo) => {
    // this.setState((prev) => ({
    //   todos: [...prev.todos, todo],
    // }));
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const changeIsDone = (id) => {
    // this.setState((prev) => ({
    //   todos: prev.todos.map((el) =>
    //     el.id === id ? { ...el, isDone: !el.isDone } : el
    //   ),
    // }));
    setTodos((prevTodos) =>
      prevTodos.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))
    );
  };

  const handleSelect = (e) => {
    const { value } = e.target;
    // this.setState({ priority: value });
    setPriority(value);
  };

  const getFilterTodos = () => {
    if (priority === "all") return todos;
    return todos.filter((el) => el.priority === priority);
  };

  const removeTodo = (id) => {
    // this.setState((prev) => ({
    //   todos: prev.todos.filter((el) => el.id !== id),
    // }));
    setTodos((prev) => prev.filter((el) => el.id !== id));
  };

  useEffect(() => {
    // didUpdate
    console.log("USE_EFFECT_TODOS");
    localStorage.setItem("todos", JSON.stringify(todos)); // clear LS
  }, [todos]);

  useEffect(() => {
    // didMount
    console.log("USE_EFFECT_DID_MOUNT");
    // const todosFromLS = JSON.parse(localStorage.getItem("todos")) || [];
    // setTodos(todosFromLS);
  }, []);

  // const { priority } = this.state;
  return (
    <div className={s["container"]}>
      <select onChange={handleSelect} name="priority" value={priority}>
        <option value="all">ALL</option>
        <option value={PRIORITY.HIGH}>HIGH</option>
        <option value={PRIORITY.MEDIUM}>MEDIUM</option>
        <option value={PRIORITY.LOW}>LOW</option>
      </select>
      <TodoForm addTodo={addTodo} priority={priority} />
      <ToDoList
        items={getFilterTodos()}
        changeIsDone={changeIsDone}
        removeTodo={removeTodo}
      />
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
