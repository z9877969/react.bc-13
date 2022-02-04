import { Component } from "react";
import PropTypes from "prop-types";
import Filter from "../Filter/Filter";
import ProductsList from "../ProductsList/ProductsList";
import filterOptions from "../../data/data-filter.json";
import { MainContainerStyled } from "../shared/MainContainer.styled";

const initialFilter = filterOptions.reduce((acc, el) => {
  acc[el.id] = false;
  return acc;
}, {});

// = ({ addToCart })
class Main extends Component {
  state = {
    // filter: initialFilter,
    filter: {
      apple: false,
      zte: false,
      xiaomi: false,
      huawei: false,
      samsung: false,
    },
  };

  changeFilterStatus = (e) => {
    const { value, checked } = e.target;
    this.setState((prev) => ({
      filter: { ...prev.filter, [value]: checked },
    }));
  };

  render() {
    const { addToCart } = this.props;
    const { filter } = this.state;
    return (
      <main style={{ backgroundColor: "lightgrey" }}>
        <MainContainerStyled>
          <Filter
            changeFilterStatus={this.changeFilterStatus}
            filterStatus={filter}
            filterOptions={filterOptions}
          />
          <ProductsList filterStatus={filter} addToCart={addToCart} />
        </MainContainerStyled>
      </main>
    );
  }
}

Main.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Main;
