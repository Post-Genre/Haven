import "./church-animation.css";

import churchLowres from "../../assets/media/backgrounds/Church-Lowres.png";
import backgroundWrapper from "../../assets/media/backgrounds/psychbackground_lowres.jpg";
import blackHavenLogo from "../../assets/media/havenlogo-black-updated.png";

export default function ChurchAnimation() {
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
