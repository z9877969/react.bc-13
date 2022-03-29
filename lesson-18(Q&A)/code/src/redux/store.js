import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./items/itemsReducer";

const store = configureStore({
  reducer: {
    a: (state = 0, action) => state,
    b: (state = "qewe", action) => state,
    notes: notesReducer,
  },
});

export default store;
