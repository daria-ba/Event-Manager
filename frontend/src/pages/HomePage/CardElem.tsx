import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardElem: React.FC = () => {

  const [products] = useState([
    { id: 1, img: "", title: "Product 1", description: { location: "location 1", time: "time 1", price: "0$"} },
    { id: 2, img: "", title: "Product 2", description: { location: "location 2", time: "time 2", price: "0$"} },
    { id: 3, img: "", title: "Product 3", description: { location: "location 3", time: "time 3", price: "0$"} },
    { id: 4, img: "", title: "Product 4", description: { location: "location 4", time: "time 4", price: "0$"} },
    { id: 5, img: "", title: "Product 5", description: { location: "location 5", time: "tim 5", price: "0$"} },
    { id: 6, img: "", title: "Product 6", description: { location: "location 6", time: "time 6", price: "0$"} },
    { id: 7, img: "", title: "Product 7", description: { location: "location 7", time: "time 7", price: "0$"} },
    { id: 8, img: "", title: "Product 8", description: { location: "location 8", time: "time 8", price: "0$"} },
  ]);

  return(
    <Container>
      <span><h3>Популярные мероприятия</h3></span>
        <Container
        className="row"
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          paddingBottom: "40px",
          color: 'black',
        }}
        >
      {products.map((product) => (
         <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card 
              key={product.id}
              className="product-card m-3">
                <Card.Body className="p-0">
                  <Card.Img
                    src={product.img}
                    alt="popular"
                  />
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                  <p>{product.description.location}</p>
                  <p>{product.description.time}</p>
                  <p>{product.description.price}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
              </div>
          ))}
      </Container>
      <div className="d-flex justify-content-center">
        <Link to={"/map"}>
        <Button variant="secondary">Посмотреть все мероприятия месяца</Button>
        </Link>
      </div>
  </Container>
  )
};

export default CardElem;