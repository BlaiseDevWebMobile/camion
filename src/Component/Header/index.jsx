import React from 'react';
import { Badge, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import './Header.css'

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" className={'headerNavbar'} fixed={'top'} >
                <Container>
                    <Navbar.Brand href="/">LogoCamion</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <NavDropdown title="Category" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="camion_man">Camion Mercedes</NavDropdown.Item>
                                <NavDropdown.Item href="camion_man">Camion MAN </NavDropdown.Item>
                                <NavDropdown.Item href="camion_man">Camion SCANIA</NavDropdown.Item>
                                <NavDropdown.Item href="camion_man">Camion DAF</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="camion_man">Others</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="camion_man">
                                Deposer une annonce
                           </Nav.Link>
                            <Nav.Link href="camion_man">
                                Mon espace
                           </Nav.Link>
                            <Nav.Link eventKey={2} href="camion_man">
                                Louer un camion
                           </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;
