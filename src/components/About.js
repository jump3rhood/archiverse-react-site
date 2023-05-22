import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import profile from '../assets/images/Profile.jpg'
const About = () => {
  return (
   
      <section className="about-section">
        <Container className="mt-4">
          <h2 className='my-5 text-center'>About ArchiVerse</h2>
          <Row className="p-3">
            <Col md={12} lg={6}>
              <p>
                ArchiVerse is the brainchild of visionary architect Jack Smith, a creative force behind some of the most iconic and groundbreaking architectural designs of our time. With Jack Smith's extensive experience and unwavering passion for the craft, ArchiVerse has become synonymous with innovation, elegance, and transformative design.
                With a solid foundation in architectural studies from New York University, Jack Smith has honed their skills and pushed the boundaries of conventional design, constantly seeking new possibilities and fresh perspectives.
              </p>
              <p> 
                At ArchiVerse, we believe that architecture is not just about constructing buildings; it's about creating immersive experiences, fostering connections, and shaping environments that positively impact people's lives. Jack Smith's design philosophy centers around a deep understanding of the human experience, integrating functionality, aesthetics, and sustainability into each project.
                Our architectural solutions are born from a collaborative approach, where client aspirations and project requirements serve as the foundation for innovation. By listening attentively to our clients' needs and understanding the unique context of each project, we create designs that are tailored to their vision, reflecting their values and creating spaces that exceed expectations.
              </p>
             
            </Col>
            <Col md={12} lg={6} className='d-flex justify-content-center align-items-center'>
              <img className='img-fluid'
                src={profile}
                alt="picture of Jack Smith, Founder of ArchiVerse"
              />
            </Col>
          </Row>
          <p className='mb-5 p-3'>We invite you to explore our portfolio, witness the fusion of art and science, and envision the possibilities that lie within the realm of ArchiVerse. Together, let us embark on a journey to transform spaces, inspire lives, and shape the architectural landscape of tomorrow.
              </p>
        </Container>
      </section>
  )
}
export default About;


