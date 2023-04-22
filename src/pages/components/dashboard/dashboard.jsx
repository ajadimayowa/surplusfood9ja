import React from "react";
import { Col, Container, Row } from "react-bootstrap";


export default function UserDashboard (){
    return(
        <Container fluid className="d-flex bg-danger min-vh-100 p-0 m-0">
            {/* side bar */}
            <Col xs={2} className="bg-primary">
                kkkk
            </Col>
            {/* Dashboard */}
            <Col xs={10}>
                {/* top bar */}
                <Row className="bg-secondary m-0">
main screen
                </Row>
            </Col>

        </Container>
    )
}