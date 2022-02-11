import { useContext } from "react";
// import Header from "./components/Header/Header";
// import Main from "./components/Main/Main";
// import Cart from "./components/Cart/Cart";
import Todo from "./components/Todo/Todo";
import Shop from "./components/Shop/Shop";
// import Counter from "./components/Counter/Counter";
import "./App.css";
import { TodoContext } from "./context/TodoContext";

const App = () => {

  return (
    <>
      {/* <Counter /> */}
      {/* <Shop /> */}
      <Todo />
    </>
  );
};

export default App;
