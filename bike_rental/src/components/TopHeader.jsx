import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from "react-router-dom";
//const myImage = require('../assets/images/sale1.jpg');
const TopHeader = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className=''>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          
          <Navbar.Brand  style={{ color: '#fff', fontFamily: 'Cursive' }}>BIKE RENTAL</Navbar.Brand>
          {/* <Navbar.Brand href="Bike_Owner_Db" style={{ color: '#fff', fontFamily: 'Cursive' }}>BIKE RENTAL</Navbar.Brand> */}
          <Nav className="me-end">

            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                <Nav.Link href="" className='register' style={{ color:"#fff" }}>REGISTRATION</Nav.Link>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="Regist">Bike Owner</Dropdown.Item>
                <Dropdown.Item href="CustomerRegister">Customer</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                <Nav.Link href="" className='register' style={{ color:"#fff" }}>LOGIN</Nav.Link>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="Login">Bike Owner</Dropdown.Item>
                <Dropdown.Item href="CLogin">Customer</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                <Nav.Link href="AboutUs" className='register' style={{ color:"#fff" }}>ABOUT US</Nav.Link>
              </Dropdown.Toggle>
            {/* <Dropdown variant="dark" id="dropdown-basic">
              <Nav.Link href="AboutUs" style={{ color:"#fff" }}>ABOUT US</Nav.Link>
            </Dropdown> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
     <div>
     {/* <img src={myImage} alt="My Image" /> */}
   </div>
   </>
  )
}

export default TopHeader