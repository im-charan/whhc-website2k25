import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/logo.png";
import { NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  const handleScroll = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/technozarre", { state: { targetSection: sectionId } });
    }
  };

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
          <Navbar.Toggle
            aria-controls="navbar-nav"
            className="custom-toggle"
            style={{backgroundColor: 'grey'}}
          />
        </div>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="navlink" href="/photogallery">
              Events
            </Nav.Link>
            <Nav.Link className="navlink" href="/team">
              Team
            </Nav.Link>
            <NavDropdown title="Technozarre'25" id="basic-nav-dropdown" className="custom-dropdown">
              <NavDropdown.Item
                className="technozarre-hlink"
                onClick={() => navigate("/technozarre")}
              >
                Technozarre2k25
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item
                className="technozarre-link"
                onClick={() => handleScroll("workshops")}
              >
                Workshops
              </NavDropdown.Item>
              <NavDropdown.Item
                className="technozarre-link"
                onClick={() => handleScroll("technical")}
              >
                Technical
              </NavDropdown.Item>
              <NavDropdown.Item
                className="technozarre-link"
                onClick={() => handleScroll("nontech")}
              >
                Non-Technical
              </NavDropdown.Item>
              <NavDropdown.Item
                className="technozarre-link"
                onClick={() => handleScroll("gaming")}
              >
                Gaming
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
