import React from "react";
import { Modal, Button, Form } from 'react-bootstrap';

interface LoginModalProps {
  show: boolean;
  close: () => void;
  login: (event: React.FormEvent<HTMLFormElement>) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ show, close, login }) => {
  return (
    <Modal show={show} onHide={close} centered>
      <Modal.Header closeButton>
        <Modal.Title>Quick Sign In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={login}>
          <Form.Group className="mb-3" controlId="formBasicLogin">
            <Form.Label>Logn</Form.Label>
            <Form.Control type="login" placeholder="Введите логин" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password" placeholder="Введите пароль" required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Войти
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;