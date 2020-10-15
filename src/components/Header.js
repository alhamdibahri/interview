import React from 'react';
import logo from '../logo.png';
import { NavDropdown, Alert, Navbar, Nav } from 'react-bootstrap';

function Header(){
    const mystyle = {
        position: "absolute",
        left: "47%",
        marginLeft: "-50px !important",
        display: "block"
    };
    return(
    <div>
        <Navbar expand="lg">
        <Navbar.Brand href="#home" style={mystyle}>
          <img src={logo} width="120px" height="60px"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          </Nav>
          <p style={{ marginTop:'16px', marginLeft:'10px' }}>Language</p>
          <NavDropdown title="Select a language" id="basic-nav-dropdown" style={{ marginRight:'30px' }}>
              <NavDropdown.Item href="#action/3.1">Inggris</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Jepang
              </NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
      
        <Alert variant="warning" className="text-center"><b>You don't an account yet, please create a new account</b></Alert>
    </div>
    )
}

export default Header