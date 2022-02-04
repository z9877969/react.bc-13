import PropTypes from "prop-types";
import "./ProductsListItem.css";
import { BtnBuyStyled } from "./ProductsListItem.styled";
import image from "../../assets/img/no-image.png";

const ProductsListItem = ({
  url,
  model,
  price,
  currency,
  isSold,
  isPromo,
  addToCart,
}) => {
  return (
    <li className="product">
      <div className="img-wrapper">
        {isPromo && <p className="product-status">Акция</p>}
        <img className="image" src={url} alt="" />
      </div>
      <div className="descr">
        <h3 className="model">{model}</h3>

        {price ? (
          <>
            <span className="price">{price}</span>
            <span className="currency">{currency}</span>
          </>
        ) : (
          <span>Price is waiting</span>
        )}
      </div>
      <BtnBuyStyled
        type="button"
        className="button"
        isSold={isSold}
        onClick={() => {
          addToCart({ url, model, price, currency });
        }}
      >
        {isSold ? "Продано" : "Купить"}
      </BtnBuyStyled>
    </li>
  );
};

ProductsListItem.propTypes = {
  url: PropTypes.string,
  model: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
};

ProductsListItem.defaultProps = {
  url: image,
};

export default ProductsListItem;
