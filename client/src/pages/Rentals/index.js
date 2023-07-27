import React from 'react'
import SiteNavbar from '../../components/Navbar'
import Footer from '../../components/Footer';
//Styling stich to bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button';
import useFetch from '../../hooks/useFetch';
// src for images
import prolight from '../../assets/images/rentals/600xPro.jpeg'
import blackmagic4k from '../../assets/images/rentals/BMPCC4k.jpeg'
import blackmagic6k from '../../assets/images/rentals/BMPCC6K.jpeg'
import dzo1 from '../../assets/images/rentals/dzo1.jpeg'
import smallHD1 from '../../assets/images/rentals/smallHD1.jpeg'
import tiffenND from '../../assets/images/rentals/tiffen.jpeg'
import canon from '../../assets/images/rentals/canon.jpeg'
import touch from '../../assets/images/rentals/smallHD_Touch.jpeg'
import vespid from '../../assets/images/rentals/vespid.jpeg'

//assets for carousel future update
// import Carousel from '../../components/Carousel';
// import blackmagic6kv2 from '../../assets/images/rentals/BMPCC6kv2.png'
// import dzo2 from '../../assets/images/rentals/dzo2.png'
// import dzo3 from '../../assets/images/rentals/dzo3.png'
// import dzo4 from '../../assets/images/rentals/dzo4.png'


const Rentals = () => {
    const { data, loading, error } = useFetch("/gear");

    return (
        <>
            <SiteNavbar />
            <section href="#" className='py-1 text-center container rental-page-font'>
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
                    <Card.Img variant="top" className='card-img' src={canon} />
                    <Card.Body>
                        <Card.Title>{data[0]?.name}</Card.Title>
                        <Card.Text>
                            {data[0]?.desc}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted rental-text">${data[0]?.price}/day or weekend</small>
                        {/* <Button variant="outline-dark" className='rental-button'> Add to Cart</Button> */}
                    </Card.Footer>
                </Card>
                <Card className='product-cards'>
                    <Card.Img variant="top" className='card-img' src={blackmagic6k} />
                    <Card.Body>
                        <Card.Title>{data[1]?.name}</Card.Title>
                        <Card.Text>
                            {data[1]?.desc}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted rental-text">${data[1]?.price}/day or weekend</small>
                        {/* <Button variant="outline-dark" className='rental-button'> Add to Cart</Button> */}
                    </Card.Footer>
                </Card>
                <Card className='product-cards'>
                    <Card.Img variant="top" className='card-img' src={blackmagic4k} />
                    <Card.Body>
                        <Card.Title>{data[2]?.name}</Card.Title>
                        <Card.Text>
                        {data[2]?.desc}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted rental-text">${data[2]?.price}/day or weekend</small>
                        {/* <Button variant="outline-dark" className='rental-button'> Add to Cart</Button> */}
                    </Card.Footer>
                </Card>
            </CardGroup>
            <CardGroup className='card-group-1'>
                <Card className='product-cards'>
                    <Card.Img variant="top" className='card-img' src={prolight} />
                    <Card.Body>
                        <Card.Title>{data[3]?.name}</Card.Title>
                        <Card.Text>
                        {data[3]?.desc}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted rental-text">${data[3]?.price}/day or weekend</small>
                        {/* <Button variant="outline-dark" className='rental-button'> Add to Cart</Button> */}
                    </Card.Footer>
                </Card><Card className='product-cards'>
                    <Card.Img variant="top" className='card-img' src={dzo1} />
                    <Card.Body>
                        <Card.Title>{data[4]?.name}</Card.Title>
                        <Card.Text>
                        {data[4]?.desc}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted rental-text">${data[4]?.price}/day or weekend</small>
                        {/* <Button variant="outline-dark" className='rental-button'> Add to Cart</Button> */}
                    </Card.Footer>
                </Card>
                <Card className='product-cards'>
                    <Card.Img variant="top" className='card-img' src={vespid} />
                    <Card.Body>
                        <Card.Title>{data[5]?.name}</Card.Title>
                        <Card.Text>
                        {data[5]?.desc}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted rental-text">${data[5]?.price}/day or weekend</small>
                        {/* <Button variant="outline-dark" className='rental-button'> Add to Cart</Button> */}
                    </Card.Footer>
                </Card>
            </CardGroup>
            <CardGroup className='card-group-1'>
                <Card className='product-cards'>
                    <Card.Img variant="top" className='card-img' src={smallHD1} />
                    <Card.Body>
                        <Card.Title>{data[6]?.name}</Card.Title>
                        <Card.Text>
                        {data[6]?.desc}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted rental-text">${data[6]?.price}/day or weekend</small>
                        {/* <Button variant="outline-dark" className='rental-button'> Add to Cart</Button> */}
                    </Card.Footer>
                </Card>
                <Card className='product-cards'>
                    <Card.Img variant="top" className='card-img' src={touch} />
                    <Card.Body>
                        <Card.Title>{data[8]?.name}</Card.Title>
                        <Card.Text>
                            {data[8]?.desc}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted rental-text">${data[8]?.price}/day or weekend</small>
                        {/* <Button variant="outline-dark" className='rental-button'> Add to Cart</Button> */}
                    </Card.Footer>
                </Card>
                <Card className='product-cards'>
                    <Card.Img variant="top" className='card-img' src={tiffenND} />
                    <Card.Body>
                        <Card.Title>{data[7]?.name}</Card.Title>
                        <Card.Text>
                            {data[7]?.desc}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted rental-text">${data[7]?.price}/day or weekend</small>
                        {/* <Button variant="outline-dark" className='rental-button'> Add to Cart</Button> */}
                    </Card.Footer>
                </Card>
            </CardGroup>

            <Footer />
        </>

    )
}


export default Rentals