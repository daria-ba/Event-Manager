import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import restaurant from "../../img/restaurant.svg"
import hiking from "../../img/hiking.svg"
import dice20 from "../../img/dice-d20.svg"
import city from "../../img/city.svg"
import ticket from "../../img/ticket-alt.svg"
import pc from "../../img/pc.png"
import conference from "../../img/conference.png"


const CategoriesElem : React.FC = () => {
  const [categories] = useState([
    { id: 1, title: "рестораны", img: restaurant, link: '/restaurant' },
    { id: 2, title: "природа", img: hiking, link: '/nature' },
    { id: 3, title: "настольные игры", img: dice20, link: '/' },
    { id: 4, title: "бизнес", img: city, link: '/business' },
    { id: 5, title: "концерты", img: ticket, link: '/concerts' },
    { id: 6, title: "лекции", img: conference, link: '/lections' },
    { id: 7, title: "онлайн", img: pc, link: '/online' },
  ]);

  return (
      <Container
        style={{
        overflowX: "auto",
        display: "grid",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
        gap: "5px",
        marginTop: "30px",
        paddingBottom: "10px",
      }}>
        {categories.map((categorie) => (
        <Link
            to={categorie.link}
            className="product-card-link"
        >
          <div
            className="categories-wrapper">
            <img
            src={categorie.img}
            alt={categorie.title}
            style={{
                height: "40%",
                width: "40%",
                objectFit: "contain",
            }}
            />
            </div>
            <h6 style={{ fontSize: "1.2rem", maxWidth: "100px", textAlign: "center", overflow: "auto", textWrap: "wrap" }}>
            {categorie.title}
            </h6>
        </Link>
    ))}
    </Container>
  );
};

export default CategoriesElem;
