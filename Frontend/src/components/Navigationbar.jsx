import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

export function Navigationbar() {
  return (
  
    <Navbar expand="lg" className="bg-body-tertiary sticky-top">
      <Container>
        <Navbar.Brand href="#home">EMI Recovery System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/services">
              <Nav.Link>Services</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/about">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contact">
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>

            <NavDropdown title="Login" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Adminlogin">
                Agency Login
              </NavDropdown.Item>
              <NavDropdown.Item href="/BankLogin">Bank Login</NavDropdown.Item>

              <NavDropdown.Item href="/ServiceCenterLogin">Telecaller Login</NavDropdown.Item>
              <NavDropdown.Item href="/SadminLogin">Super Admin Login</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
