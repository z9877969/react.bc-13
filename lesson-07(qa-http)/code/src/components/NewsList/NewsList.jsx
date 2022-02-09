import { Component, createRef } from "react";
import s from "./NewsList.module.css";
import { pageSize } from "../../utils/newsApi";
// import news from "../../data/news.json";

// ({ news, openModal })

class NewsItem extends Component {
  state = {
    isModalOpen: false,
  };

  handleClick = (e) => {
    e.preventDefault();
    const { openModal, item } = this.props;
    openModal(item.urlToImage);
  };

  render() {
    const { item, refEl } = this.props;
    return (
      <li ref={refEl} className={s.item} onClick={this.handleClick}>
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
  refEl = createRef(); // refEl.current = lastNodeLi

  componentDidUpdate(prevProps) {
    if (prevProps.news !== this.props.news) {
      this.refEl.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  render() {
    const { news, openModal } = this.props;
    console.log("refEl :>> ", this.refEl);
    return (
      <>
        <ul className={s.news}>
          {news.map((item, idx, arr) => (
            <NewsItem
              refEl={
                idx === arr.length - 1 - (pageSize - 1) ? this.refEl : null
              }
              // ref={this.refEl}
              item={item}
              key={idx}
              openModal={openModal}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default NewsList;

// class Class {
//   constructor(name) {
//     this.name = name;
//   }
//   getData(data) {
//     console.log(data);
//   }
// }

// const newClass = new Class("Коля");

// newClass.getData("Nick");
