import PropTypes from "prop-types";
import ProductsListItem from "../ProductsListItem/ProductsListItem";
import "./ProductsList.css";
import products from "../../data/products.json";

const ProductsList = ({ addToCart, filterStatus }) => {
  const getFilteredProducts = () => {
    if (Object.values(filterStatus).every((el) => el === false))
      return products;
    return products.filter((el) => filterStatus[el.type] === true); // el.type
  };

  const filteredProducts = getFilteredProducts();

  const sortProducts = filteredProducts.sort((a, b) => {
    const A = a.model.toLocaleLowerCase();
    const B = b.model.toLocaleLowerCase();
    if (A > B) {
      return 1;
    }
    if (A < B) {
      return -1;
    }
    return 0;
  });

  return (
    <section>
      <ul className="products">
        {sortProducts.map((el) => {
          return (
            <ProductsListItem
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
    </section>
  );
};

ProductsListItem.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default ProductsList;
