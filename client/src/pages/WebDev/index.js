import React from "react";
import SiteNavbar from '../../components/Navbar'
import Footer from '../../components/Footer';
//photos for cards
import ReactFest from '../../assets/images/React-fest.jpeg'
import FoodFestival from '../../assets/images/FoodFestival.jpeg'
import Recipe from '../../assets/images/Recipe.jpeg'
import Pyrunner from '../../assets/images/Pyrunner.jpeg'

//Styling stich to bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';

// links for cards
const reactFestChange = () => {
    window.location.href = "https://react-fest.herokuapp.com/"
}
const foodFestivalChange = () => {
    window.location.href = "https://adamwest023.github.io/food-festival/index.html#"
}
const gitRecipe = () => {
    window.location.href = "https://adamwest023.github.io/git-a-recipe/"
}
const pyRunnerChange = () => {
    window.location.href = 'https://adamwest023.github.io/Endless-runner-game/'
}

const WebDev = () => {
    return (
        <>
            <SiteNavbar />
            <Container className="main-section">
                <Row xs={1} md={2} className="g-4 mt-2">
                    <Col >
                        <Card alt="React Fest Website" onClick={reactFestChange} >
                            <Card.Img className="image" variant="top" src={ReactFest} />
                            <div className='img-hover' >
                                <div className="image-overlay">
                                    <div className="img-title">React Fest </div>
                                    <div className="img-text">React website project</div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col >
                        <Card alt="Food Fest" onClick={foodFestivalChange} >
                            <Card.Img className="image" variant="top" src={FoodFestival} />
                            <div className='img-hover' >
                                <div className="image-overlay">
                                    <div className="img-title">Food Fest </div>
                                    <div className="img-text">Stripe demo project</div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col p-2 g-col-6>
                        <Card alt="film reel" onClick={gitRecipe} >
                            <Card.Img className="image" variant="top" src={Recipe} />
                            <div className='img-hover' >
                                <div className="image-overlay">
                                    <div className="img-title">Git-a-Recipe</div>
                                    <div className="img-text">Food Api project</div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    {/* <Col p-2 g-col-6>
                        <Card alt="film reel" onClick={codingChange} >
                            <Card.Img className="image" variant="top" src={Recipe} />
                            <div className='img-hover' >
                                <div className="image-overlay">
                                    <div className="img-title">PyShooter</div>
                                    <div className="img-text">Python built game</div>
                                </div>
                            </div>
                        </Card>
                    </Col> */}
                    <Col p-2 g-col-6>
                        <Card alt="python runner game" onClick={pyRunnerChange} >
                            <Card.Img className="image" variant="top" src={Pyrunner} />
                            <div className='img-hover' >
                                <div className="image-overlay">
                                    <div className="img-title">Pygame Runner Game</div>
                                    <div className="img-text">Python built game</div>
                                </div>
                            </div>
                        </Card>
                    </Col>

                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default WebDev