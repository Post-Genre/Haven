import { useState, useRef, type JSX } from "react";
import "./faq.css";

interface FAQItemProps {
  question: string;
  answer: JSX.Element;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="collapsible-section">
      <button
        className={`collapsible ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <div className="collapsible-button">
          <h3>{question}</h3>
          <span id="expandIcon">{open ? "−" : "+"}</span>
        </div>
      </button>

      <div
        ref={contentRef}
        className={`faq-content ${open ? "expanded" : ""}`}
        style={{
          maxHeight: open ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        {answer}
      </div>
    </div>
  );
}
