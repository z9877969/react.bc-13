import { useSelector, useDispatch } from "react-redux";
import s from "./Counter.module.css";
import {
  actionMinus,
  actionPlus,
  actionReset,
} from "../../redux/counter/counterActions";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Counter</h1>
      <p className={s.count}>{counter}</p>
      <div className={s.btnsWrapper}>
        <button
          // onClick={() => actionMinusProp(10)}
          onClick={() => dispatch(actionMinus(10))}
          className={s.btn}
          type="button"
        >
          -
        </button>
        <button
          onClick={() => dispatch(actionReset(50))}
          className={s.btn}
          type="button"
        >
          100
        </button>
        <button
          onClick={() => dispatch(actionPlus(35))}
          className={s.btn}
          type="button"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
