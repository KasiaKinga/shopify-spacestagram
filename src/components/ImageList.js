import React from "react";
import ImageItem from "./ImageItem";
import StackGrid from "react-stack-grid";

const ImageList = (props) => {
  const imagesList = props.images.map((image, idx) => {
    return <ImageItem image={image} key={idx} className="image-item" />;
  });

  return (
    <StackGrid
      columnWidth={300}
      style={{
        width: "100%",
      }}
      gutterWidth={15}
      gutterHeight={28}
      monitorImagesLoaded
    >
      {imagesList}
    </StackGrid>
  );
};

export default ImageList;
