import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoFilterOptions as PRIORITY } from "../../data/todoFilterOptions";
import { addTodo } from "../../redux/todos/todosOperations";
import { getIsLoadingTodos } from "../../redux/todos/todosSelectors";
import { langOptions } from "../../assets/options/langOptions";
import s from "./TodoForm.module.scss";
import { getLang } from "../../redux/lang/langSelectors";

const ToDoForm = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoadingTodos);
  const lang = useSelector(getLang);

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
  const {
    title: titleOpts,
    descr: descrOpts,
    submit: submitOpts,
    priority: priorityOpts,
  } = langOptions.formOptions;

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <span> {titleOpts[lang]} </span>
        <input
          className={s.input}
          onChange={handleChange}
          type="text"
          name="title"
          value={title}
        />
      </label>
      <label className={s.label}>
        <span> {descrOpts[lang]} </span>
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
            <span> {priorityOpts[lang].low} </span>
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
            <span> {priorityOpts[lang].medium} </span>
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
            <span> {priorityOpts[lang].high} </span>
          </label>
        </div>
      </div>
      <button className={s.submit} type="submit">
        {submitOpts[lang]}
      </button>
      {isLoading && <h3>Loading...</h3>}
    </form>
  );
};

export default ToDoForm;
