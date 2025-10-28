import "./events.css";
// import events from "./events-list";
import banner1 from "../../assets/media/banners/banner1.jpg";
import TitleContainer from "../../components/TitleContainer/TitleContainer";
import EventItem from "../../components/EventItem/EventItem";
import bottom1 from "../../assets/media/banners/bottom1.jpg";
import { useState, useEffect } from "react";
import LoadingIcon from "../../components/LoadingIcon/LoadingIcon";

export default function UpcomingEvents() {
  type Event = {
    EventName: string;
    EventDate: string;
    EventDoorsOpen: string;
    ticketTypes: any[];
    EventUrl: string;
    EventThumbnail: string;
    ShowPublic: boolean;
  };

  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);

  function sortEventsByDate(events: Event[]): Event[] {
    return events.sort((a, b) => {
      const [yearA, monthA, dayA] = a.EventDate.split("-").map(Number);
      const [yearB, monthB, dayB] = b.EventDate.split("-").map(Number);

      const dateA = new Date(yearA, monthA - 1, dayA);
      const dateB = new Date(yearB, monthB - 1, dayB);

      return dateA.getTime() - dateB.getTime();
    });
  }

  function getUpcomingEvents(events: Event[]): Event[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return events.filter((event) => {
      const [year, month, day] = event.EventDate.split("-").map((num) =>
        parseInt(num, 10)
      );
      const eventDate = new Date(year, month - 1, day);
      return eventDate >= today && event.ShowPublic;
    });
  }

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        "https://67sxoyzalltf7cnmecge2sj5yq0bckqd.lambda-url.us-east-2.on.aws",
        {
          method: "GET",
          headers: { "x-api-key": "7a055rda" },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP ERROR, STATUS: ${response.status}`);
      }

      const data = await response.json();

      if (data && data.length > 0) {
        const sortedEvents = sortEventsByDate(data);
        setEvents(getUpcomingEvents(sortedEvents));
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching event data:", error);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="events-container">
        <TitleContainer text="EVENTS" image={banner1} />
        <div className="events-list-container">
          <img src={bottom1} alt="" className="bg-image" />
          <div className="event-items-wrapper">
            <LoadingIcon blackLogo={false} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="events-container">
      <TitleContainer text="EVENTS" image={banner1} />
      <div className="events-list-container">
        <img src={bottom1} alt="" className="bg-image" />
        <div className="event-items-wrapper">
          {events && events.length > 0
            ? events.map((event, index) => {
                return (
                  <EventItem
                    title={event.EventName}
                    date={event.EventDate}
                    doorsOpen={event.EventDoorsOpen}
                    price={event.ticketTypes}
                    link={event.EventUrl}
                    image={event.EventThumbnail}
                  />
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}
