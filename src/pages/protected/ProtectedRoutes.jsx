import React from "react";
import { Row } from "react-bootstrap";
import { Outlet, Navigate, useNavigate } from "react-router-dom";


const ProtectedRoutes = ()=>{
    const handleRedirect = ()=>{
        navigate('/login')
    }
    const auth = {"token" : true}
   
    const navigate = useNavigate()
    
    return (
         auth?.token ? <Outlet/> : <Navigate to='/login'/>
       
    )

}
export default ProtectedRoutes;