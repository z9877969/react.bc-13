import { Component } from "react";
import s from "./Counter.module.css";

const CounterC = ({ counter }) => <p className={s.count}>{counter}</p>;

class Counter extends Component {
  state = {
    counter: 100,
  };

  plus = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 10 }));
  };

  minus = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 15,
    }));
  };

  reset = () => this.setState({ counter: 100 });

  render() {
    return (
      <div className={s.container}>
        <h1 className={s.title}>Counter</h1>
        <CounterC counter={this.state.counter} />
        <div className={s.btnsWrapper}>
          <button onClick={this.minus} className={s.btn} type="button">
            -
          </button>
          <button onClick={this.reset} className={s.btn} type="button">
            100
          </button>
          <button onClick={this.plus} className={s.btn} type="button">
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
