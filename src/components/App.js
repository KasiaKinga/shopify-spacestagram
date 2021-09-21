import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Segment, Dimmer, Loader, Image, Header } from "semantic-ui-react";
import nasa from "../api/nasa";
import ImageList from "./ImageList";


const START_DATE =  "2021-08-15";
const END_DATE =  "2021-09-10";

const App = () => {
  const [allImages, setAllImages] = useState("");
  console.log(allImages)
  useEffect(() => {
    const getImages = async () => {
      const response = await nasa.get("/planetary/apod", {
        params: {
          start_date: START_DATE,
          end_date: END_DATE,
        },
      });
      const filteredImages = response.data.filter(item => item.media_type !== "video")
      setAllImages(filteredImages);
    };
    getImages();
  }, []);

  if (allImages.length) {
    return (
      <Container 
        textAlign="center" 
        style={{
          // border: "2px solid red",
          width: "80%",
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
          // textAlign: "center"
          // margin: "10px",
          // padding: "10px"
          
      }}>
        <Segment>
          <Header h3="h3">Spacestagram</Header>
        </Segment>
        <ImageList images={allImages} />
      </Container>
    );
  } else {
    return (
    <Segment style={{height: "100vh"}}>
      <Dimmer active inverted>
        <Loader size='large'>Loading</Loader>
      </Dimmer>
      <Image src='/images/wireframe/short-paragraph.png' />
  </Segment>
  )
  }
};

export default App;
