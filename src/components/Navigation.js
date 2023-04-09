import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const routes = [
    {
        name: "About",
        path: "#about"
    }, 
    {
        name: "Contact",
        path: "#contact"
    }
]

export const Navigation = () => {
  return (
    <Navbar color="#fff" expand="lg" sticky="top">
      <Navbar.Brand href="#home">Kayode Oluwasegun</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
            {routes.map(route => (
                <Nav.Link href={route.path} key={route.name}>{route.name}</Nav.Link>
            ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
