import { connect } from "react-redux";
import s from "./Counter.module.css";
import { actionMinus, actionPlus, actionReset } from "../../redux/counter/counterActions";

const Counter = ({ counterProp, actionPlusProp, actionMinusProp, actionPropReset }) => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Counter</h1>
      <p className={s.count}>{counterProp}</p>
      <div className={s.btnsWrapper}>
        <button
          onClick={() => actionMinusProp(10)}
          className={s.btn}
          type="button"
        >
          -
        </button>
        <button
          onClick={() => actionPropReset(30)}
          className={s.btn}
          type="button"
        >
          100
        </button>
        <button
          onClick={() => actionPlusProp(25)}
          className={s.btn}
          type="button"
        >
          +
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counterProp: state.counter,
  };
};

const mapDispatchToProps = {
  actionPlusProp: actionPlus, 
  actionMinusProp: actionMinus,
  actionPropReset: actionReset
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);