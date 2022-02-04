import Header from "./components/Header/Header";
import "./App.css";
import Main from "./components/Main/Main";
import Cart from "./components/Cart/Cart";
import { Component } from "react";
import Todo from "./components/Todo/Todo";
import Shop from "./components/Shop/Shop";
// import Counter from "./components/Counter/Counter";

class App extends Component {
  state = {
    
  };

  render() {
    return (
      <>
        <Shop />
        {/* <Counter /> */}
        {/* <Todo /> */}
      </>
    );
  }
}

export default App;
