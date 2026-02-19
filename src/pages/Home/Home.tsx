import Carousel from "../../components/Carousel/Carousel";
import FAQ from "../../components/FAQ/FAQ";
import UpcomingEvents from "../../components/UpcomingEvents/UpcomingEvents";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import "./home.css";

export default function Home() {
  return (
    <div className="home-container">
      <Carousel />
      <WhoWeAre />
      <UpcomingEvents />
      <FAQ />
    </div>
  );
}
