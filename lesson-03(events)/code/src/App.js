import Header from "./components/Header/Header";
import "./App.css";
import Main from "./components/Main/Main";
import Cart from "./components/Cart/Cart";
import { Component } from "react";
// import Counter from "./components/Counter/Counter";

class App extends Component {
  state = {
    isOpen: false,
    order: [],
  };

  // openCart = () => {
  //   this.setState({ isOpen: true });
  // };
  // closeCart = () => this.setState({ isOpen: false });

  switchCart = () => this.setState((prev) => ({ isOpen: !prev.isOpen }));

  addToCart = (product) =>
    this.setState((prev) => ({ order: [...prev.order, product] }));

  render() {
    return (
      <>
        <Header openCart={this.switchCart} order={this.state.order} />
        <Main addToCart={this.addToCart} />
        <Cart
          isOpen={this.state.isOpen}
          closeCart={this.switchCart}
          order={this.state.order}
        />
        {/* <Counter /> */}
      </>
    );
  }
}

export default App;
