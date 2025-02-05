import React, { useState } from "react";
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { registerUser } from "../../api/auth";

interface RegistrationModalProps {
  show: boolean;
  close: () => void;
  sign: (event: React.FormEvent<HTMLFormElement>) => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ show, close, sign }) => {
  const [ input, setInput ] = useState({
    username: "",
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

    if (input.username !== "" && input.login !== "" && input.password !== ""){
        registerUser(input.username, input.login, input.password);
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
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" name="username" value={input.username} placeholder="Введите name" required onChange={handleInput}/>
          </Form.Group>
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

export default RegistrationModal;