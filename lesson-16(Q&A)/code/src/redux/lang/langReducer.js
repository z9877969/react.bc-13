import { createReducer } from "@reduxjs/toolkit";
import { changeLang } from "./langActions";

const langReducer = createReducer("ua", {
  [changeLang]: (state, action) => action.payload,
});

export default langReducer;
