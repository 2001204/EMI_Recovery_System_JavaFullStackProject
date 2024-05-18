
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Snav() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top">
      <Container>
        <Navbar.Brand href="#home">👑 Telecaller Panel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/Homee">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/DeleteCustomer">
              <Nav.Link>Delete Customer</Nav.Link>
            </LinkContainer>

            <LinkContainer to="../Alluser">
              <Nav.Link>Update Work</Nav.Link>
            </LinkContainer>

            {/* <LinkContainer to="/telecallerdet">
              <Nav.Link>Register Details</Nav.Link>
            </LinkContainer> */}

          </Nav>
          <Button className="btn-success me-2" onClick={logout}>
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
