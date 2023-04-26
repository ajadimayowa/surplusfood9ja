import React from "react";
import { Row,Col, InputGroup, Button } from "react-bootstrap";
import logo from '../../assets/images/logo.svg'
import { useNavigate } from "react-router-dom";


const TopBar = ({handleOnBoard})=>{
    const navigate = useNavigate();
    return(
        <div className=" d-flex w-100 bg-white shadow-sm m-0" style={{position:'fixed', minHeight:'4em', zIndex:1}}>
            <Col xs={3} className=" d-flex justify-content-center align-items-center">
                <img src={logo} height={24} alt="logo"/>
            </Col>
            <Col xs={9} className=" d-flex gap-2 justify-content-end align-items-center"
            >
                <div className="w-75 d-flex justify-content-end">
                    <ul className="d-flex flex-row">
                        {
                            Array(5).fill('').map((item, index)=><p></p>)
                        }
                    </ul>
                </div>
                <div className="w-75 d-flex justify-content-end">
                    <InputGroup className="d-flex rounded py-1 px-1 w-100 align-items-center gap-3" style={{minWidth:'20em',maxWidth:'20em', backgroundColor:'#F0F0F0'}} >
                    <input placeholder="Search..." className="bg-transparent px-3 border border-0" style={{minWidth:'17em', outline:'none',fontFamily:'Montserrat-Regular', color:'gray'}}/>
                    <i className="bi bi-search"></i>
                    </InputGroup>
                </div>
                <div className="w-50 d-flex justify-content-center">
                    <InputGroup className="d-flex justify-content-center align-items-center gap-3" style={{maxWidth:'15em'}} >
                    <Button  onClick={() => handleOnBoard()} className="px-3 text-secondary" variant="primary" style={{fontFamily:'Montserrat'}}>Sign in</Button>
                    </InputGroup>
                </div>
            </Col>
        </div>
    )

}
export default TopBar;