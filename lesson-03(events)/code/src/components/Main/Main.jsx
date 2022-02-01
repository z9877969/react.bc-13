import Filter from "../Filter/Filter";
import ProductsList from "../ProductsList/ProductsList";
import filterOptions from "../../data/data-filter.json";
import { MainContainerStyled } from "../shared/MainContainer.styled";

const Main = () => {
  
  return (
    <main style={{ backgroundColor: "lightgrey" }}>
      <MainContainerStyled>
        <Filter filterOptions={filterOptions} />
        <ProductsList />
      </MainContainerStyled>
    </main>
  );
};

export default Main;
