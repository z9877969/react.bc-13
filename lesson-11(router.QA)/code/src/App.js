import { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import MainNav from "./components/MainNav/MainNav";
// import HomePage from "./pages/HomePage";
// import CounterPage from "./pages/CounterPage";
// import NewsPage from "./pages/NewsPage";
// import GalleryPage from "./pages/GalleryPage";
// import SingleImage from "./components/SingleImage/SingleImage";

const HomePage = lazy(() =>
  import("./pages/HomePage" /* webpackChunkName: "home-page" */)
);
const CounterPage = lazy(() =>
  import("./pages/CounterPage" /* webpackChunkName: "counter-page" */)
);
const NewsPage = lazy(() => import("./pages/NewsPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const SingleImage = lazy(() => import("./components/SingleImage/SingleImage"));

const App = () => {
  return (
    <div className="App">
      <MainNav />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/counter"
            render={(routerProps) => (
              <CounterPage {...routerProps} initialCounter={100} />
            )}
          />
          <Route path="/news">
            <NewsPage />
          </Route>
          <Route path="/gallery/:imageId">
            <SingleImage />
          </Route>
          <Route path="/gallery">
            <GalleryPage />
          </Route>
          {/* <Route path="/not-found">
            <h1>Not found</h1>
          </Route> */}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
