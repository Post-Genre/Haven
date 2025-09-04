import "./carousel.css";
import { useState } from "react";
import CarouselItem from "../CarouselItem/CarouselItem";
import { FaAngleLeft, FaAngleRight, FaCircle } from "react-icons/fa6";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems = [
    <CarouselItem index={0} />,
    <CarouselItem index={1} />,
    <CarouselItem index={2} />,
    <CarouselItem index={3} />,
    <CarouselItem index={4} />,
    <CarouselItem index={5} />,
  ];

  function handlePrevious() {
    setCurrentSlide(
      currentSlide === 0 ? carouselItems.length - 1 : currentSlide - 1
    );
  }

  function handleNext() {
    setCurrentSlide(
      currentSlide === carouselItems.length - 1 ? 0 : currentSlide + 1
    );
  }

  return (
    <div className="carousel-and-buttons">
      <div className="carousel-container">
        {carouselItems.map((carouselItem, index) => (
          <div
            className={
              currentSlide === index
                ? "current-image"
                : "current-image hide-current-image"
            }
          >
            {carouselItem}
          </div>
        ))}
      </div>
      <div className="carousel-buttons-container">
        <div className="carousel-button angle-button" onClick={handlePrevious}>
          <FaAngleLeft color="white" size={32} />
        </div>
        <div className="carousel-button circle-button">
          <FaCircle color="white" size={40} />
        </div>
        <div className="carousel-button circle-button">
          <FaCircle color="white" size={40} />
        </div>
        <div className="carousel-button circle-button">
          <FaCircle color="white" size={40} />
        </div>
        <div className="carousel-button circle-button">
          <FaCircle color="white" size={40} />
        </div>

        <div className="carousel-button angle-button" onClick={handleNext}>
          <FaAngleRight color="white" size={32} />
        </div>
      </div>
    </div>
  );
}
