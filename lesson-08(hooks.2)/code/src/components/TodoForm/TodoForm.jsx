import { useState } from "react";
import shortid from "shortid";
import s from "./TodoForm.module.scss";

export const priorityOptions = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
  DEF: "",
};

const ToDoForm = ({ addTodo }) => {
  const [form, setForm] = useState({
    title: "",
    descr: "",
    priority: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      ...form,
      isDone: false,
      id: shortid.generate(),
    };
    addTodo(newTodo);
  };

  const { title, descr, priority } = form;

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <span> Title </span>
        <input
          className={s.input}
          onChange={handleChange}
          type="text"
          name="title"
          value={title}
        />
      </label>
      <label className={s.label}>
        <span> Description </span>
        <textarea
          className={`${s.input} ${s.textarea}`}
          type="text"
          name="descr"
          onChange={handleChange}
          value={descr}
        />
      </label>
      <div className={s.labelWrapper}>
        <div>
          <input
            id="low"
            className={s.input}
            type="radio"
            name="priority"
            value={priorityOptions.LOW}
            onChange={handleChange}
            checked={priorityOptions.LOW === priority}
          />
          <label htmlFor="low" className={`${s.label} ${s.radio}`}>
            <span> Low </span>
          </label>
        </div>
        <div>
          <input
            id="medium"
            className={s.input}
            type="radio"
            name="priority"
            value={priorityOptions.MEDIUM}
            onChange={handleChange}
            checked={priorityOptions.MEDIUM === priority}
          />
          <label htmlFor="medium" className={`${s.label} ${s.radio}`}>
            <span> Medium </span>
          </label>
        </div>
        <div>
          <input
            id="high"
            className={s.input}
            type="radio"
            name="priority"
            value={priorityOptions.HIGH}
            onChange={handleChange}
            checked={priorityOptions.HIGH === priority}
          />
          <label htmlFor="high" className={`${s.label} ${s.radio}`}>
            <span> High </span>
          </label>
        </div>
      </div>
      <button className={s.submit} type="submit">
        Ok
      </button>
    </form>
  );
};

export default ToDoForm;
