"use client"
import { useState } from 'react';
import Image from 'next/image';

const SmallCarousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    const newIndex = (activeIndex === 0) ? images.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (activeIndex === images.length - 1) ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
  };

  return (

    
    <div className="container">
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center">
          <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
            <div className="carousel-inner">
              {images.map((image, index) => (
                <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                  <Image src={image.src} className="d-block mx-auto" width={600} height={500} alt={image.alt} />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev" onClick={handlePrev}>
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next" onClick={handleNext}>
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCarousel;
