import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

interface RegistrationModalProps {
  show: boolean;
  close: () => void;
  sign: (event: React.FormEvent<HTMLFormElement>) => void;
}

const SigninModal: React.FC<RegistrationModalProps> = ({show, close, sign}) => {
    return (
        <Modal show={show} onHide={close} centered>
          <Modal.Header closeButton>
            <Modal.Title>Quick Sign In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={sign}>
              <Form.Group className="mb-3" controlId="formBasicLogin">
                <Form.Label>Logn</Form.Label>
                <Form.Control type="login" placeholder="Введите логин" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" placeholder="Введите пароль" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Повторите пароль</Form.Label>
                <Form.Control type="password" placeholder="Повторите пароль" required />
              </Form.Group>
              <Button variant="primary" type="submit">
                Зарегистрироваться
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
    )
};

export default SigninModal;