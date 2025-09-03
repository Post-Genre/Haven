import "./carousel.css";
import { useState } from "react";
import CarouselItem from "../CarouselItem/CarouselItem";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

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
    <div className="carousel-container">
      <FaAngleLeft
        className="angle-button"
        color="white"
        onClick={handlePrevious}
      />
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
      <FaAngleRight
        className="angle-button"
        color="white"
        onClick={handleNext}
      />
    </div>
  );
}
