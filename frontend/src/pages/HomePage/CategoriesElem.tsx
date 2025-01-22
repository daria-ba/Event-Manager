import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";


const CategoriesElem : React.FC = () => {
  const [categories] = useState([
    { id: 1, title: "Рестораны", link: 'Рестораны' },
    { id: 2, title: "Природа", link: 'Природа' },
    { id: 3, title: "Квесты", link: 'Квесты' },
    { id: 4, title: "Бизнес", link: 'Бизнес' },
    { id: 5, title: "Концерты", link: 'Концерты' },
    { id: 6, title: "Лекции", link: 'Лекции' },
    { id: 7, title: "Онлайн", link: 'Онлайн' },
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
      {categories.map((category) => (
        <Link
          to={`map?category=${encodeURIComponent(category.link)}`}
          className="product-card-link"
        >
          <div
            className="categories-wrapper"
            style={{
              textWrap: "wrap",
              textAlign: "center",
              fontSize: "1.2rem",
            }}>
              <h5>{category.title}</h5>
          </div>  
        </Link>
      ))}
    </Container>
  );
};

export default CategoriesElem;
