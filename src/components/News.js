import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 15,
    category: "general",
  };

  static propsType = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `RapidNews- ${this.capitalize(this.props.category)}`;
  }

  async updateNews() {
    this.props.setProgress(10);
    const apiUrl = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=${this.props.apiKey}&country=${this.props.country}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });
    const fetchText = async (url) => {
      const response = await fetch(url);
      return await response.json();
    };
    this.props.setProgress(70);
    fetchText(apiUrl).then((text) => {
      this.setState({
        articles: text.articles,
        totalResults: text.totalResults,
        loading: false,
      });
      this.props.setProgress(100);
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const apiUrl = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=${this.props.apiKey}&country=${this.props.country}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    const fetchText = async (url) => {
      const response = await fetch(url);
      return await response.json();
    };

    fetchText(apiUrl).then((text) => {
      this.setState({
        articles: this.state.articles.concat(text.articles),
        totalResults: text.totalResults,
      });
    });
  };

  render() {
    return (
      <>
        <h1 className="display-5 text-center my-2">{`RapidNews - Top ${this.capitalize(
          this.props.category
        )} Headlines`}</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container my-3">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 50) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      published={element.publishedAt}
                      author={element.author ? element.author : "Anonymous"}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
