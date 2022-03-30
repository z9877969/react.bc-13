import { createAction } from "@reduxjs/toolkit";

export const actionPlus = createAction("counter/plus");
export const actionMinus = createAction("counter/minus");
export const actionReset = createAction("counter/reset");

