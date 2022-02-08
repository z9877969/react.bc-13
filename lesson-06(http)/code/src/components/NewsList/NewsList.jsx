import { Component } from "react";
import s from "./NewsList.module.css";
// import news from "../../data/news.json";

// ({ news, openModal })

class Item extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = (e) => {
    e.preventDefault();
    this.setState({ isModalOpen: true });
  };

  render() {
    const { item } = this.props;
    return (
      <li className={s.item} onClick={this.openModal}>
        <a href={item.url} target="_blank" rel="noreferrer">
          <img className={s.img} src={item.urlToImage} alt="" />
          <div className={s.textWrapper}>
            <h3 classNames={s.title}>{item.title}</h3>
            <p className={s.author}>{item.author}</p>
            <p className={s.date}>{item.publishedAt}</p>
            <p className={s.descr}>{item.description}</p>
          </div>
        </a>
        {this.state.isModalOpen && (
          <>
            <h1>Modal</h1>
            <img src={item.urlToImage} alt="" />
          </>
        )}
      </li>
    );
  }
}

class NewsList extends Component {
  render() {
    const { news } = this.props;
    return (
      <>
        <ul className={s.news}>
          {news.map((item, idx) => (
            <Item item={item} key={idx} />
          ))}
        </ul>
      </>
    );
  }
}

export default NewsList;
