import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getEvents } from "../../api/events";

type Event = {
  id: number;
  title: string;
  description: string;
  date: string;
  price: number;
  place: string;
  category: string;
}

const CardElem: React.FC = () => {

  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    getEvents().then(setEvents);
  }, []);

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
      {events.map((event) => (
         <div key={event.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card 
              key={event.id}
              className="product-card m-3">
                <Card.Body className="p-0">
                  <Card.Img
                    src=""
                    alt="popular"
                  />
                  <Card.Title>{event.title}</Card.Title>
                  <Card.Text>
                  <p>{event.description}</p>
                  <p>{event.place}</p>
                  <p>{event.price}</p>
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