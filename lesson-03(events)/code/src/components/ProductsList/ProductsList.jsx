import ProductsListItem from "../ProductsListItem/ProductsListItem";
import "./ProductsList.css";
import products from "../../data/products.json";
import { ContainerStyled } from "../shared/Container.styled";

const ProductsList = () => {
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
            />
          );
        })}
      </ul>
      {/* </ContainerStyled> */}
    </section>
  );
};

export default ProductsList;

// const ListItem = (url, model, price, currency) => {
//   <>
//     <img src={url} alt="" />
//     <h1>{model}</h1>
//     <p>{price}</p>
//   </>;
// };

// ListItem("PhoneModel", "https://.....", "20000", "UAH");

// ProductsListItem({
//   url: "https://.....",
//   model: "PhoneModel",
//   price: "20000",
//   currency: "UAH",
// });
