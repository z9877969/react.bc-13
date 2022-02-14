import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [order, setOrder] = useState([]);

  const switchCart = () => setIsOpen((prev) => !prev);

  const addToCart = (product) => setOrder((prev) => [...prev, product]);

  return (
    <>
      <Header openCart={switchCart} order={order} />
      <Main addToCart={addToCart} />
      <Cart isOpen={isOpen} closeCart={switchCart} order={order} />
    </>
  );
};

export default Shop;
