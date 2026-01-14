import { useState } from "react";
import ArtistInterestForm from "./ArtistInterestForm";
import EventInterestForm from "./EventInterestForm";
import "./interest-form.css";

export default function InterestFormTabs() {
  const tabs = [
    { content: <ArtistInterestForm />, label: "Artists" },
    { content: <EventInterestForm />, label: "Rentals" },
  ];

  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex: number) {
    setCurrentTabIndex(getCurrentIndex);
  }

  return (
    <div className="interest-forms-tabs-container">
      <div className="heading">
        {tabs.map((tabItem, index) => (
          <div
            onClick={() => handleOnClick(index)}
            key={tabItem.label}
            className={`tab-item ${currentTabIndex === index ? `active` : ""}`}
          >
            <span>
              <h5>{tabItem.label}</h5>
            </span>
          </div>
        ))}
      </div>

      <div>{tabs[currentTabIndex] && tabs[currentTabIndex].content}</div>
    </div>
  );
}
