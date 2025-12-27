import "./church-animation.css";

import churchLowres from "../../assets/media/backgrounds/Church-Lowres.png";
import backgroundWrapper from "../../assets/media/backgrounds/psychbackground_lowres.jpg";
import blackHavenLogo from "../../assets/media/havenlogo-black-updated.png";
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

      {/* <div className="website-title">
        <div className="logo-and-text-container">
          <img src={blackHavenLogo} alt="HAVEN" />
        </div>
      </div> */}
    </div>
  );
}
