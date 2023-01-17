import React from 'react'
import SiteNavbar from '../../components/Navbar'
import Footer from '../../components/Footer';
//photos for cards
import Filmreel from '../../assets/images/FilmReel.png'
import DroneReel from '../../assets/images/DroneReel.png'
import HiImTravis from '../../assets/images/HiImTravis.png'
import HiImSevy from '../../assets/images/HiImSevy.png'
import WellStories from '../../assets/images/WellStories.png'
//Styling stich to bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';

//links to sites
const shooterReel = () => {
    window.location.href = "https://vimeo.com/672158658"
}
const droneReel =() => {
    window.location.href = "https://vimeo.com/672158658"
}
const travisDoc = () => {
    window.location.href = "https://tv.apple.com/us/episode/hi-im-travis-mills/umc.cmc.15sh3bkacqjj0cfqvvcokjexx"
}
const sevyDoc = () => {
    window.location.href = "https://tv.apple.com/us/episode/hi-im-sevy/umc.cmc.7423yg7w4ajih44dpaa44jxyi?showId=umc.cmc.4wurqdmcfa40pcdr7730pynwy"
}
const wellStories = () => {
    window.location.href = "https://youtu.be/Zkm8aD2x6HE"
}


const Portfolio = () => {

    return (
        <>
            <SiteNavbar />
            <Container className='main-section'>
                <Row xs={1} md={2} className="g-4 mt-2">
                    <Col>
                        <Card alt="film reel" onClick={shooterReel} >
                            <Card.Img className="image" variant="top" src={Filmreel} />
                            <div className='img-hover' >
                                <div className="image-overlay">
                                    <div className="img-title">Film Reel</div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col >
                        <Card alt="film reel" onClick={droneReel} >
                            <Card.Img className="image" variant="top" src={DroneReel} />
                            <div className='img-hover' >
                                <div className="image-overlay">
                                    <div className="img-title">Drone Reel</div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col p-2 g-col-6>
                        <Card alt="film reel" onClick={travisDoc} >
                            <Card.Img className="image" variant="top" src={HiImTravis} />
                            <div className='img-hover' >
                                <div className="image-overlay">
                                    <div className="img-title">Hi I'm Travis</div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col p-2 g-col-6>
                        <Card alt="film reel" onClick={sevyDoc} >
                            <Card.Img className="image" variant="top" src={HiImSevy} />
                            <div className='img-hover' >
                                <div className="image-overlay">
                                    <div className="img-title">Hi I'm Sevy</div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col p-2 g-col-6>
                        <Card alt="film reel" onClick={wellStories} >
                            <Card.Img className="image" variant="top" src={WellStories} />
                            <div className='img-hover' >
                                <div className="image-overlay">
                                    <div className="img-title">Well Stories</div>
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

export default Portfolio
