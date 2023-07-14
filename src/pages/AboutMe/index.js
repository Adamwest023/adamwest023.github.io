import React from 'react';
import SiteNavbar from '../../components/Navbar'
import Footer from '../../components/Footer';
import Headshot from '../../assets/images/Headshot.jpg';
import "bootstrap/dist/css/bootstrap.min.css"
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';


const contact = () => {
    window.location.href = "/contact";
}

const AboutMe = () => {
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
                            <button type='button' className='btn btn-outline-light btn-lg px-3 me-md-2 fw-bold' onClick={contact}>Contact</button>
                        </div>
                    </div>
                        <div className='col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg'>
                            <img className="rounded-lg-3 headshot" src={Headshot} alt width={720}></img>
                        </div>
                </div>
            </div>
            <Footer />
        </>)
}

export default AboutMe