import Filter from "../Filter/Filter";
import ProductsList from "../ProductsList/ProductsList";
import filterOptions from "../../data/data-filter.json";
import Cart from "../Cart/Cart";

const Main = () => {
  return (
    <main>
      <Filter filterOptions={filterOptions} />
      <ProductsList />
      <Cart />
    </main>
  );
};

export default Main;
