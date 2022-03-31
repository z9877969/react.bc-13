import { useSelector, useDispatch } from "react-redux";
import s from "./Counter.module.css";
import {
  actionPlus,
  actionMinus,
  actionReset,
} from "../../redux/counter/counterSlice";
import { getCounter } from "../../redux/counter/counterSelectors";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(getCounter);

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
          onClick={() => dispatch(actionReset(100))}
          className={s.btn}
          type="button"
        >
          100
        </button>
        <button
          onClick={() => dispatch(actionPlus(35))} // {type: "counter/actionPlus", payload: 35}
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
