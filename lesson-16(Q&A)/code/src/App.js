import { lazy, Suspense } from "react";
import { Link, Redirect, Route, Switch, useHistory } from "react-router-dom";
import MainNav from "./components/MainNav/MainNav";
import ColoredBuildPage from "./pages/ColoredBuildPage";

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
          <Route path="/builds">
            <ColoredBuildPage />
          </Route>
          <Redirect to="/todos" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;

const Fn = () => {
  const history = useHistory();

  const changeLocation = () =>
    history.push({ ...history.location, search: "?q=poi" }); // => {}

  return (
    <>
      <h1>Fn</h1>
      <Link to="/">Home</Link>
    </>
  );
};

// {
//   const initialLocation = {
//     pathname: "",
//     search: "",
//     hash: "",
//     state: undefined,
//   };

//   const push = (data) => {
//     if (typeof data === "string") {
//       const newLocation = { ...initialLocation, pathname: data };
//     } else {
//       const newLocation = { ...initialLocation, ...data };
//     }
//   };
// }
