import PropTypes from "prop-types";
import Filter from "../Filter/Filter";
import ProductsList from "../ProductsList/ProductsList";
import filterOptions from "../../data/data-filter.json";
import { MainContainerStyled } from "../shared/MainContainer.styled";

const Main = ({ addToCart }) => {
  return (
    <main style={{ backgroundColor: "lightgrey" }}>
      <MainContainerStyled>
        <Filter filterOptions={filterOptions} />
        <ProductsList addToCart={addToCart} />
      </MainContainerStyled>
    </main>
  );
};

Main.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Main;
