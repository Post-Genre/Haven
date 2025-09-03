import "./upcoming-events.css";
import upcomingEvents from "./upcoming-events";
import UpcomingEventItem from "../UpcomingEventItem/UpcomingEventItem";
import ButtonTertiary from "../Button/ButtonTertiary";
import { useEffect, useState } from "react";

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

  function getFirstThreeEvents(events: Event[]): Event[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return events
      .filter((event) => {
        const [year, month, day] = event.EventDate.split("-").map((num) =>
          parseInt(num, 10)
        );
        const eventDate = new Date(year, month - 1, day);
        return eventDate >= today && event.ShowPublic;
      })
      .slice(0, 3); // Only return first 3
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
        setEvents(getFirstThreeEvents(sortedEvents));
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
      <div className="upcoming-events-container">
        <h2>UPCOMING EVENTS</h2>
        <h6>Loading events, please wait!</h6>
      </div>
    );
  }
  return (
    <div className="upcoming-events-container">
      <h2>UPCOMING EVENTS</h2>
      {events.map((event, index) => {
        return (
          <UpcomingEventItem
            title={event.EventName}
            date={event.EventDate}
            link={event.EventUrl}
          />
        );
      })}
      <ButtonTertiary
        onClick={() => {
          window.location.href = "https://www.google.com";
        }}
        text="VIEW ALL UPCOMING EVENTS"
      />
    </div>
  );
}
