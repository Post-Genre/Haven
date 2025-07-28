import "./faq.css";
import FAQItem from "./FAQItem";

export default function FAQ() {
  return (
    <div className="faq-section">
        <div className="faq-container">
        <div className="faq-banner">
            <h2 className="faq-title">FAQ</h2>
        </div>

        <div className="faq-list">
            <FAQItem
            question="Where is HAVEN?"
            answer={<p>We are located in Oakland, Pittsburgh.</p>}
            />

            <FAQItem
            question="Where can I get event tickets?"
            answer={<p>Tickets are available online through our ticketing platform.</p>}
            />

            <FAQItem
            question="Can I book HAVEN for my private event?"
            answer={
                <>
                <p>
                    Yes! Haven is available for a wide range of private events,
                    including formals, corporate gatherings, private concerts,
                    workshops, and more.
                </p>
                <p>
                    Our space is equipped with professional audio and lighting
                    systems to meet the needs of your event.
                </p>
                <p>
                    For more information,{" "}
                    <a href="link-to-form">contact us using this form!</a>
                </p>
                </>
            }
            />

            <FAQItem
            question="Where should I park?"
            answer={
                <p>
                Paid parking is available two blocks from HAVEN, near Forbes
                Avenue on Atwood and Meyran Streets. <br />
                <a href="link-to-directions">
                    Directions to the Forbes-Semple Garage
                </a>
                </p>
            }
            />

            <FAQItem
            question="Is HAVEN all ages?"
            answer={<p>Yes, all shows are all ages unless otherwise noted.</p>}
            />
        </div>
        </div>
    </div>
  );
}
