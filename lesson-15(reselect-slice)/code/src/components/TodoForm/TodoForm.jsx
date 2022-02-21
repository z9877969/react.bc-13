import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoFilterOptions as PRIORITY } from "../../data/todoFilterOptions";
import { addTodo } from "../../redux/todos/todosOperations";
import s from "./TodoForm.module.scss";

const ToDoForm = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.todos.isLoading);

  const [form, setForm] = useState({
    title: "",
    descr: "",
    priority: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodo({ ...form, isDone: false }));
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
            value={PRIORITY.LOW}
            onChange={handleChange}
            checked={PRIORITY.LOW === priority}
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
            value={PRIORITY.MEDIUM}
            onChange={handleChange}
            checked={PRIORITY.MEDIUM === priority}
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
            value={PRIORITY.HIGH}
            onChange={handleChange}
            checked={PRIORITY.HIGH === priority}
          />
          <label htmlFor="high" className={`${s.label} ${s.radio}`}>
            <span> High </span>
          </label>
        </div>
      </div>
      <button className={s.submit} type="submit">
        Ok
      </button>
      {isLoading && <h3>Loading...</h3>}
    </form>
  );
};

export default ToDoForm;
