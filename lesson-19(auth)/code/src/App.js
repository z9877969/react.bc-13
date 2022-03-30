import { lazy, Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import MainNav from "./components/MainNav/MainNav";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { getCurUser } from "./redux/auth/authOperations";
import { getIsAuth } from "./redux/auth/authSelectors";
import { setToken } from "./redux/auth/authSlice";

const CounterPage = lazy(() =>
  import("./pages/CounterPage" /* webpackChunkName: "counter-page" */)
);
const TodosPage = lazy(() =>
  import("./pages/TodosPage" /* webpackChunkName: "todos-page" */)
);

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);

  useEffect(() => {
    const token = localStorage.getItem("token") || null;
    // dispatch(setToken(token));
    token && dispatch(getCurUser());
  }, []);

  return (
    <div className="App">
      <MainNav isAuth={isAuth} />
      <Suspense fallback={<h1>Loading...</h1>}>
        {isAuth ? (
          <Switch>
            <Route path="/counter">
              <CounterPage />
            </Route>
            <Route path="/todos">
              <TodosPage />
            </Route>
            <Redirect to="/todos" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Redirect to="/login" />
          </Switch>
        )}
      </Suspense>
    </div>
  );
};

export default App;
