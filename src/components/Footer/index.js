import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

const Footer = () => {
  return (
    <div className=" footer">
      <Container><p className='footer-TM'>© <a href='/'>Adamwestcreative.com</a> {new Date().getFullYear()}
      {'.'}</p></Container>
    </div>

  );
}
export default Footer;