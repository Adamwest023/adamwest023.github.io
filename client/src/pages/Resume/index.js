import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const travisDoc = () => {
  window.location.href = "https://tv.apple.com/us/episode/hi-im-travis-mills/umc.cmc.15sh3bkacqjj0cfqvvcokjexx"
}
const sevyDoc = () => {
  window.location.href = "https://tv.apple.com/us/episode/hi-im-sevy/umc.cmc.7423yg7w4ajih44dpaa44jxyi?showId=umc.cmc.4wurqdmcfa40pcdr7730pynwy"
}

const githubAcct = () => {
  window.location.href = "https://github.com/Adamwest023"
}
const runnerGame = () => {
  window.location.href = "https://adamwest023.github.io/Endless-runner-game/"
}

const Resume = () => {
  return (
    <>
      <Navbar />
      <Container className='resume' >
        <Row className="resume">
          <Col sm={12} md={6} >
            <div className='resume-title' >
              <h2>Film Credits</h2>
              <h6 >Director of Photography <br /> <h6 className="film-list">Camera & Drone Operator</h6></h6>
              <p>Tonkawa Documentary</p>
              <p><a href='#' onClick={travisDoc}>Hi I'm Travis</a></p>
              <p><a href='#' onClick={sevyDoc}>Hi I'm Sevy</a></p>
              <p>Water Wars</p>
              <p><a href="https://thewellaustin.com/stories/">Stories at the Well</a></p>
              <p>Cycle Breakers season 1</p>
              <p>American Dream Homes</p>
              <p>Forget the Alamo</p>
              <h6 className="film-list">Assistant Camera </h6>
              <p><a>Magnolia Table season 7</a></p>
              <p><a href="https://www.youtube.com/watch?v=KwOOwwi-8Uk&t=33s">Louis Vuitton Commercial</a></p>
              <p><a>Le Creuset Commercial</a></p>
              <p><a href="https://www.youtube.com/watch?v=gJ53BpBc-MM">Plate Crate Commercial</a></p>
              <p>Iron Resurrection</p>
              <p>House of Ho </p>
              <p>Sell This House </p>
            </div>
          </Col>
          <Col>
            <div className='resume-title'>
              <h2>Web Projects</h2>
              <p></p>
              <p className="film-list"><a href="#" onClick={githubAcct}>Github Account</a></p>
              <p>Adamwestcreative.com</p>
              <p>React Fest React project</p>
              <p>Git-a-recipe Api Project</p>
              <p>Weather Api Project</p>
              <p><a href="#" onClick={runnerGame}>Python Runner Game </a></p>
              <p>Pyshooter Python game</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default Resume
