import ButtonTertiary from "../Button/ButtonTertiary";
import "./who-we-are.css";
import banner1 from "../../assets/media/banners/banner1.jpg";
import bottom1 from "../../assets/media/banners/bottom1.jpg";

import TitleContainer from "../TitleContainer/TitleContainer";
import { useNavigate } from "react-router";

export default function WhoWeAre() {
  const navigate = useNavigate();

  return (
    <div className="who-we-are-container">
      <TitleContainer image={banner1} text="WHO WE ARE" />
      <div className="body-container">
        <img src={bottom1} alt="" className="bg-image" />
        <div className="body-text-container">
          <p>
            <span className="content-header"> HAVEN </span> is an independent
            music venue in the heart of Oakland, Pittsburgh’s college town. We
            house a 2,000 sqft venue and event space where we feature live
            entertainment every week!
          </p>
          <ButtonTertiary
            onClick={() => {
              navigate("/about");
            }}
            text="LEARN MORE ABOUT HAVEN"
          />
          <p>
            <span className="content-header"> WHY HAVEN?</span>
          </p>
          <p>
            {/* Once the heart of music in Pittsburgh, Oakland’s vibrant music scene
            was pushed underground after a wave of venue closures in the early
            2000’s. Although these venues left Oakland, the borough’s passion
            for local music persevered.  */}
            Our venue serves as a haven for concerts and events in Pittsburgh’s
            most populated borough. We are the only independent venue in
            Pittsburgh’s college town of Oakland, where 25,000 students live
            within a mile radius of our space.
          </p>
          <ButtonTertiary
            onClick={() => {
              const faqElement = document.querySelector(".faq-section");
              faqElement?.scrollIntoView({ behavior: "smooth" });
            }}
            text="HAVEN FAQ"
          />
        </div>
      </div>
    </div>
  );
}
