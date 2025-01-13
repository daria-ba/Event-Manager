import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Carousel from "react-bootstrap/Carousel";
import background from '../../img/joy.png'
import { Container, Carousel, Row, Col, Image, Figure, Modal, Button, Card } from "react-bootstrap";
import party from "../../img/party.jpg"

const CardElem = () => {

    const [products] = useState([
      { id: 1, title: "Product 1", description: "Description 1" },
      { id: 2, title: "Product 2", description: "Description 2" },
      { id: 3, title: "Product 3", description: "Description 3" },
      { id: 4, title: "Product 4", description: "Description 4" },
      { id: 5, title: "Product 5", description: "Description 5" },
      { id: 6, title: "Product 6", description: "Description 6" },
      { id: 7, title: "Product 7", description: "Description 7" },
      { id: 8, title: "Product 8", description: "Description 8" },
    ]);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return(
    <Container className="">
      <span>Популярные мероприятия</span>
        <Container
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          margin: '0',
          paddingBottom: "40px",
          gap: "16px",
          color: 'black',
        }}
        >
      {products.map((product) => (
              <Card className="h-100">
                <Card.Body>
                  <Image
                    src={party}
                    alt="popular"
                    className="img-fluid mb-3"
                    style={{ maxHeight: "150px", objectFit: "cover" }}
                  />
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                </Card.Body>
              </Card>
          ))}
      </Container>
      <div className="d-flex justify-content-center">
        <Button variant="custom" className="custom-button">Посмотреть все мероприятия месяца</Button>
      </div>
  </Container>
  )
};

export default CardElem;