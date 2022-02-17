import { useState } from "react";
import { connect } from "react-redux";
import ToDoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss";

const ToDoList = ({ todos }) => {
  return todos.length ? (
    <ul className={s.list}>
      {todos.map(({ title, descr, id, priority, isDone }) => (
        <ToDoItem
          key={id}
          id={id}
          title={title}
          descr={descr}
          priority={priority}
          isDone={isDone}
        />
      ))}
    </ul>
  ) : null;
};

const getFilteredTodos = ({ items, filter }) => {
  if (filter === "all") return items;
  return items.filter((el) => el.priority === filter);
};

const mapStateToProps = (state) => {
  const items = state.todos.items;
  const filter = state.todos.filter;

  return {
    todos: getFilteredTodos({ items, filter }),
  };
};

export default connect(mapStateToProps)(ToDoList);
