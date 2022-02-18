import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import counterReducer from "./counter/counterReducer";
import todosReducer from "./todos/todosReducer";

const todosPersistConfig = {
  key: "items",
  version: 1,
  storage,
  // whitelist: ["items"]
  blacklist: ["filter"],
};

const todosPersistedReducer = persistReducer(todosPersistConfig, todosReducer);

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosPersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development", // true
});

export const persistor = persistStore(store);

export default store;

// import { createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "@redux-devtools/extension";
// import counterReducer from "./counter/counterReducer";
// import todosReducer from "./todos/todosReducer";

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   todos: todosReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;
