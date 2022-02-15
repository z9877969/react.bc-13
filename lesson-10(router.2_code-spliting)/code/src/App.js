import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CounterPage from "./pages/CounterPage";
import NewsPage from "./pages/NewsPage";
import GalleryPage from "./pages/GalleryPage";
import MainNav from "./components/MainNav/MainNav";
import SingleImage from "./components/SingleImage/SingleImage";

const App = () => {
  return (
    <div className="App">
      <MainNav />
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
      </Switch>
    </div>
  );
};

export default App;
