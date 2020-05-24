import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = ({searchVisible}) => (
    <Navbar expand="lg" style={{backgroundColor: '#03989e'}}>
        <div className="container">
            <Navbar.Brand href="/feed">Kencho</Navbar.Brand>
            <div hidden={searchVisible}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/liked-posts">Mis Likes</Nav.Link>
                        <Nav.Link href="/activity-log">Mi Actividad</Nav.Link>
                        <Nav.Link href="/">Cerrar Sesión</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </div>
    </Navbar>
);
export default NavBar;
