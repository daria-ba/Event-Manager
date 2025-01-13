import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Form, FormControl, Button, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginModal from "../Auth/LoginModal";
import search from '../../img/search.png'

const HeaderElem: React.FC = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [scrolled, setScrolled] = useState(false);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Логин отправлен!");
    handleClose();
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

return (
  <Navbar
  expand="lg"
  fixed="top"
  className={`navbar-static ${scrolled ? 'navbar-fixed' : 'transparent'}`}
  style={{
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    transition: 'background-color 0.3s ease',
    zIndex: 1000,
    position: scrolled ? 'fixed' : 'static',
    top: 0,
    width: '100%'
  }}
>
  <Container>

    <Navbar.Brand as={Link} to="/" className="">
      Event Manager
    </Navbar.Brand>

    <div className="d-flex d-md-none">
      <Button variant="" onClick={() => alert("Search button clicked!")}>
        <img
          src={search}
          alt="Search"
          style={{ width: '20px', height: '20px' }}
        />
      </Button>
    </div>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end gap-2">
      <Nav className="align-items-center">
        <Form className="search-bar d-none d-md-flex">
          <InputGroup>
            <FormControl
              type="search"
              placeholder="Search"
              aria-label="Search"
              className="rounded-pill"
              style={{ paddingLeft: '40px', height: '40px' }}
            />
            <img
              src={search}
              alt="Search"
              onClick={() => alert("Icon clicked!")}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '20px',
                height: '20px',
                cursor: 'pointer',
              }}
            />
          </InputGroup>
        </Form>

        <div className="d-flex flex-lg-row flex-column gap-2">
          <Button className="custom-button" onClick={handleShow}>
            Добавить событие
          </Button>
          <Button className="custom-button" onClick={handleShow}>
            Войти
          </Button>
          <Button variant="custom" className="custom-button" onClick={handleShow}>
            Зарегистрироваться
          </Button>
        </div>
      </Nav>
    </Navbar.Collapse>
  </Container>
  
  <LoginModal show={show} close={handleClose} login={handleLogin} />
</Navbar>
)
};

export default HeaderElem;