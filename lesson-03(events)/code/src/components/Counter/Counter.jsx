import { Component } from "react";
import s from "./Counter.module.css";

class Counter extends Component {
  render() {
    return (
      <div className={s.container}>
        <h1 className={s.title}>Counter</h1>
        <p className={s.count}>100</p>
        <div className={s.btnsWrapper}>
          <button className={s.btn} type="button">
            -
          </button>
          <button className={s.btn} type="button">
            0
          </button>
          <button className={s.btn} type="button">
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
