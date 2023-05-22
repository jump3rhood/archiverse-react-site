import React from 'react'
import Container from 'react-bootstrap/Container';
import { Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import LazyLoad from 'react-lazy-load';
import './Home.css'

import building1 from '../assets/images/building1.jpg';
import building2 from '../assets/images/building2.jpg';
import building3 from '../assets/images/building3.jpg';
import building4 from '../assets/images/building4.jpg';

const Home = () => {
  return (
    <>
      <Container fluid id="home">
        <div className='overlay-dark'>
        <Row>
          <Col className='ms-auto' xs={10} md={8}>
            <h1 className='display-1'>CRAFTED BRILLIANCE. APPROVED ELEGANCE.</h1>
            <p className='fs-5 mt-3 text-light'>An Architect who makes your dream space a reality.</p>
            <LinkContainer to='/contact'>
              <Button variant="outline-light" size="lg" className='mt-4 ms-auto'>
                Contact Us
              </Button>
            </LinkContainer>
          </Col>
        </Row>
        </div>
      </Container>
      <Container fluid="md" className='my-5'>
        <h1 className='display-3 mb-4 text-center'>ARCHIVERSE</h1>
        <Row className='mt-4 d-md-flex justify-content-center align-items-center'>
          <Col sm={10} md={6} className='mx-auto mb-3'>
            <p className='w-80 p-3 fs-5'>Welcome to the visionary world of ArchiVerse, where architectural dreams take shape and imagination soars beyond the boundaries of possibility.
               We invite you to embark on a captivating journey through the mind of a fictitious architect, where the ordinary transforms into the extraordinary and structures come alive with personality and purpose.</p>
          </Col>
          <Col sm={10} md={6} className='mx-auto'>
            <LazyLoad height={500} offsetTop={200}>
              <img src={building1} alt="building" className="img-fluid"/>
            </LazyLoad>
          </Col>
        </Row>
        <Row className='mt-4 d-sm-flex justify-content-center align-items-center'>
          <Col sm={10} md={6} className='mx-auto'>
            <LazyLoad height={500} offsetTop={200}>
             <img src={building2} alt="building" className="img-fluid"/>
            </LazyLoad>
          </Col>
          <Col sm={10} md={6} className='mx-auto'>
            <p className='w-80 p-3 fs-5'>
            ArchiVerse is the digital realm where innovative designs and awe-inspiring creations converge, crafted by the boundless imagination of our visionary architect. With a passion for pushing the boundaries of conventional architecture, we strive to redefine the very essence of space, bringing forth transformative experiences that blend art, functionality, and sustainability.
            </p>
          </Col>
        </Row>
        <Row className='mt-4 d-md-flex justify-content-center align-items-center'>
          <Col sm={10} md={6} className='mx-auto mb-3'>
            <p className='w-80 p-3 fs-5'>
            Our architect's unwavering dedication to the craft is evident in every stroke of the pen, every line on the blueprint, and every meticulously crafted structure that graces our portfolio. From towering skyscrapers that pierce the sky to elegant residential spaces that embrace the harmony of nature, our creations blend seamlessly with the surrounding environment while leaving an indelible mark on the urban landscape.
            </p>
          </Col>
          <Col sm={10} md={6} className='mx-auto'>
            <LazyLoad height={500} offsetTop={200}>
              <img src={building3} alt="building" className="img-fluid"/>
            </LazyLoad>
          </Col>
        </Row>
        <Row className='mt-4 d-md-flex justify-content-center align-items-center'>
          <Col sm={10} md={6} className='mx-auto'>
            <LazyLoad height={500} offset={200}>
              <img src={building4} alt="building" className="img-fluid"/>
            </LazyLoad>
          </Col>
          <Col sm={10} md={6} className='mx-auto'>
            <p className='w-80 p-3 fs-5'>
              At ArchiVerse, we believe that architecture is not merely about constructing buildings but about shaping experiences, fostering connections, and inspiring emotions. Each project is approached with a profound understanding of the unique needs and aspirations of our clients, resulting in bespoke designs that reflect their vision, enhance their lives, and stand the test of time.
            </p>
          </Col>
        </Row>
        <div className='d-flex flex-column'>
          <p className='display-5 p-5 text-center w-75 mx-auto my-5'>Unleash your imagination, embrace the extraordinary, and embark on a journey through ArchiVerse—the realm where architectural dreams come alive.</p>
          <LinkContainer to='/contact'>
            <Button variant="outline-dark" size="lg" className='mt-4 px-4 mx-auto'>
              Contact Us
            </Button>
          </LinkContainer>
        </div>
        
      </Container>
    </>
  )
}

export default Home