import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Section = ({ images, description }) => {
  return (
    <div className="section">
      <div className="carousel">
        <Carousel>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Carousel Image ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Section;
