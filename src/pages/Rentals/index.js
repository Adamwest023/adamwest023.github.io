import React from 'react'
import SiteNavbar from '../../components/Navbar'
import Footer from '../../components/Footer';
//Styling stich to bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
// import Carousel from '../../components/Carousel';
import Button from 'react-bootstrap/Button';
// src for images
import prolight from '../../assets/images/rentals/600xPro.png'
import blackmagic4k from '../../assets/images/rentals/BMPCC4k.png'
import blackmagic6k from '../../assets/images/rentals/BMPCC6K.png'
import blackmagic6kv2 from '../../assets/images/rentals/BMPCC6kv2.png'
import dzo1 from '../../assets/images/rentals/dzo1.png'
import dzo2 from '../../assets/images/rentals/dzo2.png'
import dzo3 from '../../assets/images/rentals/dzo3.png'
import dzo4 from '../../assets/images/rentals/dzo4.png'
import smallHD1 from '../../assets/images/rentals/smallHD1.png'
import tiffenND from '../../assets/images/rentals/tiffen.png'
import MyCarousel from '../../components/Carousel';
import coreui from '@coreui/coreui'


const Rentals = () => {

    return (
        <>
            <SiteNavbar />
            <section href="#" className='py-5 text-center container rental-page-font'>
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
                    <Card.Img variant="top" className='card-img' src={dzo1} />
                    <Card.Body>
                        <Card.Title>Dzo Pictor Lens</Card.Title>
                        <Card.Text>
                            20-55mm and 50-125mm ef and pl mounted parfocal super 35mm lenses
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted rental-text">$200/day or weekend</small>
                        <Button variant="outline-dark" className='rental-button'> Add to Cart</Button>
                    </Card.Footer>
                </Card>
                <Card className='product-cards'>
                    <Card.Img variant="top" className='card-img' src={smallHD1} />
                    <Card.Body>
                        <Card.Title>1702 Small HD Monitor</Card.Title>
                        <Card.Text>
                            17in production monitor with gold mount attachment. Can support 2 sdi and single hdmi inputs
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted rental-text">$250/day or weekend</small>
                        <Button variant="outline-dark" className='rental-button'> Add to Cart</Button>
                    </Card.Footer>
                </Card>
            </CardGroup>
            <CardGroup className='card-group-1'>
                <Card className='product-cards'>
                    <Card.Img variant="top" className='card-img' src={tiffenND} />
                    <Card.Body>
                        <Card.Title>Tiffen ND filters</Card.Title>
                        <Card.Text>
                            4 x 5.65 nd filters with .3,.6,.9,and 1.2 stops
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted rental-text">$35/day or weekend</small>
                        <Button variant="outline-dark" className='rental-button'> Add to Cart</Button>
                    </Card.Footer>
                </Card><Card className='product-cards'>
                    <Card.Img variant="top" className='card-img' src={blackmagic6k} />
                    <Card.Body>
                        <Card.Title>Black Magic Pocket Cam 6k</Card.Title>
                        <Card.Text>
                            Black Magic Pocket Cam 6k
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted rental-text">$45/day or weekend</small>
                        <Button variant="outline-dark" className='rental-button'> Add to Cart</Button>
                    </Card.Footer>
                </Card>
                <Card className='product-cards'>
                    <Card.Img variant="top" className='card-img' src={blackmagic4k} />
                    <Card.Body>
                        <Card.Title>Black Magic Pocket 4k</Card.Title>
                        <Card.Text>
                            Black Magic Pocket Cam 6k
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted rental-text">$35/day or weekend</small>
                        <Button variant="outline-dark" className='rental-button'> Add to Cart</Button>
                    </Card.Footer>
                </Card>
            </CardGroup>
            <Footer />
        </>
    )
}

export default Rentals