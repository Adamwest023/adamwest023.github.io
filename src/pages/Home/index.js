import React from 'react';
import SiteNavbar from '../../components/Navbar';
import Header from '../../components/Header';
// import Footer from '../../components/Footer'
//new components for bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratio from 'react-bootstrap/Ratio';
import reel from '/Users/admin/Desktop/Bootcamp/portfolio-react2/website/src/assets/videos/reel.mp4'


const Home = () => {
    return (
        <>
            <SiteNavbar />
            <Header />
        </>
    )
}

export default Home
