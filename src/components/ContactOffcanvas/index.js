import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Success from '../../pages/Success';

function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Contact</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Grid item alignContent="center" alignItems="center">
                        <Card style={{ maxWidth: 500, margin: '0  auto' }}>
                            <CardContent>
                                <form action="https://formsubmit.co/6c927c0a52e3584dc0fdf5e096217647" method="POST">
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
        </>
    );
}

export default Example;