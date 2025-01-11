import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Carousel from "react-bootstrap/Carousel";
import background from '../../img/joy.png'
import { Container, Carousel } from "react-bootstrap";

const ImageCarousel = () => {
  return (
    <Container fluid className="rounded"
    style={{ borderRadius: "30px", maxWidth: "1300px" }}
    >
    <Carousel className="carousel" interval={3000} controls={false} indicators={true}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={background}
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
          src={background}
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
          src={background}
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
