import "./about.css";
// import banner1 from "../../assets/media/banners/banner1.jpg";
import TitleContainer from "../../components/TitleContainer/TitleContainer";
import image1 from "../../assets/media/haven pics/IMG_6207-Enhanced-NR_crowd.jpg";
import image2 from "../../assets/media/haven pics/DSC_9097.jpg";
// import banner3 from "../../assets/media/banners/djbanner.png";
import obpbanner from "../../assets/media/banners/obpbanner.png";
// import { useEffect, useRef } from "react";

export default function About() {
  return (
    <div className="about-container">
      <TitleContainer image={obpbanner} text="ABOUT" />
      <div className="text-wrap-container">
        <img src={image1} alt="Haven" className="wrapped-image" />
        <h5>WHAT IS HAVEN?</h5>
        <p>
          After twenty years without a venue, live music is back in Oakland. Run
          by dedicated volunteers in the music scene, HAVEN opened in January
          2025 to bring live music back to the neighborhood.
          <br />
          <br />
        </p>
        <h5>WHY MUSIC MATTERS IN OAKLAND</h5>
        <p>
          Once the heart of live music in Pittsburgh, Oakland's music scene was
          a space for students and residents to come together and enjoy music.
          After a wave of venue closures in the early 2000s, the music community
          persevered in basements, parking lots, and everywhere in between.
          <br />
          <br />
          Post Genre was founded in 2022 to advocate towards a permanent home
          for live music in Oakland. After three years of hosting concerts in
          untraditional spaces, they continued the work with local community
          organizations and musicians to open a permanent space in January of
          2025.
          <br />
          <br />
        </p>
        <img src={image2} alt="Haven" className="wrapped-image" />
        <h5>OUR IMPACT</h5>
        <p>
          In its first year, HAVEN has hosted over 100 events, 200 bands and
          welcomed more than 6,000 attendees. Alongside artists and musicians,
          our team of 50+ dedicated volunteers include photographers,
          videographers, graphic designers, audio and lighting engineers, social
          media coordinators, and more.
          <br />
          <br />
        </p>
      </div>
    </div>
  );
}
