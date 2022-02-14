import { Component, useEffect, useState } from "react";
import { Watch } from "react-loader-spinner";
import { Route, Link, NavLink, Switch } from "react-router-dom";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";
import NewsList from "./components/NewsList/NewsList";
import { getNews } from "./utils/newsApi";
import HomePage from "./pages/HomePage";
import CounterPage from "./pages/CounterPage";
import NewsPage from "./pages/NewsPage";
import GalleryPage from "./pages/GalleryPage";

const TestPage = () => <h1>TestPage</h1>;

const App = () => {
  return (
    <div className="App">
      <nav>
        <NavLink
          activeStyle={{ color: "green" }}
          // activeClassName={style.active}
          to="/"
          exact
          style={{ fontSize: "36px" }}
        >
          Home
        </NavLink>
        <NavLink
          activeStyle={{ color: "green" }}
          to="/counter"
          style={{ fontSize: "36px" }}
        >
          Counter
        </NavLink>
        <NavLink
          activeStyle={{ color: "green" }}
          to="/news"
          style={{ fontSize: "36px" }}
        >
          News
        </NavLink>
        <NavLink
          activeStyle={{ color: "green" }}
          to="/gallery"
          style={{ fontSize: "36px" }}
        >
          Gallery
        </NavLink>
      </nav>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route
          path="/counter"
          render={(routerProps) => (
            <CounterPage {...routerProps} initialCounter={100} />
          )}
        />
        <Route path="/news/:author">``
          <h1>SingleNewsPage</h1>
        </Route>
        <Route path="/news">
          <NewsPage initialCounter={100} />
        </Route>
        {/* <Route path="/gallery/:imageId">
          <SingleImage />
        </Route> */}
        <Route path="/gallery">
          <GalleryPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
