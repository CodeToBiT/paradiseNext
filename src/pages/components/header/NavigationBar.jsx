import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const NavigationBar = () => {
  const [windowChange, setWindowChange] = useState(false);
  if (typeof window != "undefined") {
    const changeNavbarPosition = () => {
      if (window.scrollY >= 154) {
        setWindowChange(true);
      } else {
        setWindowChange(false);
      }
    };
    window.addEventListener("scroll", changeNavbarPosition);
  }
  return (
    <>
      <header className="main-header">
        <div className="top-nav py-12">
          <div className="container">
            <div className="flex-between">
              <div className="align-center text-white h5 gap-8">
                <a href="#">
                  <FaFacebookSquare />
                </a>
                <a href="#">
                  <FaInstagramSquare />
                </a>

                <a href="#">
                  <FaTwitterSquare />
                </a>
                <a href="#">
                  <FaLinkedin />
                </a>
              </div>
              <div className="d-flex gap-32 p">
                <div className="phone align-center gap-4 text-white">
                  <FaPhoneAlt />
                  +977 9876543210
                </div>
                <div className="mail align-center gap-4 text-white">
                  <FaEnvelope />
                  example@example.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            windowChange ? "nav-bar navbar-sticky shadow-4" : "nav-bar"
          }
        >
          <Navbar expand="lg">
            <Container>
              <Navbar.Brand href="#home">
                <Image
                  src="/assets/image/logo.png"
                  width="150"
                  height="70"
                  alt="logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <a href="#" className="btn btn-primary btn-sm text-white">
                  Tour Nepal
                </a>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </header>
    </>
  );
};

export default NavigationBar;
