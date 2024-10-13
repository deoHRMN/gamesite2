import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './PromotionalSlider.css'; // Optional custom styling

const slides = [
  { id: 1, title: 'Slide 1', description: 'Promotional Content 1', image: `https://deohrmn.github.io/gamesite1/images/promotion1.jpg` },
  { id: 2, title: 'Slide 2', description: 'Promotional Content 2', image: `https://deohrmn.github.io/gamesite1/images/promotion2.jpg` },
];

const PromotionalSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="promo-slider mt-4 mb-4">
      <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} controls={false} interval={3000}>
        {slides.map((slide) => (
          <Carousel.Item key={slide.id}>
            <img className="d-block w-100 promo-slide-image" src={slide.image} alt={slide.title} />
            <Carousel.Caption className="promo-caption">
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Custom Dots */}
      <div className="dots-container">
        {slides.map((slide, idx) => (
          <span
            key={slide.id}
            className={`dot ${index === idx ? 'active' : ''}`}
            onClick={() => setIndex(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default PromotionalSlider;
