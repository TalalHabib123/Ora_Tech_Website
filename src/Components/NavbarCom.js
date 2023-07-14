import React from "react";
import "popper.js";
import './Style.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarCom()
{
    return(
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark" fixed='top'>
          <Container>
            <Navbar.Brand className='company' href="#home">Ora Tech Systems</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='navbar'>
              <Nav className='mx-auto'>
                <Nav.Link href="#home">Company Insights</Nav.Link>
                <Nav.Link href="#link">Services</Nav.Link>
                <Nav.Link href="#link">Our Journey</Nav.Link>
                <Nav.Link href="#link">Clientele</Nav.Link>
                <Nav.Link href="#link">Career</Nav.Link>
                <Nav.Link href="#link">Contact Us</Nav.Link>
                <Nav.Link href="#link">Company Policy</Nav.Link>
                <Nav.Link href="#link">Company Profile</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}

export default NavbarCom;