import React, { useState } from "react";
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loginUser } from "../../api/auth";

interface LoginModalProps {
  show: boolean;
  close: () => void;
  login: (event: React.FormEvent<HTMLFormElement>) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ show, close, login }) => {
  const [ input, setInput ] = useState({
    login: "",
    password: "",
  });
  // const dispatch = useDispatch();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handlesubmit = (e: any) => {
    e.preventDefault();

    if (input.login !== "" && input.password !== ""){
      loginUser(input.login, input.password);
      console.log('handle login')
      
    }
  };

  return (
    <Modal show={show} onHide={close} centered>
      <Modal.Header closeButton>
        <Modal.Title>Quick Log In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handlesubmit}>
          <Form.Group className="mb-3" controlId="formBasicLogin">
            <Form.Label>Login</Form.Label>
            <Form.Control type="login" name="login" value={input.login} placeholder="Введите логин" required onChange={handleInput}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password" name="password" value={input.password} placeholder="Введите пароль" required onChange={handleInput}/>
          </Form.Group>
          <Button variant="primary" type="submit" >
            Войти
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;