import React from 'react'
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




const SiteNavbar = () => {
    return (
        <Navbar className="navbar" collapseOnSelect expand="lg"  variant="dark">
            <Container >
                <Navbar.Brand id="brand" href="/">Adam {'\n'} West</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ">
                        <Nav.Link className="navbar-element" component= {Link}to={'/portfolio'} href="/portfolio">Cinematography</Nav.Link>
                        <Nav.Link className="navbar-element" component= {Link} to={'/portfolio'}href="/webDev">Web Dev</Nav.Link>  
                        <Nav.Link className="navbar-element"href="/rentals">Rentals</Nav.Link>
                        <NavDropdown className="navbar-element" title="Information" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/resume">About</NavDropdown.Item>
                            <NavDropdown.Item href="/resume">Resume</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/contact">
                                Contact
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default SiteNavbar;
