import React from "react";
import { Container } from 'react-bootstrap';
import HeaderElem from "../../components/Navbar/HeaderElem";
import MyCalendar from "./MyCalendar";
import FooterElem from "../../components/Footer/FooterElem";
import ImageCarousel from './ImageCarousel'
import CardElem from "./CardElem";
import PlacesCarousel from "./PlacesCarousel";
import CategoriesElem from "./CategoriesElem"


const GeneralPage: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* <header className=""> */}
        <HeaderElem />
      {/* </header> */}

      {/* <main className="main-content"> */}
        <MyCalendar />
        <ImageCarousel />
        <section className="product-section">
          <Container fluid className="m-4 p-4">
            <CategoriesElem />
            <CardElem />
          </Container>
          <Container fluid className="locations">
            <PlacesCarousel />
          </Container>
        </section>
      {/* </main> */}
      <FooterElem />
    </div>
  )
};

export default GeneralPage;