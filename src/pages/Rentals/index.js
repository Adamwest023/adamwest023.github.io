import React from 'react'
import SiteNavbar from '../../components/Navbar'
import Footer from '../../components/Footer';
//Styling stich to bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
// src for images
import prolight from '../../assets/images/rentals/600xPro.png'




const Rentals = () => {

    return (
        <>
            <SiteNavbar />
            <section className='py-5 text-center container rental-page-font'>
                <div className='row py-lg-5'>
                    <div className='col-lg-6 col-md-8 mx-auto'>
                        <h1>Gear Rental</h1>
                        <p className='lead'>
                            All rentals can be negotiated, contact for more information.
                        </p>
                    </div>
                </div>
            </section>
            <CardGroup className='card-group-1'>
                <Card className='product-cards'>
                    <Card.Img variant="top" className='card-img' src={prolight} />
                    <Card.Body>
                        <Card.Title>600x Pro</Card.Title>
                        <Card.Text>
                            Apurture 600 light with bi-color options and bluetooth capabilities
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted rental-text">$85/day or weekend</small>
                        <Button variant="outline-dark" className='rental-button'> Add to Cart</Button>
                    </Card.Footer>
                </Card>
                <Card className='product-cards'>
                    <Card.Img variant="top" className='card-img' src={prolight} />
                    <Card.Body>
                        <Card.Title>600x Pro</Card.Title>
                        <Card.Text>
                            Apurture 600 light with bi-color options and bluetooth capabilities
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted rental-text">$85/day or weekend</small>
                        <Button variant="outline-dark" className='rental-button'> Add to Cart</Button>
                    </Card.Footer>
                </Card>
                <Card className='product-cards'>
                    <Card.Img variant="top" className='card-img' src={prolight} />
                    <Card.Body>
                        <Card.Title>600x Pro</Card.Title>
                        <Card.Text>
                            Apurture 600 light with bi-color options and bluetooth capabilities
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted rental-text">$85/day or weekend</small>
                        <Button variant="outline-dark" className='rental-button'> Add to Cart</Button>
                    </Card.Footer>
                </Card>
                <Card className='product-cards'>
                    <Card.Img variant="top" className='card-img' src={prolight} />
                    <Card.Body>
                        <Card.Title>600x Pro</Card.Title>
                        <Card.Text>
                            Apurture 600 light with bi-color options and bluetooth capabilities
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted rental-text">$85/day or weekend</small>
                        <Button variant="outline-dark" className='rental-button'> Add to Cart</Button>
                    </Card.Footer>
                </Card>
            </CardGroup>
            <CardGroup className='card-group-1'>
            <Card className='product-cards'>
                    <Card.Img variant="top" className='card-img' src={prolight} />
                    <Card.Body>
                        <Card.Title>600x Pro</Card.Title>
                        <Card.Text>
                            Apurture 600 light with bi-color options and bluetooth capabilities
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted rental-text">$85/day or weekend</small>
                        <Button variant="outline-dark" className='rental-button'> Add to Cart</Button>
                    </Card.Footer>
                </Card><Card className='product-cards'>
                    <Card.Img variant="top" className='card-img' src={prolight} />
                    <Card.Body>
                        <Card.Title>600x Pro</Card.Title>
                        <Card.Text>
                            Apurture 600 light with bi-color options and bluetooth capabilities
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted rental-text">$85/day or weekend</small>
                        <Button variant="outline-dark" className='rental-button'> Add to Cart</Button>
                    </Card.Footer>
                </Card><Card className='product-cards'>
                    <Card.Img variant="top" className='card-img' src={prolight} />
                    <Card.Body>
                        <Card.Title>600x Pro</Card.Title>
                        <Card.Text>
                            Apurture 600 light with bi-color options and bluetooth capabilities
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted rental-text">$85/day or weekend</small>
                        <Button variant="outline-dark" className='rental-button'> Add to Cart</Button>
                    </Card.Footer>
                </Card><Card className='product-cards'>
                    <Card.Img variant="top" className='card-img' src={prolight} />
                    <Card.Body>
                        <Card.Title>600x Pro</Card.Title>
                        <Card.Text>
                            Apurture 600 light with bi-color options and bluetooth capabilities
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted rental-text">$85/day or weekend</small>
                        <Button variant="outline-dark" className='rental-button'> Add to Cart</Button>
                    </Card.Footer>
                </Card>
            </CardGroup>
            <Footer />
        </>
    )
}

export default Rentals