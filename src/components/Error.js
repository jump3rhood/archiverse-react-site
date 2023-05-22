import React from 'react'
import Container from 'react-bootstrap/Container'
import './Error.css'

const Error = () => {
  return (
    <Container id="error" className="d-flex justify-content-center align-items-center mt-5">
      <p className='display-1'>404 Page Not Found!</p>
    </Container>
  )
}

export default Error