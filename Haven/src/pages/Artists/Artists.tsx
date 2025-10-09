import ArtistInterestForm from "../../components/InterestForm/ArtistInterestForm";
import "./artists.css";
import banner from "../../assets/media/banners/banner2.jpg";
import TitleContainer from "../../components/TitleContainer/TitleContainer";

export default function Artists() {
  return (
    <div className="artists-page-container">
      <TitleContainer image={banner} text="ARTISTS" />

      <ArtistInterestForm />
    </div>
  );
}
