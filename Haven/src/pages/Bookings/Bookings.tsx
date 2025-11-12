import "./bookings.css";
import eventsBanner from "../../assets/media/banners/banner2.jpg";
import TitleContainer from "../../components/TitleContainer/TitleContainer";
import EventInterestForm from "../../components/InterestForm/EventInterestForm";
import ParagraphAndButton from "../../components/ParagraphAndButton/ParagraphAndButton";
import rental1 from "../../assets/media/haven pics/rentalcard1.png";
import rental2 from "../../assets/media/haven pics/rentalcard2.png";
import rental3 from "../../assets/media/haven pics/rentalcard3.png";
import pic1 from "../../assets/media/haven pics/IMG_6230-Enhanced-NR.jpg";
import pic5 from "../../assets/media/haven pics/IMG_0640.jpg";
import photo17 from "../../assets/media/haven pics/IMG_0640.jpg";
import rentalstaging from "../../assets/media/haven pics/IMG_7395.jpg";
import InterestFormTabs from "../../components/InterestForm/InterestFormTabs";
import ButtonSecondary from "../../components/Button/ButtonSecondary";

export default function Bookings() {
  return (
    <div className="bookings-container">
      <TitleContainer image={eventsBanner} text="BOOKINGS" />
      <h3>BOOK HAVEN FOR YOUR NEXT EVENT</h3>
      <ParagraphAndButton
        CustomButton={
          <ButtonSecondary
            text="BOOK YOUR EVENT"
            onClick={() => {
              const faqElement = document.querySelector(".interest-form-tabs");
              faqElement?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        }
        paragraph="Looking to host a concert, showcase, or special event? HAVEN offers a fully equipped space designed for unforgettable experiences. From professional audio and lighting to digital ticketing, we’ve got everything you need to make your event run smoothly."
      />
      <div className="bookings-cards-container">
        <div className="bookings-card">
          <img src={rental1} alt="" />
          <h5>PRIVATE SOCIAL EVENTS</h5>
          <p className="small-font">
            Interested in hosting a concert or live event at HAVEN? From audio
            services to digital ticketing, we have you covered to make your
            future event successful.
          </p>
        </div>
        <div className="bookings-card">
          <img src={photo17} alt="" />
          <h5>PRIVATE SOCIAL EVENTS</h5>
          <p className="small-font">
            Interested in hosting a concert or live event at HAVEN? From audio
            services to digital ticketing, we have you covered to make your
            future event successful.
          </p>
        </div>
        <div className="bookings-card">
          <img src={rental3} alt="" />
          <h5>PRIVATE SOCIAL EVENTS</h5>
          <p className="small-font">
            Interested in hosting a concert or live event at HAVEN? From audio
            services to digital ticketing, we have you covered to make your
            future event successful.
          </p>
        </div>
      </div>
      <div className="what-we-offer">
        <img src={rentalstaging} alt="" />
        <div className="what-we-offer-text">
          <h5>WHAT WE OFFER</h5>
          <p>
            1. Professional audio and lighting <br></br>2. Green room and guest
            services <br></br>3. 24x14’ Permanent stage<br></br>4. Tables and
            chairs <br></br>5. Professional photography
          </p>
        </div>
      </div>
      <div className="interest-form-tabs">
        <InterestFormTabs />
      </div>
    </div>
  );
}
