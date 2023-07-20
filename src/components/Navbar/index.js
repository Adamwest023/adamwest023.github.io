import React from 'react'
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Grid, Typography, Card, Box, CardContent, TextField, Button } from '@material-ui/core'





const SiteNavbar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const success = () => {window.location.href = "/success"}


    return (
        <Navbar className="navbar" collapseOnSelect expand="lg" variant="dark">
            <Container >
                <Navbar.Brand id="brand" href="/">Adam {'\n'} West</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ">
                        <Nav.Link className="navbar-element" component={Link} to={'/portfolio'} href="/portfolio">Cinematography</Nav.Link>
                        <Nav.Link className="navbar-element" component={Link} to={'/portfolio'} href="/webDev">Web Dev</Nav.Link>
                        <Nav.Link className="navbar-element" href="/rentals">Rentals</Nav.Link>
                        <NavDropdown className="navbar-element" title="Information" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/aboutme">About</NavDropdown.Item>
                            <NavDropdown.Item href="/resume">Resume</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={handleShow}>
                                Contact
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Contact</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Grid item alignContent="center" alignItems="center">
                                    <Card style={{ maxWidth: 500, margin: '0  auto' }}>
                                        <CardContent>
                                            <form action="https://formsubmit.co/adamwest023@gmail.com" method="POST">
                                                <Grid container spacing={1} md={12} >
                                                    <Grid item xs={12} fullWidth style={{ textAlign: 'center' }}>
                                                        <Typography gutterBottom variant="h5">
                                                            Contact Me
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField label="First Name" name="First Name" placeholder="Enter first name" variant="outlined" fullWidth required />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField label="Last Name" name="Last Name" placeholder="Enter last name" variant="outlined" fullWidth required />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField type="email" name="email" label="Email" placeholder="'Enter your email address" variant="outlined" fullWidth required />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField type="tel" name="number" label="Phone" placeholder="Enter phone number" variant="outlined" fullWidth required />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField multiline name="message" rows={4} label="message" placeholder="Type your message here" variant="outlined" fullWidth required />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Button type="submit" variant='contained' color="primary" 
                                                        onSubmit={success}
                                                        fullWidth> Submit</Button>
                                                    </Grid>
                                                    <input type="hidden" name="_next" value="/success"
                                                    onSubmit={success}></input>
                                                    <input type="hidden" name="_captcha" value="false"></input>
                                                </Grid>
                                            </form>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default SiteNavbar;
