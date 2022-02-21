import { createAction } from "@reduxjs/toolkit";

export const actionPlus = createAction("counter/plus");
export const actionMinus = createAction("counter/minus");
export const actionReset = createAction("counter/reset");

// export const actionPlus = (value) => {
//   return {
//     type: "counter/plus",
//     payload: value,
//   };
// };

// export const actionMinus = (value) => {
//   return {
//     type: "counter/minus",
//     payload: value,
//   };
// };

// export const actionReset = (value) => ({
//   type: "counter/reset",
//   payload: value,
// });
