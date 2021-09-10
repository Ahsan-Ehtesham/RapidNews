import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

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

  capitalize=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title=`RapidNews- ${this.capitalize(this.props.category)}`
  }

  async updateNews(pageNo) {
    const apiUrl = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=9b3b737ef7234962891f9cbaee4453ba&country=${this.props.country}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });
    const fetchText = async (url) => {
      const response = await fetch(url);
      return await response.json();
    };

    fetchText(apiUrl).then((text) => {
      this.setState({
        articles: text.articles,
        totalResults: text.totalResults,
        loading: false,
      });
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

  render() {
    return (
      <div className="container my-3">
        <h1 className="display-5 text-center my-3">{`RapidNews - Top ${this.capitalize(this.props.category)} Headlines`}</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
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
        <div className="mt-3 d-flex justify-content-between text-white">
          <button
            type="button"
            className="btn btn-info"
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-outline-info"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
