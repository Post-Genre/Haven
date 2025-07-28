import "./faq.css";
import FAQItem from "./FAQItem";

export default function FAQ() {
  return (
    <section className="faq-section">
      {/* Banner */}
      <div className="faq-banner">
        <h2 className="faq-title">FAQ</h2>
      </div>

      {/* FAQ Items */}
      <div className="faq-list">
        <FAQItem
          question="Where is HAVEN?"
          answer={<p>
            HAVEN is located at 401 Atwood St in the Oakland neighborhood of Pittsburgh, Pennsylvania.
            The venue is in walking distance to the University of Pittsburgh, Carnegie Mellon University and Carlow University. 
          </p>}
        />

        <FAQItem
          question="Where can I get event tickets?"
          answer={
            <p>
              Tickets are available online through our ticketing platform, or at the door (cash and card).
            </p>
          }
        />

        <FAQItem
          question="Can I book HAVEN for my private event?"
          answer={
            <>
              <p>
                Yes! HAVEN is available for a wide range of private events,
                including formals, corporate gatherings, private concerts,
                workshops, and more.
              </p>
              <p>
                Our space is equipped with professional audio and lighting
                systems to meet the needs of your event.
              </p>
              <p>
                For more information,&nbsp;
                <a href="link-to-form">contact us using this form!</a>
              </p>
            </>
          }
        />

        <FAQItem
          question="Where should I park?"
          answer={
            <p>
              Off-street parking is not available. Paid parking is available two blocks from HAVEN, near Forbes
              Avenue, on Atwood and Meyran Streets. <br />
              <a href="link-to-directions">
                Directions to the Forbes-Semple Garage
              </a>
            </p>
          }
        />
        
        <FAQItem
          question="What transit options are there?"
          answer={
            <p>
              Most PRT busses passing through Oakland stop on Forbes Avenue and Fifth Avenue, which are a short walk from HAVEN.
              Additionally, there is a POGOH station just outside of the venue.
            </p>
          }
        />
        <FAQItem
          question="Is HAVEN all ages?"
          answer={
            <p>
                Yes! All shows at HAVEN are open to all ages, unless stated otherwise on the event page.<br></br>
                Drugs and alcohol are prohibited; if found in violation, you will be asked to leave the venue.
            </p>
          }
        />
      </div>
    </section>
  );
}
