import { Component, PureComponent } from "react";
import shortid from "shortid";
import s from "./TodoForm.module.scss";

export const priority = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
  DEF: "",
};

const getHardCalc = () => {
  let n = 0;
  while (n < 1000000000) {
    n++;
  }
};

class ToDoForm extends PureComponent {
  state = {
    title: "",
    descr: "",
    priority: "",
  };  

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      ...this.state,
      isDone: false,
      id: shortid.generate(),
    };
    this.props.addTodo(newTodo);
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label}>
          <span> Title </span>
          <input
            className={s.input}
            onChange={this.handleChange}
            type="text"
            name="title"
            value={this.state.title}
          />
        </label>
        <label className={s.label}>
          <span> Description </span>
          <textarea
            className={`${s.input} ${s.textarea}`}
            type="text"
            name="descr"
            onChange={this.handleChange}
            value={this.state.descr}
          />
        </label>
        <div className={s.labelWrapper}>
          <div>
            <input
              id="low"
              className={s.input}
              type="radio"
              name="priority"
              value={priority.LOW}
              onChange={this.handleChange}
              checked={priority.LOW === this.state.priority}
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
              value={priority.MEDIUM}
              onChange={this.handleChange}
              checked={priority.MEDIUM === this.state.priority}
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
              value={priority.HIGH}
              onChange={this.handleChange}
              checked={priority.HIGH === this.state.priority}
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
  }
}

export default ToDoForm;
