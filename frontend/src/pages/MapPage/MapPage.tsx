import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import FooterElem from "../../components/Footer/FooterElem";
import HeaderElem from "../../components/Navbar/HeaderElem";
import EventMap from "../MapPage/EventMap"
import FilterList from "./FilterList";
import ProductsView from "./ProductsView";

export type Category = {
  id: number;
  title: string;
  img: string;
  link: string;
}

export type Filter = {
  priceRange: number[];
  city: string[];
  date: string[];
  categories: string[];
};
  
export type Event = {
  id: number;
  name: string;
  price: number;
  city: string;
  date: string;
};

const MapPage: React.FC = () => {

  const [categories] = useState<Category[]>([
    { id: 1, title: "Рестораны", img: "", link: 'Рестораны' },
    { id: 2, title: "Природа", img: "", link: 'Природа' },
    { id: 3, title: "Квесты", img: "", link: 'Квесты' },
    { id: 4, title: "Бизнес", img: "", link: 'Бизнес' },
    { id: 5, title: "Концерты", img: "", link: 'Концерты' },
    { id: 6, title: "Лекции", img: "", link: 'Лекции' },
    { id: 7, title: "Онлайн", img: "", link: 'Онлайн' },
  ]);

  const [events] = useState([
    { id: 1, name: "Event 1", price: 0, city: "Санкт-Петербург", date: "Сегодня", category: "Природа", },
    { id: 2, name: "Event 2", price: 1000, city: "Москва", date: "Сегодня", category: "Квесты", },
    { id: 3, name: "Event 3", price: 2, city: "Москва", date: "Завтра", category: "Квесты", },
    { id: 4, name: "Event 4", price: 40, city: "Санкт-Петербург", date: "На этой неделе", category: "Онлайн",},
    { id: 5, name: "Event 5", price: 300, city: "Санкт-Петербург", date: "Завтра", category:"Рестораны", },
    { id: 6, name: "Event 6", price: 500, city: "Санкт-Петербург", date: "Завтра", category: "Концерты" },
  ]);

  const [filter, setFilter] = useState<Filter>(() => {
  const searchParams = new URLSearchParams(window.location.search);
  const categoriesParam = searchParams.get("categories");
  const initialCategories = categoriesParam ? categoriesParam.split(",") : [];

  return {
    priceRange: [0, 1000],
    city: [],
    date: [],
    categories: initialCategories,
  }
  });

  const filteredProducts = events.filter((event) => { 
    const matchesCategory =
    filter.categories.length === 0 || filter.categories.includes(event.category);

    const [min, max] = filter.priceRange.length >= 2 ? filter.priceRange : [0, Infinity];
    const matchesPrice =
    event.price >= min && event.price <= max;

    const matchesCity =
    filter.city.length === 0 || filter.city.includes(event.city)

      const matchesDate =
      filter.date.length === 0 || filter.date.includes(event.date);
    return matchesCategory && matchesPrice && matchesCity && matchesDate;
  });
  console.log(filter);

  return (
    <div className="m-0 p-0">
      <HeaderElem />
      <Container fluid className="mt-4">
        <Row className="mb-3">
          <Col xs={12}>
            <h3 className="text-right">События в Москве и Санкт-Петербурге</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} lg={2} className="mb-3">
            <FilterList categories={categories} filters={filter} setFilters={setFilter} />
          </Col>
          <Col xs={12} md={4} lg={4} className="mb-3">
            <ProductsView filteredProducts={filteredProducts} filters={filter} />
          </Col>
          <Col lg={5} className="d-none d-md-block mb-3"
          style={{
            marginLeft: "auto",
          }}>
            <EventMap />
          </Col>
        </Row>
      </Container>
      <FooterElem />
    </div>
  )
}

export default MapPage;