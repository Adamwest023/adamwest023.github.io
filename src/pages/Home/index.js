import React from 'react';
import SiteNavbar from '../../components/Navbar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
// import Footer from '../../components/Footer'
//new components for bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratio from 'react-bootstrap/Ratio';
import WebsiteReel from '/Users/admin/Desktop/Bootcamp/portfolio-react2/website/src/assets/videos/WebsiteReel.mp4'


const Home = () => {
    return (
        <>
            <SiteNavbar />
            <Header />
            <Footer />
        </>
    )
}

export default Home
