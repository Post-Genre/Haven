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
            </p>
          }
        />

        <FAQItem
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
        />

        <FAQItem
          question="What time do shows usually start and end?"
          answer={
            <p>
              Unless stated otherwise on the event listing, doors open at 7:00
              PM and music starts at 8:00 PM. Most shows end between 10:00 and
              10:30 PM.
            </p>
          }
        />

        <FAQItem
          question="Is HAVEN all ages?"
          answer={
            <p>
              Yes! All shows at HAVEN are all‑ages unless the event page says
              otherwise. However, keep in mind that not all shows may be
              family-friendly. We have a <i>zero‑tolerance policy</i> for drugs
              and alcohol; those found in violation will be asked to leave the
              venue.
            </p>
          }
        />

        <FAQItem
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
        />

        <FAQItem
          question="Where can I park?"
          answer={
            <p>
              HAVEN doesn’t have a parking lot, but paid parking is available
              nearby on Atwood and Meyran Streets. The Forbes-Semple parking
              garage is also a short walk away.
              <a className="faq-link" href="link-to-directions">
                See directions to the Forbes–Semple Garage.
              </a>
            </p>
          }
        />

        <FAQItem
          question="How do I find out about upcoming shows?"
          answer={
            <p>
              We post all upcoming events on the{" "}
              <a className="faq-link" href="link-to-events">
                events page
              </a>{" "}
              and on Instagram. Following us on social media is the best way to
              stay updated on the latest events!
            </p>
          }
        />

        <FAQItem
          question="Do you serve food or drinks?"
          answer={
            <p>
              Water and non-alcoholic beverages are sold inside. We do not serve
              food, but there are plenty of nearby restaurants in Oakland!
            </p>
          }
        />

        <FAQItem
          question="What accessibility options are available?"
          answer={
            <p>
              Handicapped parking is available nearby on Atwood Street, and the
              main space of the venue is ramp-accessible. If any other
              accommodations are needed to enjoy the show, please let a staff
              member know. We are happy to help!
            </p>
          }
        />

        <FAQItem
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
        />

        <FAQItem
          question="Can I volunteer or get involved with HAVEN?"
          answer={
            <p>
              Absolutely! Post Genre and HAVEN wouldn't exist without our
              dedicated network of volunteers. We’re always looking for people
              to help with lights/sound, promotion, security, and our web
              presence.
              <a className="faq-link" href="link-to-form">
                Fill out this form
              </a>{" "}
              to get started.
            </p>
          }
        />

        <FAQItem
          question="Can I book HAVEN for my private event?"
          answer={
            <>
              <p>
                Yes! HAVEN is available for private events, including formals,
                workshops, and more. The venue has professional sound and
                lighting and can be set up to fit your needs.
              </p>
              <p>
                <a className="faq-link" href="link-to-form">
                  Contact us here to discuss your event.
                </a>
              </p>
            </>
          }
        />
      </div>
    </section>
  );
}
