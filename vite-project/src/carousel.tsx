import React, { useState, useEffect } from "react";
import styles from "./carousel.module.css"; // Import global styles
const slides = [
  { id: 1, image: "./public/2_14-Spins.png", text: "Slide 1" },
  { id: 2, image: "./public/2_14-Spins.png", text: "Slide 2" },
  { id: 3, image: "./public/2_14-Spins.png", text: "Slide 3" },
];
export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((current - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel__viewport}>
        <div
          className={styles.carousel__track}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map(({ id, image, text }) => (
            <div className={styles.carousel__slide} key={id}>
              <img src={image} className={styles.carousel__image} alt={text} />
              <div className={styles.carousel__overlay}>
                <p className={styles.carousel__text}>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className={`${styles.carousel__button} ${styles.prev}`}
        onClick={prevSlide}
      >
        ‹
      </button>
      <button
        className={`${styles.carousel__button} ${styles.next}`}
        onClick={nextSlide}
      >
        ›
      </button>
    </div>
  );
}
