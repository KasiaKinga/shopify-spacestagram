import React, {useState, useEffect, useRef} from "react";
import { Card, Image, Button, Icon } from "semantic-ui-react";

const ImageItem = ({ image }) => {
  const [isLiked, setIsLiked] = useState(false);
  // const [spans, setSpans] = useState(0);
  // const imageRef = useRef();

  // useEffect(() => {
  //   getSpans()
  // }, [])

  // const getSpans = () => {
  //   const height = imageRef.current.clientHeight;
  //   const spans = Math.ceil(height / 10) + 1;
  //   setSpans(spans)
  // }

  return (
    // <Card style={{gridRowEnd: `span ${spans}`}}>
    // style={{ gridRowEnd: `span ${this.state.spans}}
    <Card 
      style={{
        width: "30rem",
        borderRadius: "30px"
      }}
      >
        <Image src={image.url} />
      {/* <Card.Content> */}
        <Card.Header>{image.title}</Card.Header>
        <Card.Description>{image.date}</Card.Description>
      {/* </Card.Content> */}
      <Card.Content extra >

      

    <Button animated='vertical' color={isLiked ? "red" : "grey"} onClick={() => setIsLiked(!isLiked)}>
      <Button.Content hidden>{isLiked ? "Like" : "Like?"}</Button.Content>
      <Button.Content visible>
        <Icon name='heart' />
      </Button.Content>
    </Button>


      </Card.Content>
    </Card>
  );
};

export default ImageItem;
