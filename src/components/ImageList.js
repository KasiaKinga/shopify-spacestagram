import React from "react";
// import "./ImageList.css"
import ImageItem from "./ImageItem";
import { Grid } from "semantic-ui-react";
import StackGrid from "react-stack-grid";

const ImageList = (props) => {
  const imagesList = props.images.map((image, idx) => {
    return (
      // <Grid.Column>
      <ImageItem image={image} key={idx} className="image-item" />

      // </Grid.Column>
    );
  });

  // return <Segment textAlign="center">{imagesList}</Segment>;
  // return <Segment itemsPerRow={4}>{imagesList}</Segment>;
  return (
    // <React.Fragment style={{border: "2px solid green"}}>
    <StackGrid
      columnWidth={320}
      style={{
        // backgroundColor: "blue",
        // padding: "10px",
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
        width: "100%",
      }}
      gutterWidth={20}
      gutterHeight={17}
      monitorImagesLoaded
    >
      {imagesList}
    </StackGrid>
    // </React.Fragment>
    // <Grid verticalAlign='middle' columns={2} centered>
    //   <Grid.Row>
    //     {imagesList}
    //   </Grid.Row>
    // </Grid>
    // <div className="image-list">{imagesList}</div>
  );
};

export default ImageList;
