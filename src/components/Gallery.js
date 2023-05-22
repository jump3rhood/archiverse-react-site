import React, {useState} from 'react'
import { Modal } from 'react-bootstrap'
import './Gallery.css'
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'
import img5 from '../assets/images/img5.jpg'
import img6 from '../assets/images/img6.jpg'
import img7 from '../assets/images/img7.jpg'
import img8 from '../assets/images/img8.jpg'
import img9 from '../assets/images/img9.jpg'
import img10 from '../assets/images/img10.jpg'
import img11 from '../assets/images/img11.jpg'
import img12 from '../assets/images/img12.jpg'
import LazyLoad from 'react-lazy-load'

const images = [
  { src: img10, description: 'building10',},
  { src: img11, description: 'building11',},
  { src: img12, description: 'building12',},
  {src: img1, description: 'building1'},
  {src: img2, description: 'building2'},
  { src: img4, description: 'building4',},
  {src: img5, description: 'building5',},
  { src: img8, description: 'building8',},
  { src: img9, description: 'building9',},
  {src: img3, description: 'building3',},
  { src: img7, description: 'building7',},
  { src: img6, description: 'building6',},

]

const Gallery = () => {
  const [modalSrc, setModalSrc] = useState(null);
  const [modalText, setModalText] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleClick = (e) => {
    setShow(true);
    setModalSrc(e.target.src)
    setModalText(e.target.alt)
  }
  return (
    <section className="gallery min-vh-100 bg-light py-5 px-2">
     <div className="container-lg">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          {
            images.map((photo, i) => {
              return (
                <React.Fragment key={i}>
                  <LazyLoad height={350} offset={100}>
                    <div className="col" onClick={handleClick}>
                        <img src={photo.src} className="img-fluid p-2" alt={photo.description} />
                    </div>
                  </LazyLoad>
                </React.Fragment>
              )
            })
          }
        </div>
     </div>
     <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {modalText}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img  
            className='img-fluid'
            src={modalSrc}
            alt="gallery item"
          />
        </Modal.Body>
      </Modal>
  </section>
  )
}

export default Gallery