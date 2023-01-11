import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SiteNavbar from '../../components/Navbar'
import Footer from '../../components/Footer';
import { Box, Typography, CardMedia, Grid, CardContent } from '@material-ui/core'
import { CardActionArea } from '@mui/material';
//photos for cards
import ReactFest from '../../assets/images/React-fest.png'
import FoodFestival from '../../assets/images/FoodFestival.png'
import Recipe from '../../assets/images/Recipe.png'
import Filmreel from '../../assets/images/Filmreel.png'
//Styling stich to bootstrap
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';



const useStyles = makeStyles({
    cardBox: {
        padding: '10px'
    },
});

const reactFestChange = () => {
    window.location.href = "https://react-fest.herokuapp.com/"
}
const filmReelChange = () => {
    window.location.href = "https://vimeo.com/672158658"
}
const foodFestivalChange = () => {
    window.location.href = "https://adamwest023.github.io/food-festival/index.html#"
}
const codingChange = () => {
    window.location.href = "https://adamwest023.github.io/git-a-recipe/"
}
const Portfolio = () => {
    const classes = useStyles();
    return (
        <>
            <SiteNavbar />
            <Container>
                <Row  xs={1} md={2} className="g-4 mt-2">
                    <Col >
                        <Card >
                            <Card.Img variant="top" src={Filmreel} />
                            <div className='img-hover'>
                                <div className="img-text">View Reel</div>
                            </div>
                            <Card.Body>
                                <Card.Title>Film Reel</Card.Title>
                                <Card.Text>Various projects worked on over the past 2 years. Includes film work, drone work, assistant camera work</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card>
                            <Card.Img variant="top" src={Filmreel} />
                            <Card.Body>
                                <Card.Title>Film Reel</Card.Title>
                                <Card.Text>Various projects worked on over the past 2 years. Includes film work, drone work, assistant camera work</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col p-2 g-col-6>
                        <Card>
                            <Card.Img variant="top" src={Filmreel} />
                            <Card.Body>
                                <Card.Title>Film Reel</Card.Title>
                                <Card.Text>Various projects worked on over the past 2 years. Includes film work, drone work, assistant camera work</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col p-2 g-col-6>
                        <Card>
                            <Card.Img variant="top" src={Filmreel} />
                            <Card.Body>
                                <Card.Title>Film Reel</Card.Title>
                                <Card.Text>Various projects worked on over the past 2 years. Includes film work, drone work, assistant camera work</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
            <Box component='div' sx={{ height: "100%" }}>
                <Grid justifyContent="space-around" container rowSpacing={{ xs: 3, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ p: '10px' }}>
                    <Grid item xs={9} md={5} className={classes.cardBox}>
                        <Card sx={{ maxWidth: 250 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={Filmreel}
                                    alt="film reel"
                                    onClick={filmReelChange}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Reel
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Various projects worked on over the past 2 years. Includes film work, drone work, assistant camera work
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={9} md={5} className={classes.cardBox}>
                        <Card sx={{ maxWidth: 250 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={ReactFest}
                                    alt="React-fest"
                                    onClick={reactFestChange}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" height='10' >
                                        React-Fest
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        React built application to demo a music festival. This application uses the MERN stack
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={9} md={5} className={classes.cardBox}>
                        <Card sx={{ maxWidth: 250 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={FoodFestival}
                                    alt="food-festival PWA"
                                    onClick={foodFestivalChange}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Food Festival PWA
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Refactored web application to create a Progressive Web Application. The app has both online and offline functionality using IndexedDB
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={9} md={5} className={classes.cardBox}>
                        <Card sx={{ maxWidth: 250 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={Recipe}
                                    alt="react-fest application"
                                    onClick={codingChange}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Git-A-Recipe
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Group project using a framework and api calls to gather food recipes and other information
                                    </Typography>
                                    <br />
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>

            </Box>
            <Footer />
        </>
    )
}

export default Portfolio
