import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";


export default function AdminNavigationbar() {


  const logout = () => {

    localStorage.clear();
    window.location.href = '/';

  }


  return (



    <Navbar expand="lg" className="bg-body-tertiary sticky-top" >
      <Container>
        <Navbar.Brand href="#home">EMI Recovery System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <LinkContainer to="/">
              <Nav.Link >Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/telecaller">
              <Nav.Link>Employee List</Nav.Link>
            </LinkContainer>


	  <LinkContainer to="/assignwork">
              <Nav.Link>Assign Work to telecaller</Nav.Link>
            </LinkContainer>	


            {/* <LinkContainer to="/CustomerRegistration">
              <Nav.Link>Add Bank</Nav.Link>
            </LinkContainer> */}

            <LinkContainer to="/Bankdetailss">
              <Nav.Link>Bank Details </Nav.Link>
            </LinkContainer>

            <LinkContainer to="../ServiceCenterRegsitration">
              <Nav.Link>Add telecaller</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/ViewContact">
              <Nav.Link>View Contact</Nav.Link>
            </LinkContainer>

            <Button className="btn-success me-10 " onClick={logout}>Logout</Button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
