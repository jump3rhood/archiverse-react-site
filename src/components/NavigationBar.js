import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import LinkContainer from 'react-router-bootstrap/LinkContainer'
import logo from '../assets/images/logo.svg'

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" variant="light" className='shadow-lg p-2 bg-body rounded'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>
            <img
              alt="archiverse logo"
              src={logo}
              width="170"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to='/'>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/about'>
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contact'>
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/gallery'>
              <Nav.Link>Gallery</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar