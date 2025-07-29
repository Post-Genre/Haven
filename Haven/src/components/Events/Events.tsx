import "./events.css";
import events from "./events-list";
import banner1 from "../../assets/media/banners/banner1.jpg";
import TitleContainer from "../TitleContainer/TitleContainer";
import EventItem from "../EventItem/EventItem";
import bottom1 from "../../assets/media/backgrounds/bottom1.png";

export default function UpcomingEvents() {
  return (
    <div className="events-container">
      <TitleContainer text="EVENTS" image={banner1} />
      <div className="events-list-container">
        <img src={bottom1} alt="" className="bg-image" />
        {events.map((event, index) => {
          return (
            <EventItem
              title={event.title}
              date={event.date}
              doorsOpen={event.doorsOpen}
              price={event.price}
              link={event.link}
              image={event.image}
            />
          );
        })}
      </div>
    </div>
  );
}
