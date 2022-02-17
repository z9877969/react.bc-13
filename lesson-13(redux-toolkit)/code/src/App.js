import { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import MainNav from "./components/MainNav/MainNav";

const CounterPage = lazy(() =>
  import("./pages/CounterPage" /* webpackChunkName: "counter-page" */)
);
const TodosPage = lazy(() =>
  import("./pages/TodosPage" /* webpackChunkName: "todos-page" */)
);

const App = () => {
  return (
    <div className="App">
      <MainNav />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/counter">
            <CounterPage />
          </Route>
          <Route path="/todos">
            <TodosPage />
          </Route>
          <Redirect to="/todos" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
