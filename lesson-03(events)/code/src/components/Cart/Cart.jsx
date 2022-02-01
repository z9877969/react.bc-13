import s from "./Cart.module.scss";
import sprite from "../../assets/icons/sprite.svg";

const Cart = () => {
  return (
    <div className={s["cart"]}>
      <button
        className={s["cart-btn-close"]}
        type="button"
      >
        <svg className={s["cart-icon-close"]}>
          <use href={sprite + "#icon-cross"}></use>
        </svg>
      </button>
      <ul className={s["cart-products"]}>
        <li className={s["cart-product"]}>
          <img
            className={s["cart-image"]}
            src="https://content1.rozetka.com.ua/goods/images/big/238782224.jpg"
            alt=""
          />
          <div className={s["cart-descr"]}>
            <h3 className={s["cart-model"]}>ZTE RedMagic</h3>
            <span className={s["cart-price"]}>11999</span>
            <span className={s["cart-currency"]}>UAH</span>
          </div>
          <button className={s["cart-btn-remove"]} type="button">
            <svg className={s["cart-icon-remove"]}>
              <use href={sprite + "#icon-bin2"}></use>
            </svg>
          </button>
        </li>
      </ul>
      <button className={s["cart-btn-order"]} type="button">
        Оформить
      </button>
    </div>
  );
};

export default Cart;
