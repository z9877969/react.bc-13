import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { addItemError, addItemRequest, addItemSuccess } from "./itemsActions";
import { getItems, removeItem } from "./itemsOperations";

const itemsReducer = createReducer([], {
  [addItemSuccess]: (state, { payload }) => [...state, payload],
  [getItems.fulfilled]: (_, { payload }) => payload,
  [removeItem.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const errorReducer = createReducer(null, {
  [addItemError]: (_, { payload }) => payload,
  [addItemRequest]: () => null,
  [getItems.rejected]: (_, { payload }) => payload,
  [getItems.pending]: () => null,
  [removeItem.rejected]: (_, { payload }) => payload,
  [removeItem.pending]: () => null,
});

const isLoadingReducer = createReducer(false, {
  [addItemRequest]: () => true,
  [addItemSuccess]: () => false,
  [addItemError]: () => false,
  [getItems.pending]: () => true,
  [getItems.fulfilled]: () => false,
  [getItems.rejected]: () => false,
  [removeItem.pending]: () => true,
  [removeItem.fulfilled]: () => false,
  [removeItem.rejected]: () => false,
});

const notesReducer = combineReducers({
  items: itemsReducer,
  error: errorReducer,
  isLoading: isLoadingReducer,
});

export default notesReducer;
