import { useState } from "react";
import s from "./Counter.module.css";

const CounterTable = ({ counter }) => <p className={s.count}>{counter}</p>;

const Counter = () => {
  const [counter, setCounter] = useState(100);

  const plus = () => {
    setCounter((prevCounter) => prevCounter + 10);
  };

  const minus = () => {
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
