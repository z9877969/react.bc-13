import { Component } from "react";
import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import Main from "../Main/Main";

class Shop extends Component {
  state = {
    order: [],
    isOpen: false,
  };
  switchCart = () => this.setState((prev) => ({ isOpen: !prev.isOpen }));

  addToCart = (product) => {
    this.setState((prevState) => ({ order: [...prevState.order, product] }));
  };

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
      </>
    );
  }
}

export default Shop;
