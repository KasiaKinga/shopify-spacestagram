import React, { useState, useEffect, Fragment } from "react";
import { Dimmer, Loader } from "semantic-ui-react";
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
        (item) => item.media_type === "image"
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
        <React.Fragment style={{ height: "100vh" }}>
          <Dimmer active inverted>
            <Loader size="large">Loading</Loader>
          </Dimmer>
        </React.Fragment>
      );
    }
  };

  return (
    <Fragment>
      <header>
        <h1>spacestagram</h1>
      </header>
      <main>
        {/* when container is loading - waiting for new content aria-busy is true */}
        <section
          aria-live="polite"
          aria-busy={allImages.length ? "false" : "true"}
        >
          {renderContent()}
        </section>
      </main>
    </Fragment>
  );
};

export default App;
