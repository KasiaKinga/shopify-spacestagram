import React from "react";
import ImageItem from "./ImageItem";
import StackGrid from "react-stack-grid";

const ImageList = (props) => {
  const imagesList = props.images.map((image, idx) => {
    return (
      <ImageItem image={image} key={idx} className="image-item" />
    );
  });

  return (
    <StackGrid
      columnWidth={320}
      style={{
        width: "100%",
      }}
      gutterWidth={20}
      gutterHeight={17}
      monitorImagesLoaded
    >
      {imagesList}
    </StackGrid>
  );
};

export default ImageList;
