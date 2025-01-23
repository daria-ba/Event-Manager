import React, { useState } from "react";
import { Container } from "react-bootstrap";
import FooterElem from "../../components/Footer/FooterElem";
import HeaderElem from "../../components/Navbar/HeaderElem";
import UserElem from "./UserElem";
import TabElem from "./TabsElem";

export type User = {
    id: number;
    name: string;
    information: string;
    liked: number[];
    events: Event[];
  };

const ProfileElem: React.FC = () => {

    return (
        <div className="">
            <HeaderElem />
            <Container className="d-flex flex-column min-vh-100">
                <UserElem />
                <TabElem />
                </Container>
            <FooterElem />
        </div>

    );
};

export default ProfileElem;