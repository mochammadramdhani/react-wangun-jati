import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slideshow = (props) => {
  const slideHeight = "600px"; // Adjust the height as needed

  return (
    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} transitionTime={1500} interval={4500} emulateTouch={true} autoFocus={true} stopOnHover={false} showStatus={false}>
      <div className="carousel-slide z-0" style={{ height: slideHeight }}>
        <img src="/images/heavy machinery.jpg" alt="Slide 1" className="w-full h-full object-cover" />
        {/* <div className="legend">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div> */}
      </div>
    </Carousel>
  );
};

export default Slideshow;
