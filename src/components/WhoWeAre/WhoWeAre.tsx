import ButtonTertiary from "../Button/ButtonTertiary";
import "./who-we-are.css";
import banner1 from "../../assets/media/banners/banner1.jpg";
import bottom1 from "../../assets/media/banners/bottom1.jpg";

import TitleContainer from "../TitleContainer/TitleContainer";

export default function WhoWeAre() {
  return (
    <div className="who-we-are-container">
      <TitleContainer image={banner1} text="WHO WE ARE" />
      <div className="body-container">
        <img src={bottom1} alt="" className="bg-image" />
        <div className="body-text-container">
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
          <ButtonTertiary
            link="google.com"
            text="LEARN MORE ABOUT POST GENRE"
          />
          <p>
            <span className="content-header"> WHY HAVEN?</span>
          </p>
          <p>
            The opening of HAVEN brings an end to the two-decade long absence of
            permanent music venues in Oakland, and represents a culmination of
            the community-driven creative energy that has sustained the
            neighborhood’s music scene for the last twenty years.
          </p>
          <ButtonTertiary link="google.com" text="HAVEN FAQ" />
        </div>
      </div>
    </div>
  );
}
