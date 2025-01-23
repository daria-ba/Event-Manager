import React from "react";
import { Container, Col, Row, Image, Button } from "react-bootstrap";

const UserElem: React.FC = () => {

    return (
        <div>
            <Container>
                <Row className="">
                    <Col><Image src="img"></Image></Col>
                    <Col>
                        <div>Information</div>
                        <div><Button className="custom-button">Change profile</Button></div></Col>
                </Row>
            </Container>
        </div>
    );
};

export default UserElem;