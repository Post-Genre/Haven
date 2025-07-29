import ButtonTertiary from "../Button/ButtonTertiary";
import "./who-we-are.css";
import banner1 from "../../assets/media/banners/banner1.jpg";
import bottom1 from "../../assets/media/backgrounds/bottom1.png";

import TitleContainer from "../TitleContainer/TitleContainer";

export default function WhoWeAre() {
  return (
    <div className="who-we-are-container">
      <TitleContainer image={banner1} text="WHO WE ARE" />
      <div className="body-container">
        <img src={bottom1} alt="" className="bg-image" />
        <p>
          <span className="content-header"> HAVEN </span> is an independent
          music venue in the heart of Pittsburgh’s Oakland neighborhood. The
          venue is operated by{" "}
          <a href="https://pg.media" target="_blank">
            <u>
              <i>Post Genre,</i>
            </u>
          </a>{" "}
          a Pittsburgh-based organization dedicated to enriching the local
          community through concerts, event production training, and more.
        </p>
        <ButtonTertiary link="google.com" text="LEARN MORE ABOUT POST GENRE" />
        <p>
          <span className="content-header"> WHY HAVEN?</span>
        </p>
        <p>
          Once the heart of music in Pittsburgh, Oakland’s vibrant music scene
          was pushed underground after a wave of venue closures in the early
          2000’s. Although these venues left Oakland, the borough’s passion for
          local music persevered.
        </p>
        <ButtonTertiary link="google.com" text="HAVEN FAQ" />
      </div>
    </div>
  );
}
