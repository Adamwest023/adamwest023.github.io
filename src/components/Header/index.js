import React from 'react';
// import Footer from '../../components/Footer'
//new components for bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import WebReel from '../../assets/videos/WebReel.mp4'
import DroneReel from '../../assets/videos/DroneReel.mp4'

const webReel = () => {
    window.location.href = "https://myvideobucket2323.s3.us-east-2.amazonaws.com/WebReel.mp4"
}
const droneUrl = () => {
    window.location.href = "https://myvideobucket2323.s3.us-east-2.amazonaws.com/DroneReel.mp4"}


const Header = () => {
    return (
        <div className='home' >
            <div className='overlay'></div>
            <video className="video1" url={webReel} type="video/mp4" autoPlay loop muted />
            <video className="video2" url={droneUrl} type="video/mp4" autoPlay loop muted />
        </div>
    )
}

export default Header;