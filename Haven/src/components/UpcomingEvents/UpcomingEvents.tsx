import "./upcoming-events.css";
import upcomingEvents from "./upcoming-events";
import UpcomingEventItem from "../UpcomingEventItem/UpcomingEventItem";
import ButtonTertiary from "../Button/ButtonTertiary";

export default function UpcomingEvents() {
  return (
    <div className="upcoming-events-container">
      <h2>UPCOMING EVENTS</h2>
      {upcomingEvents.map((event, index) => {
        return (
          <UpcomingEventItem
            title={event.title}
            date={event.date}
            link={event.link}
          />
        );
      })}
      <ButtonTertiary
        link="https://google.com"
        text="VIEW ALL UPCOMING EVENTS"
      />
    </div>
  );
}
