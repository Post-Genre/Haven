import "./church-animation.css";

import churchLowres from "../../assets/media/backgrounds/Church-Lowres.png";
import backgroundWrapper from "../../assets/media/backgrounds/psychbackground_lowres.jpg";
import blackHavenLogo from "../../assets/media/havenlogo-black-updated.png";
import lily4left from "../../assets/media/flowers/flowers_L_downscaled/lily4.png";
import lily5left from "../../assets/media/flowers/flowers_L_downscaled/lily5.png";
import lily2flipleft from "../../assets/media/flowers/flowers_L_downscaled/lily2-flip.png";
import lily2left from "../../assets/media/flowers/flowers_L_downscaled/lily2.png";
import lily4right from "../../assets/media/flowers/flowers_R_downscaled/lily4.png";
import lily1right from "../../assets/media/flowers/flowers_R_downscaled/lily1.png";
import lily3right from "../../assets/media/flowers/flowers_R_downscaled/lily3.png";

import { useEffect } from "react";

export default function ChurchAnimation() {
  const scrollItem = scroll;

  function adjustLetterSpacing() {
    console.log("scroll");
    let word = document.getElementById("animated-word");
    if (!word) return;
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

    word.style.letterSpacing = `${letterSpacing}px`;
    // word.style.marginLeft = `${letterSpacing * 10}px`;
    word.style.transform = `translateX(${letterSpacing * 0.5}px)`;
  }

  useEffect(() => {
    window.addEventListener("scroll", adjustLetterSpacing);
    // document.addEventListener("scroll", adjustLetterSpacing);

    return () => window.removeEventListener("scroll", adjustLetterSpacing);
  }, []);

  return (
    <div className="church-animation-container">
      <img className="church-image" src={churchLowres} alt="Church" />
      <h1 id="animated-word" className="website-title">
        HAVEN
      </h1>

      {/* <div className="flowers">
        <div id="flower-bundleL" className="flower-bundleL">
          <img src={lily4left} className="flowerL flower4" alt="Flower 4" />
          <img src={lily5left} className="flowerL flower3" alt="Flower 3" />

          <img src={lily2flipleft} className="flowerL flower1" alt="Flower 1" />
          <img src={lily2left} className="flowerL flower2" alt="Flower 2" />
        </div>
        <div id="flower-bundleR" className="flower-bundleR">
          <img src={lily4right} className="flowerR flower7" alt="Flower 3" />
          <img src={lily1right} className="flowerR flower5" alt="Flower 1" />
          <img src={lily4right} className="flowerR flower6" alt="Flower 2" />
          <img src={lily3right} className="flowerR flower8" alt="Flower 4" />
        </div>
      </div> */}

      {/* <div className="website-title">
        <div className="logo-and-text-container">
          <img src={blackHavenLogo} alt="HAVEN" />
        </div>
      </div> */}
    </div>
  );
}
