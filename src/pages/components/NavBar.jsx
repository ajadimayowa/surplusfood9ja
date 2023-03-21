import React from "react"
import { Row } from "react-bootstrap"

const NavBarDefault = () => {
    return (
        <Row className='header d-flex mt-3 justify-content-end aligh-items-end bg-white m-0' style={{ maxHeight: '10em', minHeight: '6em' }}>
            <Col xs={2} className='d-flex p-0 m-0 justify-content-end align-items-center'>
                <img src={logo} className='ml-5' height={'30px'} />
            </Col>
            <Col xs={10} className='d-flex m-0 gap-3 justify-content-end align-items-center px-5' style={{ fontFamily: 'Montserrat-SemiBold' }}>
                <Button className='m-0 mr-5' onClick={() => navigate('/sign-up')}>Get started</Button>
                <Button variant="secondary" onClick={() => navigate('/login')}>Login</Button>

            </Col>
        </Row>
    )
}

export default NavBarDefault;