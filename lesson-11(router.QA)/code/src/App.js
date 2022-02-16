import { lazy, Suspense } from "react";
import { Outlet, Route, Routes, Navigate } from "react-router-dom";
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

const MainWrapper = () => {
  return (
    <>
      <MainNav />
      <Outlet />
      {/* <footer>Footer</footer> */}
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<MainWrapper />}>
            <Route index element={<HomePage />} />
            <Route path="counter" element={<CounterPage />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="gallery/:imageId" element={<SingleImage />}>
              <Route path="questions" element={<h2>Questions</h2>} />
              <Route path="comments" element={<h2>Comments</h2>} />
            </Route>
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="/error" element={<h1>Error</h1>} />
            {/* <Redirect to="/" /> */}
            <Route path="*" element={<Navigate to={"/error"} />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
