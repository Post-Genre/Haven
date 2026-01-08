import "./bookings.css";
import eventsBanner from "../../assets/media/banners/madelinebanner2.png";
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
import Header from "../../components/Header/Header";
import { useEffect, useRef, useState } from "react";
import { RiFlaskLine } from "react-icons/ri";
import WhatWeOfferModal from "../../components/WhatWeOfferModal/WhatWeOfferModal";

export default function Bookings() {
  const [spanVisible, setSpanVisible] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const ref = useRef<HTMLDivElement>(null);

  const paragraphs = [
    "Haven is equipped with industry-standard professional audio and lighting equipment, along with talented personnel ready to staff any and all events.",
    "Our spacious stage allows for a variety of different events in addition to live music, such as comedy and drag shows, public speaking events, and more.",
    "We have a talented team of photographers and videographers, all skilled in capturing the best moments during our events. We aim to have photographers staffed at all live music events.",
    "We process all event tickets through a digital ticketing app, allowing us to easily check in guests and track tickets sales for our events.",
    "We have a green room that features a private entrance, restroom, fridge & freezer, microwave and more.",
    "We are able to provide table and/or chair arrangements for any private events, accomodating up to 80 guests.",
  ];

  //checks for pointer/mouse clicks, and if click happens outside the mobile-nav-bar ref, close the nav bar
  useEffect(() => {
    function handlePointerDown(e: PointerEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        console.log("here");
        handleMouseLeave();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  function handleMouseEnter(num: Number) {
    setSpanVisible((prevState) =>
      prevState.map((item, idx) =>
        item === true ? !item : idx === num ? !item : item
      )
    );
  }

  function handleMouseLeave() {
    setSpanVisible([false, false, false, false, false, false]);
  }

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
      <div className="bookings-cards-container">
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
      </div>
      {/* <div className="what-we-offer">
        <img src={rentalstaging} alt="" />
        <div className="what-we-offer-text">
          <h5>WHAT WE OFFER</h5>
          <p>
            1. Professional audio and lighting <br></br>2. Green room and guest
            services <br></br>3. 24x14’ Permanent stage<br></br>4. Tables and
            chairs <br></br>5. Professional photography
          </p>
        </div>
      </div> */}
      <div className="what-we-offer-new" ref={ref}>
        <h5>WHAT WE OFFER</h5>
        <div className="new-thing">
          <div className="what-we-offer-grid">
            <p
              className="what-we-offer-grid-box"
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
            >
              PROFESSIONAL AUDIO & LIGHTING
              <span
                className={
                  spanVisible[0] ? "smallest-font active" : "smallest-font"
                }
              >
                {paragraphs[0]}
              </span>
            </p>
            <p
              className="what-we-offer-grid-box"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              24' x 14' PERMANENT STAGE
              <span
                className={
                  spanVisible[1] ? "smallest-font active" : "smallest-font"
                }
              >
                {paragraphs[1]}
              </span>
            </p>

            <p
              className="what-we-offer-grid-box"
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              PHOTO & VIDEO SERVICES
              <span
                className={
                  spanVisible[2] ? "smallest-font active" : "smallest-font"
                }
              >
                {paragraphs[2]}
              </span>
            </p>

            <p
              className="what-we-offer-grid-box"
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
            >
              DIGITAL TICKETING SERVICES
              <span
                className={
                  spanVisible[3] ? "smallest-font active" : "smallest-font"
                }
              >
                {paragraphs[3]}
              </span>
            </p>

            <p
              className="what-we-offer-grid-box"
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
            >
              GREEN ROOM AND GUEST SERVICES
              <span
                className={
                  spanVisible[4] ? "smallest-font active" : "smallest-font"
                }
              >
                {paragraphs[4]}
              </span>
            </p>

            <p
              className="what-we-offer-grid-box"
              onMouseEnter={() => handleMouseEnter(5)}
              onMouseLeave={handleMouseLeave}
            >
              TABLES AND CHAIRS
              <span
                className={
                  spanVisible[5] ? "smallest-font active" : "smallest-font"
                }
              >
                {paragraphs[5]}
              </span>
            </p>
          </div>
          <div className="what-we-offer-grid-mobile">
            <p
              className="what-we-offer-grid-box"
              onClick={() => handleMouseEnter(0)}
              // onMouseLeave={handleMouseLeave}
            >
              PROFESSIONAL AUDIO & LIGHTING
            </p>
            {spanVisible[0] && (
              <WhatWeOfferModal
                onClose={handleMouseLeave}
                text={paragraphs[0]}
              />
            )}
            <p
              className="what-we-offer-grid-box"
              onClick={() => handleMouseEnter(1)}
              // onMouseLeave={handleMouseLeave}
            >
              24' x 14' PERMANENT STAGE
            </p>
            {spanVisible[1] && (
              <WhatWeOfferModal
                onClose={handleMouseLeave}
                text={paragraphs[1]}
              />
            )}
            <p
              className="what-we-offer-grid-box"
              onClick={() => handleMouseEnter(2)}
              // onMouseLeave={handleMouseLeave}
            >
              PHOTO & VIDEO SERVICES
            </p>
            {spanVisible[2] && (
              <WhatWeOfferModal
                onClose={handleMouseLeave}
                text={paragraphs[2]}
              />
            )}
            <p
              className="what-we-offer-grid-box"
              onClick={() => handleMouseEnter(3)}
              // onMouseLeave={handleMouseLeave}
            >
              DIGITAL TICKETING SERVICES
            </p>
            {spanVisible[3] && (
              <WhatWeOfferModal
                onClose={handleMouseLeave}
                text={paragraphs[3]}
              />
            )}
            <p
              className="what-we-offer-grid-box"
              onClick={() => handleMouseEnter(4)}
              // onMouseLeave={handleMouseLeave}
            >
              GREEN ROOM AND GUEST SERVICES
            </p>
            {spanVisible[4] && (
              <WhatWeOfferModal
                onClose={handleMouseLeave}
                text={paragraphs[4]}
              />
            )}
            <p
              className="what-we-offer-grid-box"
              onClick={() => handleMouseEnter(5)}
              // onMouseLeave={handleMouseLeave}
            >
              TABLES AND CHAIRS
            </p>
            {spanVisible[5] && (
              <WhatWeOfferModal
                onClose={handleMouseLeave}
                text={paragraphs[5]}
              />
            )}
          </div>
        </div>
      </div>
      <div className="interest-form-tabs">
        <InterestFormTabs />
      </div>
    </div>
  );
}
