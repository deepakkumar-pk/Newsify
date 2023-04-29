import React from "react";
import "../index.css";

function NewsItems(props) {
  const { title, description, imageUrl, newsUrl } = props;
  return (
    <>
      <div className="card">
        <img
          src={imageUrl}
          className="card-img-top"
          alt="..."
          style={{ width: "100%", height: "150px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} className="btn btn-sm btn-dark" target="_blank">
            Read more
          </a>
        </div>
      </div>
    </>
  );
}

export default NewsItems;
