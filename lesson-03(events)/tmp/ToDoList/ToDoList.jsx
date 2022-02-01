import { Component, Fragment } from "react";

import styles from "./ToDoList.module.scss";

import { toDoListItems } from "../../data";
import ToDoItem from "./ToDoItem/ToDoItem";

const ToDoList = ({ items, removeToDo }) => {
  // const handleItemRemove = (id) =>
  //   this.setState((prevState) => {
  //     return { items: prevState.items.filter((item) => item.id !== id) };
  //   });

  return (
    <>
      <ol>
        {items.map(({ title, descr, id, date }) => (
          <ToDoItem
            key={id}
            id={id}
            cbRemoveItem={removeToDo}
            title={title}
            descr={descr}
            date={date}
          />
        ))}
      </ol>
    </>
  );
};

export default ToDoList;
