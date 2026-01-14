import ArtistInterestForm from "../../components/InterestForm/ArtistInterestForm";
import "./artists.css";
import banner from "../../assets/media/banners/banner2.jpg";
import TitleContainer from "../../components/TitleContainer/TitleContainer";
import pic1 from "../../assets/media/haven pics/IMG_6230-Enhanced-NR.jpg";

export default function Artists() {
  return (
    <div className="artists-page-container">
      <TitleContainer image={banner} text="ARTISTS" />
      <div className="what-we-offer">
        <img src={pic1} alt="" />
        <div className="what-we-offer-text">
          <h5>WHAT WE OFFER</h5>
          <p>
            1. Professional audio and lighting <br></br>2. Professional
            photography<br></br>3. 24x14’ Permanent stage<br></br>4. Green room
            and guest services
          </p>
        </div>
      </div>

      <ArtistInterestForm />
    </div>
  );
}
