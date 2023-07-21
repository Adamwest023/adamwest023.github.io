import React from 'react';
import SiteNavbar from '../../components/Navbar'
import Footer from '../../components/Footer';
import Headshot from '../../assets/images/Headshot.jpeg';
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Grid, Typography, Card, Box, CardContent, TextField, Button } from '@material-ui/core'
import Success from '../../pages/Success';


const contact = () => {
    window.location.href = "/contact";
}

const AboutMe = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <SiteNavbar />
            <div className='container my-5'>
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div className='col-lg-7 p-3 p-lg-5 pt-lg-3 about-font'>
                        <h1 className=" display-4 fw-bold lh-1">"So they want to get to know me."</h1>
                        <p className="lead">I am an Emmy-nominated cinematographer based out of Austin, Texas. I have worked on a multitude of projects, most known for work on the Hi I’m series (Hi I’m Sevy, Hi I’m Travis) seen on Magnolia and HBO Max.
                            <br></br>
                            I love to work collaboratively with others and creating new, exciting projects. Outside of that I picked up coding and realized I enjoyed that too. So let's work together and make cool things!
                        </p>
                        <div className='d-grid gap-2 d-md-flex justify-content-md-center mb-4 mb-lg-3'>
                            <button type='button' className='btn btn-outline-light btn-lg px-3 me-md-2 fw-bold' onClick={handleShow}>Contact</button>
                        </div>
                    </div>
                    <div className='col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg'>
                        <img className="rounded-lg-3 headshot" src={Headshot} alt width={720}></img>
                    </div>
                </div>
            </div>

            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Contact</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Grid item alignContent="center" alignItems="center">
                        <Card style={{ maxWidth: 500, margin: '0  auto' }}>
                            <CardContent>
                                <form target="_blank" action="https://formsubmit.co/6c927c0a52e3584dc0fdf5e096217647" method="POST">
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
                                            <Button type="submit" variant='contained' color="primary" fullWidth> Submit</Button>
                                        </Grid>
                                        <input type="hidden" name="_next" value="/success"></input>
                                        <input type="hidden" name="_captcha" value="false"></input>
                                    </Grid>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </Offcanvas.Body>
            </Offcanvas>
            <Footer />
        </>)
}

export default AboutMe