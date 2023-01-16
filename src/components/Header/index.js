import React from 'react';
// import Footer from '../../components/Footer'
//new components for bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import WebReel from '../../assets/videos/WebReel.mp4'

const Header = () => {
    return (
        <div className='home' >
            <div className='overlay'></div>
            <video className="video" src={WebReel} autoPlay loop muted />
            <div className="home-content">
                <h1>Adam West Creative</h1>
            </div>
        </div>
    )
}

export default Header;