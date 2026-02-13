import "./church-animation.css";

import churchLowres from "../../assets/media/backgrounds/Church-Lowres.png";
import lily4left from "../../assets/media/flowers/flowers_L_downscaled/lily4.png";
import lily5left from "../../assets/media/flowers/flowers_L_downscaled/lily5.png";
import lily2flipleft from "../../assets/media/flowers/flowers_L_downscaled/lily2-flip.png";
import lily2left from "../../assets/media/flowers/flowers_L_downscaled/lily2.png";
import lily4right from "../../assets/media/flowers/flowers_R_downscaled/lily4.png";
import lily1right from "../../assets/media/flowers/flowers_R_downscaled/lily1.png";
import lily3right from "../../assets/media/flowers/flowers_R_downscaled/lily3.png";

import { useEffect, useRef } from "react";

export default function ChurchAnimation() {
  const flowerBundleLRef = useRef<HTMLDivElement>(null);
  const flowerBundleRRef = useRef<HTMLDivElement>(null);
  const havenTextRef = useRef<HTMLHeadingElement>(null);

  // Initialize flower animation delays
  useEffect(() => {
    const flowersL = flowerBundleLRef.current?.querySelectorAll(".flowerL");
    const flowersR = flowerBundleRRef.current?.querySelectorAll(".flowerR");
    const totalDuration = 2;

    if (flowersL) {
      flowersL.forEach((flower, index) => {
        const delayFraction = (index + 1) / flowersL.length;
        const delay = totalDuration * delayFraction;
        (flower as HTMLElement).style.setProperty("--animation-delay", `-${delay}s`);
      });
    }

    if (flowersR) {
      flowersR.forEach((flower, index) => {
        const delayFraction = (index + 1) / flowersR.length;
        const delay = totalDuration * delayFraction;
        (flower as HTMLElement).style.setProperty("--animation-delay", `-${delay}s`);
      });
    }
  }, []);

  // Handle letter spacing on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Adjust letter spacing for HAVEN text
      if (havenTextRef.current) {
        const scrollPosition = window.scrollY;
        const maxSpacing = 40;
        const startScroll = 0;
        const endScroll = window.innerHeight * 0.5;

        let letterSpacing = window.innerWidth < 500 ? 0 : 0;
        if (scrollPosition >= startScroll && scrollPosition <= endScroll) {
          letterSpacing += (scrollPosition / endScroll) * maxSpacing;
        } else if (scrollPosition > endScroll) {
          letterSpacing = maxSpacing;
        }

        havenTextRef.current.style.letterSpacing = `${letterSpacing}px`;
        havenTextRef.current.style.transform = `translateX(${
          letterSpacing * 0.5
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="church-animation-container">
      <div className="flowers">
        <div ref={flowerBundleLRef} className="flower-bundleL">
          <img src={lily4left} className="flowerL flower4" alt="Flower 4" />
          <img src={lily5left} className="flowerL flower3" alt="Flower 3" />
          <img src={lily2flipleft} className="flowerL flower1" alt="Flower 1" />
          <img src={lily2left} className="flowerL flower2" alt="Flower 2" />
        </div>
        <div ref={flowerBundleRRef} className="flower-bundleR">
          <img src={lily4right} className="flowerR flower7" alt="Flower 3" />
          <img src={lily1right} className="flowerR flower5" alt="Flower 1" />
          <img src={lily4right} className="flowerR flower6" alt="Flower 2" />
          <img src={lily3right} className="flowerR flower8" alt="Flower 4" />
        </div>
      </div>

      <div className="church" style={{ height: "fit-content" }}>
        <img src={churchLowres} alt="Church" />
        <h1 ref={havenTextRef} className="website-title">
          HAVEN
        </h1>
      </div>
    </div>
  );
}
