import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "./sideBar";
import TopBar from "./topBar";
import Style from './dashboard.module.css';


export default function Dashboard() {
    return (
        <Container fluid className="d-flex flex-column min-vh-100 p-0 m-0">
            {/* side bar */}

            <SideBar />
            {/* Dashboard */}
            <div className="bg-danger p-0 m-0" >
                {/* top bar */}
                <TopBar />
                <Row className={`${Style.row1} w-100 m-0 d-flex align-items-center justify-content-center`} style={{ minHeight: '80vh' }}>
                    <Col xs={6} className="">
                        <h3 style={{ fontFamily: 'hanoble', fontSize: '3.5em' }} className="text-light text-start w-100">We are the new face <br /> of grocery shopping.</h3>
                        <p className="text-secondary text-start w-50 p-0 m-0" style={{ fontFamily: 'montserrat' }}>
                            Welcome to our online grocery store, your one-stop-shop for all your
                            grocery needs. We offer a wide variety of fresh produce, pantry
                            essentials, household items, and more, all available at your
                            fingertips from the comfort of your own home.
                        </p>
                    </Col>
                    <Col xs={4} className="text-light">
                        <div className="rounded bg-white shadow-sm" style={{ minHeight: '30em', minWidth: 'em' }}>

                        </div>
                    </Col>
                </Row>

                <Row className="bg-primary m-0 mt-3 mb-2" style={{ minHeight: '15em', padding: '10%' }}>

                </Row>

                <Row className="bg-primary m-0 mt-3 mb-2" style={{ minHeight: '15em', padding: '10%' }}>
                    sfgsdgfdssadsadasdsadsadasdasdsadasdadasdadsas
                </Row>

                <Row className="bg-primary m-0 mt-3 mb-2" style={{ minHeight: '15em', padding: '10%' }}>
                    sfgsdgfdssadsadasdsadsadasdasdsadasdadasdadsas
                </Row>

                <Row className="bg-primary m-0 mt-3 mb-2" style={{ minHeight: '15em', padding: '10%' }}>
                    sfgsdgfdssadsadasdsadsadasdasdsadasdadasdadsas
                </Row>

                <Row className="bg-primary m-0 mt-3 mb-2" style={{ minHeight: '15em', padding: '10%' }}>
                    sfgsdgfdssadsadasdsadsadasdasdsadasdadasdadsas
                </Row>

                <Row className="bg-primary m-0 mt-3 mb-2" style={{ minHeight: '15em', padding: '10%' }}>
                    sfgsdgfdssadsadasdsadsadasdasdsadasdadasdadsas
                </Row>

                <Row className="bg-primary m-0 mt-3 mb-2" style={{ minHeight: '15em', padding: '10%' }}>
                    sfgsdgfdssadsadasdsadsadasdasdsadasdadasdadsas
                </Row>

                <Row className="bg-primary m-0 mt-3 mb-2" style={{ minHeight: '15em', padding: '10%' }}>
                    sfgsdgfdssadsadasdsadsadasdasdsadasdadasdadsas
                </Row>

                <Row className="bg-primary m-0 mt-3 mb-2" style={{ minHeight: '15em', padding: '10%' }}>
                    sfgsdgfdssadsadasdsadsadasdasdsadasdadasdadsas
                </Row>
                <Row className="bg-primary m-0 mt-3" style={{ minHeight: '20em' }}>
                    sfgsdgfdssadsadasdsadsadasdasdsadasdadasdadsas
                </Row>

            </div>

        </Container>
    )
}