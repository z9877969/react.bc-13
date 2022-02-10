import { Component, useState } from "react";
import s from "./Counter.module.css";

const CounterTable = ({ counter }) => <p className={s.count}>{counter}</p>;

const Counter = () => {
  // state = {
  //   counter: 100,
  // };

  const [counter, setCounter] = useState(100);

  const plus = () => {
    // this.setState((prevState) => ({ counter: prevState.counter + 10 }));
    setCounter((prevCounter) => prevCounter + 10);
  };

  const minus = () => {
    // this.setState((prevState) => ({
    //   counter: prevState.counter - 15,
    // }));
    setCounter((prevCounter) => prevCounter - 15);
  };

  const reset = () => setCounter(100);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Counter</h1>
      <CounterTable counter={counter} />
      <div className={s.btnsWrapper}>
        <button onClick={minus} className={s.btn} type="button">
          -
        </button>
        <button onClick={reset} className={s.btn} type="button">
          100
        </button>
        <button onClick={plus} className={s.btn} type="button">
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;

// useState("") // -> [prop, setProp] -> setProp("qwe") / setState({prop: "654"})
