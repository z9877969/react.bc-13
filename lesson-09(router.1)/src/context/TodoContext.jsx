import { createContext, useContext, useEffect, useRef, useState } from "react";
import todosDB from "../data/todo.json";
import { generate } from "shortid";

const createCollection = (obj, num) =>
  Array(num)
    .fill("")
    .map((el) => ({ ...obj, id: generate() }));

export const TodoContext = createContext();

// export const useTodoContext = () => useContext(TodoContext);

const TodoProvider = ({ children }) => {
  const scrollRef = useRef(null);

  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || todosDB
  );

  const addTodo = (todo) => {
    scrollRef.current = document.body.scrollHeight;    
    setTodos((prevTodos) => [...prevTodos, ...createCollection(todo, 12)]);
  };

  const changeIsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))
    );
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((el) => el.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //   const data = {
  //     todos,
  //     addTodo,
  //     changeIsDone,
  //     removeTodo,
  //   };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        changeIsDone,
        removeTodo,
        scrollHeight: scrollRef.current
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
