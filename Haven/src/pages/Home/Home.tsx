import Carousel from "../../components/Carousel/Carousel";
import FAQ from "../../components/FAQ/FAQ";
import UpcomingEvents from "../../components/UpcomingEvents/UpcomingEvents";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import "./home.css";
import blackHavenLogo from "../../assets/media/havenlogo-black-updated.png";
import ChurchAnimation from "../../components/ChurchAnimation/ChurchAnimation";
import Header from "../../components/Header/Header";

export default function Home() {
  return (
    <div className="home-container">
      <ChurchAnimation />
      {/* <Header /> */}
      <div className="logo-and-text-container">
        <img src={blackHavenLogo} alt="HAVEN" />
      </div>
      <Carousel />
      <WhoWeAre />
      <UpcomingEvents />
      <FAQ />
    </div>
  );
}
