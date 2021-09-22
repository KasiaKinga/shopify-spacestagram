import React, { useState, Fragment } from "react";
import { Icon } from "semantic-ui-react";
import "./ImageItem.css";

const ImageItem = ({ image }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Fragment>
      <div className="card-container">
        <img
          src={image.url}
          alt={`Image of ${image.title} - ${image.explanation}`}
        />
        <h2>{image.title}</h2>
        <p className="date">{image.date}</p>
        <button
          aria-label={`Like ${image.title}`}
          onClick={() => setIsLiked(!isLiked)}
        >
          <Icon
            aria-hidden="true"
            name={isLiked ? "heart" : "heart outline"}
            size="big"
            color={isLiked ? "red" : "grey"}
            heart
          />
        </button>
      </div>
    </Fragment>
  );
};

export default ImageItem;
