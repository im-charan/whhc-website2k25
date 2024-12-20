import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from "react-bootstrap";
import logo from '../assets/logo.png'

const Navigation = () => {
  return (
    <div>
      <Navbar className="navbar">
        <Container style={{display: 'flex', justifyContent: 'space-between'}}>
          <Navbar.Brand style={{display: 'flex', alignItems: 'center'}} href="/">
            <img
              alt=""
              src= {logo}
              width="70"
              height="70"
              className="d-inline-block align-top"
            />
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <span className="navbrand">WHHC</span>
              <small className="navbrandsubtext">SECURING THE CYBER WORLD ONE BYTE AT A TIME</small>
            </div>
          </Navbar.Brand>
          <Nav align="right">

            <Nav.Link className="navlink" href="/photogallery">
              Photo Gallery
            </Nav.Link>

            <Nav.Link className="navlink" href="/technozarre">
              Technozarre-2K25
            </Nav.Link>

            <Nav.Link className="navlink" href="/team">
              The Team
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation;
