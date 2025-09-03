import "./carousel-item.css";
import { useState } from "react";
import JasonPic from "../../assets/media/haven pics/DSCF7307.jpg";

type CarouselItemProps = {
  index: number;
};
export default function CarouselItem({ index }: CarouselItemProps) {
  return (
    <div
      className="carousel-item-container"
      style={{ backgroundImage: `url(${JasonPic})` }}
    >
      <div className="carousel-item-title">
        <h6>Carousel Title</h6>
        <p>
          <i>{index}</i>
        </p>
      </div>
      <button className="carousel-item-button">
        <h6>BUTTON</h6>
      </button>
    </div>
  );
}
