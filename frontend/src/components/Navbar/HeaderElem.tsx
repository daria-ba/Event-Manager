import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import LoginPage from "../LoginModal";
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
      // Проверяем, прокручена ли страница больше чем на 50px
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
    // border: '3px',
    position: scrolled ? 'fixed' : 'static',
    top: 0,
    width: '100%'
  }}
>
  <Container>
    {/* Логотип */}
    <Navbar.Brand as={Link} to="/" className="">
      Event Manager
    </Navbar.Brand>

    {/* Кнопка поиска для мобильных устройств */}
    <div className="d-flex d-md-none">
      <Button variant="" onClick={() => alert("Search button clicked!")}>
        <img
          src={search}
          alt="Search"
          style={{ width: '20px', height: '20px' }}
        />
      </Button>
    </div>

    {/* Тоггл для меню */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    {/* Основное меню */}
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end gap-2">
      <Nav className="align-items-center">
        {/* Поисковая строка (только для десктопа) */}
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

        {/* Кнопки меню */}
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

  {/* Модальное окно для входа */}
  <LoginModal show={show} close={handleClose} login={handleLogin} />
</Navbar>
)
};

export default HeaderElem;