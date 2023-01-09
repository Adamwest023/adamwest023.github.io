import React from 'react'
import { Link } from 'react-router-dom'
// impor headshot from '../../assets/images/Headshot.jpg'
// import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


//CSS styles
const SiteNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Adam West</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link component= {Link}to={'/portfolio'} href="/portfolio">Cinematography</Nav.Link>
                        <Nav.Link component= {Link} to={'/portfolio'}href="/portfolio">Web Dev</Nav.Link>  
                        <Nav.Link component= {Link} to={'/portfolio'}href="/rentals">Rentals</Nav.Link>
                        <NavDropdown title="Information" id="collasible-nav-dropdown">
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
