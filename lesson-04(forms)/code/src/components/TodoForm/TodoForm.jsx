import { Component } from "react";
import s from "./TodoForm.module.scss";

class ToDoForm extends Component {
  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label}>
          <span> Title </span>
          <input className={s.input} type="text" name="title" />
        </label>
        <label className={s.label}>
          <span> Description </span>
          <textarea className={s.input + " " + s.textarea} type="text" name="descr" />
        </label>

        <div class={s.labelWrapper}>
          <div>
            <input
              id="low"
              className={s.input}
              type="radio"
              name="priority"
              value="low"
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
              value="medium"
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
              value="high"
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
