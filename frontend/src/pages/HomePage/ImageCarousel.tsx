import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import party from "../../img/party.png"
import conference from "../../img/conferences.png"
import yoga from "../../img/yoga.png"
import { Container, Carousel } from "react-bootstrap";

const ImageCarousel : React.FC = () => {
  return (
    <Container fluid className="rounded"
    style={{ borderRadius: "30px", maxWidth: "1300px" }}
    >
    <Carousel className="carousel" interval={3000} controls={false} indicators={true}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={party}
          alt="Первое изображение"
          style={{ maxHeight: "400px", objectFit: "cover", borderRadius: "30px" }}
        />
        <Carousel.Caption>
          <h3>Первый слайд</h3>
          <p>Описание первого слайда.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={conference}
          alt="Второе изображение"
          style={{ maxHeight: "400px", objectFit: "cover", borderRadius: "30px" }}
        />
        <Carousel.Caption>
          <h3>Второй слайд</h3>
          <p>Описание второго слайда.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={yoga}
          alt="Третье изображение"
          style={{ maxHeight: "400px", objectFit: "cover", borderRadius: "30px" }}
        />
        <Carousel.Caption>
          <h3>Третий слайд</h3>
          <p>Описание третьего слайда.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  );
};

export default ImageCarousel;
