import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CodeResume from '../../assets/images/AdamWestResumeCoding.png'
import FilmResume from '../../assets/images/AdamWestResumeFilm.png'
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Resume = () => {
  return (
    <>
      <Navbar />
      <Container >
        <Row className="resume">
          <Col sm={12} md={6} >
            <div className='resume-title' >
              <h2>Film Credits</h2>
              <h6 >Director of Photography <br/> <h6 className="film-list">Camera & Drone Operator</h6></h6>
              <p>Tonkawa Documentary</p>
              <p><a href="https://thewellaustin.com/stories/">Stories at the Well</a></p>
              <p>Water Wars</p>
              <p><a>Hi I'm Travis</a></p>
              <p><a>Hi I'm Sevy</a></p>
              <p>Cycle Breakers season 1</p>
              <p>American Dream Homes</p>
              <p>Forget the Alamo</p>
              <h6 className="film-list">Assistant Camera </h6>
              <p><a>Magnolia Table season 7</a></p>
              <p><a>Le Creuset Commercial</a></p>
              <p><a>Plate Crate Commercial</a></p>
              <p><a href="https://www.youtube.com/watch?v=KwOOwwi-8Uk&t=33s">Louis Vuitton Commercial</a></p>
              <p>Iron Resurrection</p>
              <p>House of Ho </p>
              <p>Sell This House </p>
            </div>
          </Col>
          <Col>
            <div className='resume-title'>
              <h2>Web Projects</h2>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default Resume
