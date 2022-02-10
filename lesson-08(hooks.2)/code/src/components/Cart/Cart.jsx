import PropTypes from "prop-types";
import s from "./Cart.module.scss";
import sprite from "../../assets/icons/sprite.svg";

const Cart = ({ isOpen, closeCart, order }) => {

  return (
    <div className={isOpen ? s.cart + " " + s.isOpen : s.cart}>
      ProdNum: {order.length}
      <button onClick={closeCart} className={s["cart-btn-close"]} type="button">
        <svg className={s["cart-icon-close"]}>
          <use href={sprite + "#icon-cross"}></use>
        </svg>
      </button>
      <ul className={s["cart-products"]}>
        {order.map(({ url, model, price, currency }) => {
          return (
            <li className={s["cart-product"]}>
              <img className={s["cart-image"]} src={url} alt="" />
              <div className={s["cart-descr"]}>
                <h3 className={s["cart-model"]}>{model}</h3>
                <span className={s["cart-price"]}>{price}</span>
                <span className={s["cart-currency"]}>{currency}</span>
              </div>
              <button className={s["cart-btn-remove"]} type="button">
                <svg className={s["cart-icon-remove"]}>
                  <use href={sprite + "#icon-bin2"}></use>
                </svg>
              </button>
            </li>
          );
        })}
      </ul>
      <p>Total: {order.reduce((acc, el) => acc + Number(el.price), 0)}</p>
      <button className={s["cart-btn-order"]} type="button">
        Оформить
      </button>
    </div>
  );
};

Cart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeCart: PropTypes.func.isRequired,
  order: PropTypes.array.isRequired,
};

export default Cart;
