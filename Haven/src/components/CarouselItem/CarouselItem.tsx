import "./carousel-item.css";
import { useState } from "react";
import JasonPic from "../../assets/media/haven pics/DSCF7307.jpg";
import { useNavigate } from "react-router";

type CarouselItemProps = {
  subtitle: string;
  url: string;
  mainTitle: string;
  image: string;
  buttonText: string;
  routeInPage?: boolean;
};
export default function CarouselItem({
  mainTitle,
  subtitle,
  url,
  image,
  buttonText,
  routeInPage,
}: CarouselItemProps) {
  const navigate = useNavigate();
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
          {
            routeInPage
              ? navigate(url)
              : window.open(url, "_blank", "noopener,noreferrer");
          }
        }}
      >
        <h6>{buttonText}</h6>
      </button>
    </div>
  );
}
