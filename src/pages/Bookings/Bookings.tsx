import "./bookings.css";
import eventsBanner from "../../assets/media/banners/madelinebanner2.png";
import TitleContainer from "../../components/TitleContainer/TitleContainer";
import ParagraphAndButton from "../../components/ParagraphAndButton/ParagraphAndButton";

import InterestFormTabs from "../../components/InterestForm/InterestFormTabs";
import ButtonSecondary from "../../components/Button/ButtonSecondary";
import WhatWeOffer from "../../components/WhatWeOffer/WhatWeOffer";
import BookingsInfoCards from "../../components/BookingsInfoCards/BookingsInfoCards";

export default function Bookings() {
  return (
    <div className="bookings-container">
      {/* <Header /> */}
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
        paragraph="Looking to host a concert or special event? Haven offers a fully equipped space designed to fit your events needs. Our 2,000 sqft space is available for bookings including concerts, student club events, networking events, pop-up shops, art exhibitions, and more. We can provide professional lighting and audio, chair and table arrangements, and ticketing services to make your event run smoothly."
      />
      {/* <div className="bookings-cards-container">
        <div className="bookings-card">
          <img src={rental1} alt="" />

          <h5>ARTISTS</h5>
          <p className="small-font">
            Interested in performing at Haven? Please fill out our artist
            interest form below, and our team will get back to you as soon as
            possible.
          </p>
        </div>
        <div className="bookings-card flipped">
          <img src={photo17} alt="" />
          <h5>PRIVATE SOCIAL EVENTS</h5>
          <p className="small-font">
            Interested in hosting a private event at Haven? From audio services
            to digital ticketing, we have you covered to make your future event
            successful.
          </p>
        </div>
        <div className="bookings-card">
          <img src={rental3} alt="" />
          <h5>PAST EVENTS</h5>
          <p className="small-font">
            In addition to live music, Haven has hosted a variety of other
            events, such as club socials, pop-up thrift shops, and so much more!
          </p>
        </div>
      </div> */}
      <BookingsInfoCards />
      <WhatWeOffer />
      <div className="interest-form-tabs">
        <InterestFormTabs />
      </div>
    </div>
  );
}
