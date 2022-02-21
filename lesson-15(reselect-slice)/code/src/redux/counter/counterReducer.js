import { createReducer } from "@reduxjs/toolkit";
import { actionPlus, actionMinus, actionReset } from "./counterActions";

const counterReducer = createReducer(50, {
  [actionPlus]: (state, action) => state + action.payload,
  [actionMinus]: (state, action) => state - action.payload,
  [actionReset]: (_, action) => action.payload,
});

// const counterReducer = (state = 50, action) => {
//   switch (action.type) {i
//     case "counter/plus":
//       return state + action.payload;
//     case "counter/minus":
//       return state - action.payload;
//     case "counter/reset":
//       return action.payload;
//     default:
//       return state;
//   }
// };

export default counterReducer;
