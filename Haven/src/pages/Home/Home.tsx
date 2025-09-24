import Carousel from "../../components/Carousel/Carousel";
import FAQ from "../../components/FAQ/FAQ";
import UpcomingEvents from "../../components/UpcomingEvents/UpcomingEvents";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import "./home.css";
import blackHavenLogo from "../../assets/media/HAVEN-NEWLOGO 5.png";

export default function Home() {
  return (
    <div className="home-container">
      <div className="logo-and-text-container">
        <img src={blackHavenLogo} alt="" />
        <h5>PITTSBURGH, PA</h5>
      </div>
      <Carousel />
      <WhoWeAre />
      <UpcomingEvents />
      <FAQ />
    </div>
  );
}
