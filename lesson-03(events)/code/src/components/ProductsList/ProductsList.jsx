import PropTypes from 'prop-types';
import ProductsListItem from "../ProductsListItem/ProductsListItem";
import "./ProductsList.css";
import products from "../../data/products.json";
// import { ContainerStyled } from "../shared/Container.styled";

const ProductsList = ({ addToCart }) => {
  return (
    <section>
      {/* <ContainerStyled> */}
      <ul className="products">
        {products.map((el) => {
          return (
            <ProductsListItem
              // {...qwe}
              // id={id}
              key={el.id}
              url={el.url}
              model={el.model}
              price={el.price}
              currency={el.currency}
              isSold={el.isSold}
              isPromo={el.isPromo}
              addToCart={addToCart}
            />
          );
        })}
      </ul>
      {/* </ContainerStyled> */}
    </section>
  );
};

ProductsListItem.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default ProductsList;
