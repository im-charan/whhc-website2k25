import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/logo.png";
import { NavDropdown } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <Navbar.Brand href="/" style={{ display: "flex", alignItems: "center" }}>
          <img
            alt="Logo"
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
          <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px" }}>
            <span className="navbrand">WHHC</span>
            <small className="navbrandsubtext">
              SECURING THE CYBER WORLD ONE BYTE AT A TIME
            </small>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" style={{color: 'rgb(170, 170, 170)', borderColor: 'rgb(170, 170, 170)', backgroundColor: 'rgb(170, 170, 170)'}}/>
        </div>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="navlink" href="/photogallery">
              Events
            </Nav.Link>            
            <Nav.Link className="navlink" href="/team">
              Team
            </Nav.Link>
            {/* <Nav.Link className="navlink" href="/technozarre">
              Technozarre'25
            </Nav.Link> */}
            <NavDropdown title="Technozarre'25" id="basic-nav-dropdown" className="custom-dropdown">
              <NavDropdown.Item href="#action/3.1" className="navlink">Technical</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="navlink">Non-Technical</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="navlink">Gaming</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
