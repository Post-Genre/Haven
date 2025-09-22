import "./carousel-item.css";
import { useState } from "react";
import JasonPic from "../../assets/media/haven pics/DSCF7307.jpg";

type CarouselItemProps = {
  subtitle: string;
  url: string;
  mainTitle: string;
  image: string;
  buttonText: string;
};
export default function CarouselItem({
  mainTitle,
  subtitle,
  url,
  image,
  buttonText,
}: CarouselItemProps) {
  return (
    <div
      className="carousel-item-container"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="carousel-item-title">
        <h6>{mainTitle}</h6>
        <p>
          <i>{subtitle}</i>
        </p>
      </div>
      <button
        className="carousel-item-button"
        onClick={() => {
          window.open(url, "_blank", "noopener,noreferrer");
        }}
      >
        <h6>{buttonText}</h6>
      </button>
    </div>
  );
}
