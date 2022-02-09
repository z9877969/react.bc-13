import { Component } from "react";
import { Watch } from "react-loader-spinner";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";
import NewsList from "./components/NewsList/NewsList";
import { getNews } from "./utils/newsApi";

class App extends Component {
  state = {
    news: [],
    search: "",
    page: 1,
    isLoading: false,
    error: null,
    modalUrl: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const news = await getNews();
      this.setState({ news });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidUpdate(_, prevState) {
    if (
      prevState.search !== this.state.search || // search - static, page === 1 false
      prevState.page !== this.state.page //
    ) {
      this.setNews();
    }

    if (prevState.error !== this.state.error && this.state.error) {
      setTimeout(() => {
        this.setState({ error: null });
      }, 2000);
    }
  }

  setNews = async () => {
    this.setState({ isLoading: true });
    try {
      const news = await getNews(this.state.search, this.state.page);
      this.setState((prev) => ({
        news: [...prev.news, ...news],
      }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  changeSearch = (search) => {
    this.setState({ page: 1, news: [], search });
  };

  handleLoadMore = () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  };

  openModal = (modalUrl) => {
    this.setState({ modalUrl });
  };

  render() {
    const { news, isLoading, search, error, isModalOpen } = this.state;
    return (
      <div className="App">
        <Form changeSearch={this.changeSearch} />
        {isModalOpen && <h1>Modal</h1>}
        {error ? (
          <p>{error.message}</p>
        ) : (
          <>
            <NewsList openModal={this.openModal} news={news} />
            {isLoading ? (
              <Watch heigth="50" width="50" color="red" />
            ) : (
              search && <Button handleLoadMore={this.handleLoadMore} />
            )}
          </>
        )}
      </div>
    );
  }
}

export default App;

// {
//   <section>
//     <div class="container">
//       <h2></h2>
//       <ul>
//         <li></li>
//         <li></li>
//         <li></li>
//       </ul>
//     </div>
//   </section>;
// }

// const Section = ({ title, children }) => {
//   return (
//     <section>
//       <div class="container">
//         {title && <h2>{title}</h2>}

//         {children}
//       </div>
//     </section>
//   );
// };

// <Section>
//   <ul>
//     <li></li>
//     <li></li>
//     <li></li>
//   </ul>
// </Section>;

// <Section>
//   <img />
// </Section>;

// const Modal = ({ children }) => {
//   // logic reuse
//   return <div className="backdrop">{children}</div>;
// };

// <Modal>
//   Content
// </Modal>
