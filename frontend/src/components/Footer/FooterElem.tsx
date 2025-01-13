import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";


const FooterElem: React.FC = () => {

    return (
        <Container
            fluid
            className="text-center text-white p-0 m-0"
            style={{
                textDecoration: "none",
                backgroundColor: 'rgba(66, 66, 66, 0.9)',
            }}
        >
            <div>
                <div>
                <h3>Contacts</h3>
                <p>Email: <Link to="mailto:name@example.com">name@example.com</Link></p>
                </div>
                <div>
                    <h3>Social</h3>
                    <Link to="github.com">repo</Link>
                </div>
                <form></form>
            </div>
        </Container>
    )
};

export default FooterElem;