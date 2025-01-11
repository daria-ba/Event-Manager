import React, { useState, useRef } from "react";
import { Button, Card, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import restaurant from "../../img/restaurant.svg"
import hiking from "../../img/hiking.svg"
import dice20 from "../../img/dice-d20.svg"
import city from "../../img/city.svg"
import ticket from "../../img/ticket-alt.svg"
import pc from "../../img/pc.png"
import conference from "../../img/conference.png"


const CategoriesElem = () => {
  const [categories] = useState([
    { id: 1, title: "рестораны", img: restaurant, link: '/' },
    { id: 2, title: "природа", img: hiking, link: '/' },
    { id: 3, title: "настольные игры", img: dice20, link: '/' },
    { id: 4, title: "бизнес", img: city, link: '/' },
    { id: 5, title: "концерты", img: ticket, link: '/' },
    { id: 6, title: "лекции", img: conference, link: '/' },
    { id: 7, title: "онлайн", img: pc, link: '/' },
  ]);

  return (
      <Container
        style={{
        overflowX: "auto",
        display: "flex",
        justifyContent: "center",
        gap: "5px",
        marginTop: "30px",
        paddingBottom: "10px",
      }}>
        {categories.map((categorie) => (
        <Link
            to={categorie.link}
            className="product-card-link"
            style={{
            height: "150px",
            width: "150px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            textDecoration: "none", // Убираем подчеркивание ссылки
            color: "inherit", // Наследуем цвет текста
            border: "1px solid transparent", // Граница для стиля
            borderRadius: "10px",
            padding: "15px",
            transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) =>
        (e.currentTarget.style.border = "1px solid #ccc") // Наведение
        }
        onMouseLeave={(e) =>
        (e.currentTarget.style.border = "1px solid transparent")
        }
        >
            <img
            src={categorie.img}
            alt={categorie.title}
            style={{
                maxHeight: "50px",
                maxWidth: "50px",
                border: "0px",
                // borderRadius: "50%",
                marginBottom: "10px",
            }}
            />
            <h5 style={{ fontSize: "1.2rem", textAlign: "center", margin: "0", overflow: "auto" }}>
            {categorie.title}
            </h5>
        </Link>
    ))}
    </Container>
  );
};

export default CategoriesElem;
