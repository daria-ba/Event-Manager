import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";


const FooterElem: React.FC = () => {
  return (
    <Container
      fluid
      className="footer text-center text-white p-0 m-0"
      style={{
        flexShrink: 0,
        marginTop: "auto",
        padding: "0px",
        backgroundColor: "rgba(66, 66, 66, 0.9)",
      }}
    >
      <h3>Contacts</h3>
      <p>Email: <Link to="mailto:name@example.com">name@example.com</Link></p>
      <h3>Social</h3>
      <Link to="github.com">repo</Link>
    </Container>
  )
};

export default FooterElem;