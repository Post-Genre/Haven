import "./flower-bundle.css";
import { useEffect, useRef } from "react";
import lily4left from "../../assets/media/flowers/flowers_L_downscaled/lily4.png";
import lily5left from "../../assets/media/flowers/flowers_L_downscaled/lily5.png";
import lily2flipleft from "../../assets/media/flowers/flowers_L_downscaled/lily2-flip.png";
import lily2left from "../../assets/media/flowers/flowers_L_downscaled/lily2.png";
import lily4right from "../../assets/media/flowers/flowers_R_downscaled/lily4.png";
import lily1right from "../../assets/media/flowers/flowers_R_downscaled/lily1.png";
import lily3right from "../../assets/media/flowers/flowers_R_downscaled/lily3.png";

interface FlowerBundleProps {
  side: "left" | "right";
}

export default function FlowerBundle({ side }: FlowerBundleProps) {
  const bundleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const flowerClass = side === "left" ? ".flowerL" : ".flowerR";
    const flowers = bundleRef.current?.querySelectorAll(flowerClass);
    const totalDuration = 2;

    if (flowers) {
      flowers.forEach((flower, index) => {
        const delayFraction = (index + 1) / flowers.length;
        const delay = totalDuration * delayFraction;
        (flower as HTMLElement).style.setProperty("--animation-delay", `-${delay}s`);
      });
    }
  }, [side]);

  if (side === "left") {
    return (
      <div ref={bundleRef} className="flower-bundleL">
        <img src={lily4left} className="flowerL flower4" alt="Flower 4" />
        <img src={lily5left} className="flowerL flower3" alt="Flower 3" />
        <img src={lily2flipleft} className="flowerL flower1" alt="Flower 1" />
        <img src={lily2left} className="flowerL flower2" alt="Flower 2" />
      </div>
    );
  }

  return (
    <div ref={bundleRef} className="flower-bundleR">
      <img src={lily4right} className="flowerR flower7" alt="Flower 3" />
      <img src={lily1right} className="flowerR flower5" alt="Flower 1" />
      <img src={lily4right} className="flowerR flower6" alt="Flower 2" />
      <img src={lily3right} className="flowerR flower8" alt="Flower 4" />
    </div>
  );
}
