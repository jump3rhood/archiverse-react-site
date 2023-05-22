import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
  return (
    <footer id="footer" className="footer mt-auto pt-4 pb-2 bg-dark">
      <div className="container text-muted">
        <Row>
          <Col sm={12} md={6} lg={4}>
            <h6>Phone</h6>
            <p>+91 234-456-3456</p>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <h6>Email</h6>
            <p>info@archiverse.com</p>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <h6>Address</h6>
            <p>Plot No 234, Road No 12, Banjara Hills, Hyderabad - 500034</p>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <p>&copy; ArchiVerse Inc.</p>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <p>2023</p>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <p>Terms & Conditions</p>
          </Col>
        </Row>
      </div>
  </footer>
  )
}

export default Footer