import React, { useState } from 'react'
import { FloatingLabel, Form, Button } from 'react-bootstrap'
import LazyLoad from 'react-lazy-load';
import home2 from '../assets/images/home-secondary.jpg'

const Contact = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="container mt-5">
      <h1 className='display-4 p-3'>CONTACT US</h1>
      <div className="row mb-5 p-3 gx-4">
        <div className="col p-4 col-12  col-md-10 col-lg-4 mb-5">
          <h6 className='mb-2 p-1'>ArchiVerse</h6>
          <p className='p-1'>"ArchiVerse", is an interior and exterior design firm with expertise in residential & commercial.</p>
          <LazyLoad height={500} offset={200}>
          <img
            className='img-fluid rounded w-70'
            src={home2} 
            alt="small building"
            />
          </LazyLoad>
          
        </div>
        <div className="col p-4 col-12  col-md-10 col-lg-4 mb-5">
          <h6 className='mb-2 p-1'>Contact Details</h6>
          <p className='p-1'>
          Phone : +91 234-456-3456  
          </p>
          <p className='p-1'>
          Mail : info@archiverse.com
          </p>
          <p className='p-1 w-80'>
          Address : Plot No 234, Road No 12, Banjara Hills, Hyderabad - 500034
          </p>
        </div>
        <div className="col col-12  col-md-10 col-lg-4 mb-5">
          <h6 className='mb-3 p-1'>Contact Form</h6>
          <form onSubmit={handleSubmit}>
          <FloatingLabel
              controlId="floatingInput"
              label="Name"
              className="mb-3"
            >
              <Form.Control type="text" value={name} placeholder="Your name" onChange={(e) => setName(e.target.value)} required/>
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" value={email} placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} required/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Phone">
              <Form.Control type="text" value={phone} placeholder="Phone" onChange={(e) => setPhone(e.target.value)} required/>
            </FloatingLabel>
           
            <FloatingLabel controlId="floatingTextarea2" label="Your Message">
              <Form.Control className='my-2'
                as="textarea"
                value={message}
                placeholder="Leave a message here"
                style={{ height: '100px' }}
                onChange={(e) => setMessage(e.target.value)} required
              />
            </FloatingLabel>
            <Button type="submit" className='my-3' size="lg" variant="outline-dark"> 
              SUBMIT
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact