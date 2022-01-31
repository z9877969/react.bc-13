import React from "react";
import Header from "./components/Header/Header";
// import moduleName from 'module';
import "./App.css";
import Main from "./components/Main/Main";

// const nav = React.createElement(
//   "nav",
//   null,
//   React.createElement("ul", null, React.createElement("li", null, "item1"))
// );
// const header = React.createElement("header", null, "HEaderElement", nav);

function App() {
  return (
    <>
      <Header />
      <Main />
      {/* {header} */}
    </>
  );
}

export default App;
