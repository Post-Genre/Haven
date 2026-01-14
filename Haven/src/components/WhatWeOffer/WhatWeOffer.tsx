import "./what-we-offer.css";
import WhatWeOfferModal from "../WhatWeOfferModal/WhatWeOfferModal";
import { useState, useEffect, useRef } from "react";

export default function WhatWeOffer() {
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
    "Haven is equipped with industry-standard professional audio and lighting equipment, along with personnel ready to staff any and all events.",
    "Our spacious stage allows for a variety of different events in addition to live music, such as comedy and drag shows, public speaking events, and more.",
    "We have a team of photographers and videographers available to capture the best moments during any of our events. ",
    "We process all event tickets through a digital ticketing app, allowing us to easily check in guests and track tickets sales for our events.",
    "We have a green room that features a private entrance, restroom, fridge & freezer, microwave and more.",
    "We are able to provide table and/or chair arrangements for any private events, accommodating up to 80 guests.",
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
            <WhatWeOfferModal onClose={handleMouseLeave} text={paragraphs[0]} />
          )}
          <p
            className="what-we-offer-grid-box"
            onClick={() => handleMouseEnter(1)}
            // onMouseLeave={handleMouseLeave}
          >
            24' x 14' PERMANENT STAGE
          </p>
          {spanVisible[1] && (
            <WhatWeOfferModal onClose={handleMouseLeave} text={paragraphs[1]} />
          )}
          <p
            className="what-we-offer-grid-box"
            onClick={() => handleMouseEnter(2)}
            // onMouseLeave={handleMouseLeave}
          >
            PHOTO & VIDEO SERVICES
          </p>
          {spanVisible[2] && (
            <WhatWeOfferModal onClose={handleMouseLeave} text={paragraphs[2]} />
          )}
          <p
            className="what-we-offer-grid-box"
            onClick={() => handleMouseEnter(3)}
            // onMouseLeave={handleMouseLeave}
          >
            DIGITAL TICKETING SERVICES
          </p>
          {spanVisible[3] && (
            <WhatWeOfferModal onClose={handleMouseLeave} text={paragraphs[3]} />
          )}
          <p
            className="what-we-offer-grid-box"
            onClick={() => handleMouseEnter(4)}
            // onMouseLeave={handleMouseLeave}
          >
            GREEN ROOM AND GUEST SERVICES
          </p>
          {spanVisible[4] && (
            <WhatWeOfferModal onClose={handleMouseLeave} text={paragraphs[4]} />
          )}
          <p
            className="what-we-offer-grid-box"
            onClick={() => handleMouseEnter(5)}
            // onMouseLeave={handleMouseLeave}
          >
            TABLES AND CHAIRS
          </p>
          {spanVisible[5] && (
            <WhatWeOfferModal onClose={handleMouseLeave} text={paragraphs[5]} />
          )}
        </div>
      </div>
    </div>
  );
}
