import { Component } from "react";
// import Header from "./components/Header/Header";
// import Main from "./components/Main/Main";
// import Cart from "./components/Cart/Cart";
import Todo from "./components/Todo/Todo";
// import Counter from "./components/Counter/Counter";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        {/* <Counter /> */}
        <Todo />
      </>
    );
  }
}

export default App;

//=== App body
// state = {
//   isOpen: false,
//   order: [],
// };

// openCart = () => {
//   this.setState({ isOpen: true });
// };
// closeCart = () => this.setState({ isOpen: false });

// switchCart = () => this.setState((prev) => ({ isOpen: !prev.isOpen }));

// addToCart = (product) =>
//   this.setState((prev) => ({ order: [...prev.order, product] }));

//=== App return
{
  /* <Header openCart={this.switchCart} order={this.state.order} />
        <Main addToCart={this.addToCart} />
        <Cart
          isOpen={this.state.isOpen}
          closeCart={this.switchCart}
          order={this.state.order}
        /> */
}
{
  /* <Todo /> */
}
