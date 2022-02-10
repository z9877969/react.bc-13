import { Component, useState, useEffect } from "react";
import TodoForm, { priorityOptions as PRIORITY } from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import todosDB from "../../data/todo.json";
import s from "./Todo.module.scss";

const Todo = ({ prop1 }) => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || todosDB
  );
  const [priority, setPriority] = useState("all");

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const changeIsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))
    );
  };

  const handleSelect = (e) => {
    const { value } = e.target;
    setPriority(value);
  };

  const getFilterTodos = () => {
    if (priority === "all") return todos;
    return todos.filter((el) => el.priority === priority);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((el) => el.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  
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
