import { createAction } from "@reduxjs/toolkit";

export const addItemAction = createAction("addItemAction");
export const removeItemAction = createAction("removeItemAction");

// vanila redux action/creator/
// const addItemActionCreator = (value = null) => ({
//   type: "qwe",
//   payload: value,
// });

export const addItemRequest = createAction("items/addItemRequest");
export const addItemSuccess = createAction("items/addItemSuccess");
export const addItemError = createAction("items/addItemError");

