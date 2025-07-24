import React from "react";
import ReactDOM from "react-dom/client";
import Carousel from "./carousel";
import Swiper from "swiper/bundle";

// import styles bundle
import "../node_modules/swiper/swiper-bundle.css";

const HomePage: React.FC = () => (
  <div className="max-w-2xl mx-auto mt-10">
    <Carousel />
  </div>
);

const rootElement = document.getElementById("react-root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <HomePage /> {/*this calls the Carousel component and renders it */}
    </React.StrictMode>
  );
}

//initialize Swiper

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  effect: "coverflow",
  coverflowEffect: {
    depth: 1,
    slideShadows: false,
    rotate: 0,
    scale: 0.9,
  },

  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
