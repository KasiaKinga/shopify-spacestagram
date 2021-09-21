import React, { useState, useEffect } from "react";
import { Segment, Dimmer, Loader, Image, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import nasa from "../api/nasa";
import ImageList from "./ImageList";

const START_DATE = "2021-08-15";
const END_DATE = "2021-09-20";

const App = () => {
  const [allImages, setAllImages] = useState("");
  
  useEffect(() => {
    const getImages = async () => {
      const response = await nasa.get("/planetary/apod", {
        params: {
          start_date: START_DATE,
          end_date: END_DATE,
        },
      });
      const filteredImages = response.data.filter(
        (item) => item.media_type !== "video"
      );
      setAllImages(filteredImages);
    };
    getImages();
  }, []);

  const renderContent = () => {
    if (allImages.length) {
      return <ImageList images={allImages} />;
    } else {
      return (
        <Segment style={{ height: "100vh" }}>
          <Dimmer active inverted>
            <Loader size="large">Loading</Loader>
          </Dimmer>
          <Image src="/images/wireframe/short-paragraph.png" />
        </Segment>
      );
    }
  };

  return (
    <React.Fragment>
      <Segment
        size="huge"
        textAlign="center"
        style={{ width: "100vw" }}
        color="violet"
      >
        <Header as="h1" className="name">
          Spacestagram
        </Header>
      </Segment>

      {renderContent()}
    </React.Fragment>
  );
};

export default App;
