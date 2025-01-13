import React, { useState, useRef } from "react";
import { Button, Card, Container, Image, Row, Col} from "react-bootstrap";
import party from "../../img/party.jpg"

const PlacesCarousel = () => {
  const [products] = useState([
    { id: 1, title: "Place 1", description: "Description 1", img: "" },
    { id: 2, title: "Place 2", description: "Description 2", img: "" },
    { id: 3, title: "Place 3", description: "Description 3", img: "" },
    { id: 4, title: "Place 4", description: "Description 4", img: "" },
    { id: 5, title: "Place 5", description: "Description 5", img: "" },
    { id: 6, title: "Place 6", description: "Description 6", img: "" },
  ]);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <Container>
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        // gap: "16px",
      }}>
    <span style={{ fontSize: "1.25rem", fontWeight: "bold" }}><h3>Популярные площадки</h3></span>
    <div>
      <Button
        variant="custom"
        className="carousel-control-prev-icon"
        onClick={scrollLeft}
      >
      </Button>
      <Button
      variant="custom"
        className="carousel-buttons button carousel-control-next-icon"
        onClick={scrollRight}
      >
      </Button>
    </div>
    </div>
  {/* </div> */}
      {/* Карусель */}
      <div
        className="carousel-wrapper d-flex"
        ref={scrollRef}
        style={{
          overflowX: "auto",
          display: "flex",
          gap: "16px",
          scrollBehavior: "smooth",
          paddingBottom: "10px",
          marginTop: "20px",
        }}
      >
        {products.map((product) => (
          <Card
            key={product.id}
            className="product-card"
            style={{
              // minWidth: "200px",
              // height: "300px",
              flex: "0 0 auto",
            }}
          >
            <Card.Body className="p-0">
              <Card.Img src={party} style={{
                maxHeight: '200px',
                margin: "0px",
              
              }}></Card.Img>
              <Card.Title><h2>{product.title}</h2></Card.Title>
              <Card.Text>{product.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default PlacesCarousel;
