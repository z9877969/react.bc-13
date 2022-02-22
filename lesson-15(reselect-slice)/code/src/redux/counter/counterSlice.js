import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 100,
  reducers: {
    actionPlus(state, action) {
      // {type:"counter/actionPlus" }
      return state + action.payload;
    },
    actionMinus(state, { payload }) {
      return state - payload;
    },
    actionReset: (_, { payload }) => payload,
  },
});

console.log("counterSlice :>> ", counterSlice);

export const { actionPlus, actionMinus, actionReset } = counterSlice.actions;
export default counterSlice.reducer; // (state, action) => {}
