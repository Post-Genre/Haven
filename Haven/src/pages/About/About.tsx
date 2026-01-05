import "./about.css";
import banner1 from "../../assets/media/banners/banner1.jpg";
import TitleContainer from "../../components/TitleContainer/TitleContainer";
import image1 from "../../assets/media/disco nap/IMG_0768.jpg";
import image2 from "../../assets/media/haven pics/DSCF7307.jpg";
import banner3 from "../../assets/media/banners/djbanner.png";
import obpbanner from "../../assets/media/banners/obpbanner.png";

export default function About() {
  return (
    <div className="about-container">
      <TitleContainer image={obpbanner} text="ABOUT" />

      <div className="about-background-wrapper">
        {/* <img className="about-background-wrapper-image" src={image1} alt="" />
        <img className="about-background-wrapper-image-2" src={image2} alt="" /> */}

        <div className="about-text-container">
          <div className="about-header-and-image">
            <div>
              <h5>WHAT IS HAVEN?</h5>
              <p>
                After twenty years without a venue, live music is back in
                Oakland. Run entirely by dedicated volunteers in the music
                scene, HAVEN opened in January 2025 to bring live music back to
                the neighborhood.
              </p>
            </div>
            <img src={image1} alt="" />
          </div>
          {/* <h5>WHAT IS HAVEN?</h5> */}

          <h5>WHY MUSIC MATTERS IN OAKLAND</h5>
          <p>
            Once the heart of live music in Pittsburgh, Oakland's music scene
            was a space for students and residents to come together and enjoy
            music. After a wave of venue closures in the early 2000s, the music
            community persevered in basements, parking lots, and everywhere in
            between.
            <br />
            <br />
            Post Genre was founded in 2022 to advocate towards a permanent home
            for live music in Oakland. After three years of hosting concerts in
            untraditional spaces, they began to work with local community
            organizations and the city government to open a permanent space in
            January of 2025.
          </p>
          <div className="about-header-and-image">
            <div>
              <h5>HAVENs IMPACT</h5>
              <p>
                In its first year, HAVEN has hosted over 50 concerts, 150 bands
                and welcomed more than 4,500 attendees. HAVEN provides hands-on
                experience and skill-building opportunities in the live music
                industry. Alongside artists and musicians, our team of 70
                dedicated volunteers include photographers, videographers,
                graphic designers, audio and lighting engineers, social media
                coordinators, and more.
              </p>
            </div>
            <img src={image2} alt="" />
          </div>
          {/* <h5>HAVENs IMPACT</h5> */}
        </div>
      </div>
      {/* <div className="about-background-wrapper">
        <img className="about-background-wrapper-image" src={image1} alt="" />
        <div className="about-text-container"> */}
      {/* <div className="about-header-and-image">
            <h5>WHAT IS HAVEN?</h5>
            <img src={banner2} alt="" />
          </div> */}

      {/* </div>
      </div> */}
      {/* <div className="about-text-container">
        <div className="about-header-and-image">
          <h5>WHAT IS HAVEN?</h5>
          <img src={banner2} alt="" />
        </div>
        <p>
          After twenty years without a venue, live music is back in Oakland. Run
          entirely by dedicated volunteers in the music scene, HAVEN opened in
          January 2025 to bring live music back to the neighborhood.
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
          untraditional spaces, they began to work with local community
          organizations and the city government to open a permanent space in
          January of 2025.
        </p>
        <div className="about-header-and-image">
          <h5>HAVENs IMPACT</h5>
          <img src={banner2} alt="" />
        </div>
        <p>
          In its first year, HAVEN has hosted over 50 concerts, 150 bands and
          welcomed more than 4,500 attendees. HAVEN provides hands-on experience
          and skill-building opportunities in the live music industry. Alongside
          artists and musicians, our team of 70 dedicated volunteers include
          photographers, videographers, graphic designers, audio and lighting
          engineers, social media coordinators, and more.
        </p>
      </div> */}
    </div>
  );
}
