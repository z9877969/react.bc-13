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
    // isModalOpen: false,
  };

  componentDidMount() {
    getNews()
      .then((news) => this.setState({ news }))
      .catch((error) => this.setState({ error: error.message }));
  }

  componentDidUpdate(prevProps, prevState) {
    // if (prevState.search !== this.state.search && this.state.search) {
    //   // this.setState({ isLoading: true, error: null });
    //   // getNews(this.state.search)
    //   //   .then((news) => this.setState({ news }))
    //   //   .catch((error) => this.setState({ error: error.message }))
    //   //   .finally(() => this.setState({ isLoading: false }));
    //   this.setNews();
    // }

    // if (
    //   prevState.page !== this.state.page &&
    //   this.state.page !== 1 &&
    //   this.state.search !== ""
    // ) {
    //   // this.setState({ isLoading: true, error: null });
    //   // getNews(this.state.search, this.state.page)
    //   //   .then((news) =>
    //   //     this.setState((prev) => ({
    //   //       news: [...prev.news, ...news],
    //   //     }))
    //   //   )
    //   //   .catch((error) => this.setState({ error: error.message }))
    //   //   .finally(() => this.setState({ isLoading: false }));
    //   this.setNews();
    // }
    if (
      prevState.search !== this.state.search || // search - static, page === 1 false
      prevState.page !== this.state.page //
    ) {
      // if (!this.state.search) return;
      this.setNews();
    }
  }

  setNews = () => {
    this.setState({ isLoading: true, error: null });
    getNews(this.state.search, this.state.page)
      .then((news) =>
        this.setState((prev) => ({
          // news: this.state.page === 1 ? news : [...prev.news, ...news],
          news: [...prev.news, ...news],
        }))
      )
      .catch((error) => this.setState({ error: error.message }))
      .finally(() => this.setState({ isLoading: false }));
  };

  changeSearch = (search) => {
    this.setState({ search, page: 1, news: [] });
  };

  handleLoadMore = () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  };

  // openModal = (e) => {
  //   e.preventDefault();
  //   this.setState({ isModalOpen: true });
  // };

  render() {
    const { news, isLoading, search, error, isModalOpen } = this.state;
    return (
      <div className="App">
        <Form changeSearch={this.changeSearch} />
        {/* {isModalOpen && <h1>Modal`</h1>} */}
        {error ? (
          <p>{error}</p>
        ) : (
          <>
            <NewsList news={news} openModal={this.openModal} />
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
