import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, published } = this.props;
    return (
      <div className="mt-3">
        <div className="card" style={{ width: "auto" }}>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://d2x51gyc4ptf2q.cloudfront.net/content/uploads/2021/09/08220732/PA.62283512.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary btn-sm"
            >
              Read More
            </a>
          </div>
          <div className="card-footer text-muted">{published}</div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
