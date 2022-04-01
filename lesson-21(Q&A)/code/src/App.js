import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainNav from "./components/MainNav/MainNav";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { getCurUser } from "./redux/auth/authOperations";
import { getIsAuth } from "./redux/auth/authSelectors";

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
    isAuth && dispatch(getCurUser());
  }, [dispatch]);

  return (
    <div className="App">
      <MainNav isAuth={isAuth} />
      <Suspense fallback={<h1>Loading...</h1>}>
        <PrivateRoute path="/counter">
          <CounterPage />
        </PrivateRoute>
        <PrivateRoute path="/todos">
          <TodosPage />
        </PrivateRoute>
        <PublicRoute path={"/login"} isRestricted={true}>
          <LoginPage />
        </PublicRoute>
        <PublicRoute path={"/register"} isRestricted>
          <RegisterPage />
        </PublicRoute>
        <PublicRoute path={"/news"} isRestricted={false}>
          <h1>NewsPage</h1>
        </PublicRoute>
      </Suspense>
    </div>
  );
};

export default App;
