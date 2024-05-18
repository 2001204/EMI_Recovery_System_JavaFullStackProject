import React from "react";
import { Container, Nav, Navbar, Toast } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";

import { Button } from 'react-bootstrap';


export default function UserNavigationbar() {

  //const history = useHistory();
  const logout = (event) => {
    localStorage.clear();
    event.preventDefault();
    window.location.href = '/';
    //history.push('/login');
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

            <LinkContainer to="/Addcustomer">
              <Nav.Link> Add customer</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/Alluser">
              <Nav.Link>Track Status </Nav.Link>
            </LinkContainer>

            {/* <LinkContainer to="/Bankdetailss">
              <Nav.Link>Bank Details </Nav.Link>
            </LinkContainer> */}


            <Button className="btn-success me-10 " onClick={logout}>Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
