import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/logo.png";

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
            <Nav.Link className="navlink" href="/technozarre">
              Technozarre-2K25
            </Nav.Link>
            <Nav.Link className="navlink" href="/team">
              Team
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
