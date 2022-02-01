import Filter from "../Filter/Filter";
import ProductsList from "../ProductsList/ProductsList";
import filterOptions from "../../data/data-filter.json";
import Cart from "../Cart/Cart";
import { MainContainerStyled } from "../shared/MainContainer.styled";

const Main = () => {
  return (
    <main style={{backgroundColor: "lightgrey"}}>
      <MainContainerStyled>
        <Filter filterOptions={filterOptions} />
        <ProductsList />
        {/* <Cart /> */}
      </MainContainerStyled>
    </main>
  );
};

export default Main;
