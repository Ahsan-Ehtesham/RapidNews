import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, published, author, source } =
    props;
  return (
    <div className="mt-3">
      <div className="card border-info" style={{ width: "auto" }}>
        <div className="card-header">{source}</div>
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://d2x51gyc4ptf2q.cloudfront.net/content/uploads/2021/09/08220732/PA.62283512.jpg"
          }
          className="card-img-top"
          alt={source}
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}...
            <span
              className="position-absolute top-0 translate-middle badge rounded-pill bg-info"
              style={{ zIndex: "1", left: "95%" }}
            >
              New
            </span>
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
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
        <div className="card-footer text-muted">
          {new Date(published).toGMTString()}
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
