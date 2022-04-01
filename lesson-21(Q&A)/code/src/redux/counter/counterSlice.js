import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "../auth/authSlice";

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
  extraReducers: {
    [logOut]: (state) => 100,
  },
});

// console.log("counterSlice :>> ", counterSlice);

export const { actionPlus, actionMinus, actionReset } = counterSlice.actions;
export default counterSlice.reducer; // (state, action) => {}
