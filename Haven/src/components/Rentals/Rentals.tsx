import "./rentals.css";
import eventsBanner from "../../assets/media/banners/events-banner.png";
import TitleContainer from "../TitleContainer/TitleContainer";
import EventInterestForm from "../InterestForm/EventInterestForm";
import ParagraphAndButton from "../ParagraphAndButton/ParagraphAndButton";
import rental1 from "../../assets/media/haven pics/rentalcard1.png";
import rental2 from "../../assets/media/haven pics/rentalcard2.png";
import rental3 from "../../assets/media/haven pics/rentalcard3.png";
import pic1 from "../../assets/media/haven pics/IMG_6230-Enhanced-NR.jpg";
import pic5 from "../../assets/media/haven pics/IMG_0640.jpg";

export default function Rentals() {
  return (
    <div className="rentals-container">
      <TitleContainer image={eventsBanner} text="RENTALS" />
      <h3>BOOK HAVEN FOR YOUR NEXT EVENT</h3>
      <ParagraphAndButton
        link="https://google.com"
        buttonText="BOOK YOUR RENTAL"
        paragraph="Looking to host a concert, showcase, or special event? HAVEN offers a fully equipped space designed for unforgettable experiences. From professional audio and lighting to digital ticketing, we’ve got everything you need to make your event run smoothly."
      />
      <div className="rental-cards-container">
        <div className="rental-card">
          <img src={rental1} alt="" />
          <h5>PRIVATE SOCIAL EVENTS</h5>
          <p className="small-font">
            Interested in hosting a concert or live event at HAVEN? From audio
            services to digital ticketing, we have you covered to make your
            future event successful.
          </p>
        </div>
        <div className="rental-card">
          <img src={rental2} alt="" />
          <h5>PRIVATE SOCIAL EVENTS</h5>
          <p className="small-font">
            Interested in hosting a concert or live event at HAVEN? From audio
            services to digital ticketing, we have you covered to make your
            future event successful.
          </p>
        </div>
        <div className="rental-card">
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
        <img src={pic1} alt="" />
        <div className="what-we-offer-text">
          <h5>WHAT WE OFFER</h5>
          <p>
            1. Professional audio and lighting <br></br>2. Green room and guest
            services <br></br>3. 24x14’ Permanent stage<br></br>4. Tables and
            chairs
          </p>
        </div>
      </div>
      <EventInterestForm />
    </div>
  );
}
