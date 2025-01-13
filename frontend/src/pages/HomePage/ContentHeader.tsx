import React from "react";
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import background from '../../img/joy.png'

const ContentHeader: React.FC = () => {

    return (
        // <div className="w-100">
        <Container fluid className="bg-dark text-white p-5 m-0"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover', // Заполняет контейнер
            backgroundPosition: 'center', // Центрирует изображение
            backgroundRepeat: 'repeat', // Не повторяет изображение
            // filter: 'grayscale(100%) brightness(0.3)',
          }}>
        <div className="fw-bold fs-1">
            <span>События в твоём городе!</span>
        </div>
        <Button variant="secondary" className="">Подписаться на события</Button>
        </Container>
        // </div>
    )
};

export default ContentHeader;