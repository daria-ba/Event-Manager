import React from "react";
import { Tabs, Tab } from "react-bootstrap";


const TabElem: React.FC = () => {
    return (
        <div>
            <Tabs
            defaultActiveKey="profile"
            id="justify-tab-example"
            className="mb-3 mt-5"
            justify
            >
                <Tab eventKey="my-events" title="Мои мероприятия">
                    Мои мероприятия
                </Tab>
                <Tab eventKey="want-to-visit" title="Избранное">
                    Избранное
                </Tab>
            </Tabs>
        </div>
    );
};

export default TabElem;