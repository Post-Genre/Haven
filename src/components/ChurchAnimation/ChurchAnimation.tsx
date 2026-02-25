import "./church-animation.css";

import churchLowres from "../../assets/media/backgrounds/Church-Lowres.png";
import { useEffect, useRef } from "react";
import FlowerBundle from "../FlowerBundle/FlowerBundle.tsx";

export default function ChurchAnimation() {
  const havenTextRef = useRef<HTMLHeadingElement>(null);

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
        <FlowerBundle side="left" />
        <FlowerBundle side="right" />
      </div>

      <div className="church" style={{ height: "fit-content" }}>
        <img src={churchLowres} alt="Church" />
        <div className="website-title-container">
          <h1 ref={havenTextRef} className="website-title">
            HAVEN
          </h1>
          <h5 className="website-subtitle">Oakland's Home for Live Music</h5>
        </div>
      </div>
    </div>
  );
}
