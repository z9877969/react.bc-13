import { createReducer } from "@reduxjs/toolkit";
import { actionPlus, actionMinus, actionReset } from "./counterActions";

const counterReducer = createReducer(50, {
  [actionPlus]: (state, action) => state + action.payload,
  [actionMinus]: (state, action) => state - action.payload,
  [actionReset]: (_, action) => action.payload,
});

export default counterReducer;
