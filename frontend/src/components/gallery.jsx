import React, { useState } from 'react';
import './style.css'
import { Modal } from 'react-bootstrap'; 
import living from '../assets/living.jpg';
import modernoffice from '../assets/modernoffice.jpg';
import exterior from '../assets/exterior.jpg';
import bedroom from '../assets/bedroom.jpg';
import kitchen from '../assets/kitchen.jpg';
import bathroom from '../assets/bathroom.jpg'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryImages = [
    { id: 1, imgSrc: living, title: 'Living Room Makeover' },
    { id: 2, imgSrc: modernoffice, title: 'Modern Office Space' },
    { id: 3, imgSrc: exterior, title: 'Exterior Wall Paint' },
    { id: 4, imgSrc: bedroom, title: 'Elegant Bedroom Finish' },
    { id: 5, imgSrc: kitchen, title: 'Kitchen Remodel' },
    { id: 6, imgSrc: bathroom, title: 'Stylish Bathroom' }  ];

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };
  return (
    <div className="container mt-5">
    <section className="text-center mb-5">
      <h1 className="display-4">KGK MRF Vapcour Paints Gallery</h1>
      <p>Explore our projects and the vibrant colors of MRF Vapcour paints in action.</p>
    </section>
    <div className="row">
        {galleryImages.map((image) => (
          <div key={image.id} className="col-11 col-sm-6 col-md-4 mb-4">
            <div className="card">
              <img
                src={image.imgSrc}
                alt={image.title}
                className="img-fluid gallery-image"
                onClick={() => handleImageClick(image.imgSrc)}
              />
              <div className="card-body text-center">
                <p className="card-title">{image.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
  </div>
  )
}

export default Gallery;
