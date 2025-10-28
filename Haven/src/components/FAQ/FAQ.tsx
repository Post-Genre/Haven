import "./faq.css";
import FAQItem from "./FAQItem";
import FAQBanner from "../../assets/media/banners/banner4.jpg";
import TitleContainer from "../TitleContainer/TitleContainer";

export default function FAQ() {
  return (
    <section className="faq-section">
      {/* <div className="faq-banner">
        <h2 className="faq-title">FAQ</h2>
      </div> */}

      <TitleContainer image={FAQBanner} text="FAQ" />
      <div className="faq-list">
        <FAQItem
          question="Where is HAVEN?"
          answer={
            <p>
              HAVEN is at 401 Atwood Street in Pittsburgh’s Oakland
              neighborhood. We’re a short walk from the University of
              Pittsburgh, Carnegie Mellon University, and Carlow University.
              <br />
              <br />
              <a
                href="https://www.google.com/maps/dir//401+Atwood+St,+Pittsburgh,+PA+15213/@40.4380792,-80.0360765,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8834f1e595444105:0xbd19f85eed9d81e!2m2!1d-79.9536756!2d40.4381085?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="faq-link"
              >
                Directions to HAVEN
              </a>
            </p>
          }
        />

        {/* <FAQItem
          question="Where can I get event tickets?"
          answer={
            <p>
              Tickets are sold online and at the door (cash or card). We
              recommend purchasing in advance in order to save money and
              guarantee entry. See the respective listing on{" "}
              <a className="faq-link" href="link-to-events">
                the events page{" "}
              </a>{" "}
              to purchase tickets.
            </p>
          }
        /> */}

        {/* <FAQItem
          question="What time do shows usually start and end?"
          answer={
            <p>
              Unless stated otherwise on the event listing, doors open at 7:00
              PM and music starts at 8:00 PM. Most shows end between 10:00 and
              10:30 PM.
            </p>
          }
        /> */}

        <FAQItem
          question="Is HAVEN all ages?"
          answer={
            <p>
              Yes! All shows at HAVEN are open to all ages, unless stated
              otherwise on the event page. Alcohol is prohibited at events.
              <br /> <br />
              <a
                href="https://www.instagram.com/p/DEpqra4v7PV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                target="_blank"
                className="faq-link"
              >
                Read more about the venue policies for HAVEN{" "}
              </a>
            </p>
          }
        />

        {/* <FAQItem
          question="What transit options are there?"
          answer={
            <p>
              Most Pittsburgh Regional Transit buses through Oakland stop on
              Forbes or Fifth Avenue, just a short walk away. There’s also a
              POGOH bike‑share station right outside the venue. We highly
              recommend getting to HAVEN by foot, bike, or transit, as parking
              is limited.
            </p>
          }
        /> */}

        <FAQItem
          question="Where can I park?"
          answer={
            <p>
              Paid parking is available two blocks from HAVEN, near Forbes
              Avenue on Atwood and Meyran Streets. Additionally, the
              Forbes-Semple Garage is a five-minute walk away and costs $6.00 on
              weekends after 4 p.m.
              {/* <a className="faq-link" href="link-to-directions">
                See directions to the Forbes–Semple Garage.
              </a> */}
              <br /> <br />
              <a
                className="faq-link"
                href="https://www.google.com/maps?client=safari&rls=en&oe=UTF-8&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KVdVGlGH8TSIMUn7tNYic0zG&daddr=210+Meyran+Ave,+Pittsburgh,+PA+15213"
                target="_blank"
              >
                Directions to the Forbes-Semple Garage
              </a>
            </p>
          }
        />

        <FAQItem
          question="How do I find out about upcoming shows?"
          answer={
            <p>
              We post all upcoming events on the{" "}
              <a className="faq-link" href="/events">
                events page
              </a>{" "}
              and on Instagram. Following us on social media is the best way to
              stay updated on the latest events!
            </p>
          }
        />

        {/* <FAQItem
          question="Do you serve food or drinks?"
          answer={
            <p>
              Water and non-alcoholic beverages are sold inside. We do not serve
              food, but there are plenty of nearby restaurants in Oakland!
            </p>
          }
        /> */}

        {/* <FAQItem
          question="What accessibility options are available?"
          answer={
            <p>
              Handicapped parking is available nearby on Atwood Street, and the
              main space of the venue is ramp-accessible. If any other
              accommodations are needed to enjoy the show, please let a staff
              member know. We are happy to help!
            </p>
          }
        /> */}

        {/* <FAQItem
          question="Can my band play at HAVEN?"
          answer={
            <p>
              Of course! We are always open to booking new events. Please fill
              out the{" "}
              <a className="faq-link" href="link-to-form">
                artist interest form
              </a>
              , and we will get back to you promptly.
            </p>
          }
        /> */}

        <FAQItem
          question="Can I volunteer or get involved with HAVEN?"
          answer={
            <p>
              Absolutely! Post Genre and HAVEN wouldn't exist without our
              dedicated network of volunteers. We’re always looking for people
              to help with lights/sound, promotion, security, and our web
              presence.{" "}
              <a
                className="faq-link"
                href="https://www.pg.media/get-involved.html"
                target="_blank"
              >
                Visit our Post Genre site
              </a>{" "}
              to get started.
            </p>
          }
        />

        <FAQItem
          question="Can I book HAVEN for my private event?"
          answer={
            <p>
              Yes! Haven is available for a wide range of private events,
              including formals, corporate gatherings, private concerts,
              workshops, and more. <br />
              <br />
              Our space is equipped with professional audio and lighting systems
              to meet the needs of your event. We offer tables and seating
              arrangements to comfortably accommodate over 100 guests. <br />
              <br />
              For more information about hosting your private event at HAVEN,
              visit our{" "}
              <a className="faq-link" href="/rentals">
                private events page!
              </a>
            </p>
          }
        />
      </div>
    </section>
  );
}
