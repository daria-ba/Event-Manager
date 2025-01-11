import React, { useState } from "react";
import { Container, Row, Col, Image, Figure, Modal, Button, Card } from 'react-bootstrap';
import HeaderElem from "../../components/Navbar/HeaderElem";
import MyCalendar from "./MyCalendar";
import FooterElem from "../../components/Footer/FooterElem";
import ImageCarousel from './ImageCarousel'
import CardElem from "./CardElem";
import PlacesCarousel from "./PlacesCarousel";
import CategoriesElem from "./CategoriesElem"


const GeneralPage: React.FC = () => {
    return (
      <div className="page-wrapper">
      <header className="header m-0 p-0 w-100">
      <HeaderElem />
    </header>

  <main className="main-content">
      <MyCalendar />
      <ImageCarousel />
    <section className="product-section">
      <Container fluid className="m-4">
        <CategoriesElem />
        <CardElem />
      </Container>
      <Container fluid className="locations">
        <PlacesCarousel />
        </Container>
    </section>
  </main>

  <footer className="footer">
    <Container fluid className="p-0">
      <FooterElem />
    </Container>
  </footer>
  </div>
    )
};

export default GeneralPage;