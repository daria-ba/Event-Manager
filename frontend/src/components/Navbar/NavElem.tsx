import React from "react";
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavElem: React.FC = () => {
    return (
        <Navbar className="d-none d-md-block"
          style={{
            backgroundColor: 'rgba(66, 66, 66, 0.9)',
            fontWeight: 'bold',
          }}
        >
        <Container>
        {/* <Navbar.Brand href="#">Общая</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto w-100 d-flex justify-content-between text-uppercase text-white">
            <Nav.Link href="#home">Все</Nav.Link>
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle 
                as={Nav.Link} 
                id="dropdown-art-theatre" 
                className="text-white" 
                style={{ border: 'none' }}
              >
                Развлечения
              </Dropdown.Toggle>

              <Dropdown.Menu align="end">
                <Dropdown.Item href="#details1">Детали 1</Dropdown.Item>
                <Dropdown.Item href="#details2">Детали 2</Dropdown.Item>
                <Dropdown.Item href="#details3">Детали 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle 
                as={Nav.Link} 
                id="dropdown-art-theatre" 
                className="text-white" 
                style={{ border: 'none' }}
              >
                Искусство и театр {/* Стрелка вниз */}
              </Dropdown.Toggle>

              <Dropdown.Menu align="end">
                <Dropdown.Item href="#details1">Детали 1</Dropdown.Item>
                <Dropdown.Item href="#details2">Детали 2</Dropdown.Item>
                <Dropdown.Item href="#details3">Детали 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/* <Nav.Link href="#art&theatre">Искусство и театр</Nav.Link> */}
            <Nav.Link href="#restaurants">Рестораны и бары</Nav.Link>
            <Nav.Link href="#quests">Квесты</Nav.Link>
            <Nav.Link href="#business">Бизнес</Nav.Link>
            <Nav.Link href="#festivals">Фестивали</Nav.Link>
            <Nav.Link href="#kids">Для детей</Nav.Link>
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle 
                as={Nav.Link} 
                id="dropdown-art-theatre" 
                className="text-white" 
                style={{ border: 'none' }}
              >
                Остальное {/* Стрелка вниз */}
              </Dropdown.Toggle>

              <Dropdown.Menu align="end">
                <Dropdown.Item href="#details1">Детали 1</Dropdown.Item>
                <Dropdown.Item href="#details2">Детали 2</Dropdown.Item>
                <Dropdown.Item href="#details3">Детали 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavElem;