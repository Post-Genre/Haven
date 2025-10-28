import "./upcoming-events.css";
import upcomingEvents from "./upcoming-events";
import UpcomingEventItem from "../UpcomingEventItem/UpcomingEventItem";
import ButtonTertiary from "../Button/ButtonTertiary";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function UpcomingEvents() {
  const navigate = useNavigate();
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
  const [displayedEvents, setDisplayedEvents] = useState<Event[]>([]);
  const [count, setCount] = useState(1);
  const [disableButton, setDisableButton] = useState(false);

  function sortEventsByDate(events: Event[]): Event[] {
    return events.sort((a, b) => {
      const [yearA, monthA, dayA] = a.EventDate.split("-").map(Number);
      const [yearB, monthB, dayB] = b.EventDate.split("-").map(Number);

      const dateA = new Date(yearA, monthA - 1, dayA);
      const dateB = new Date(yearB, monthB - 1, dayB);

      return dateA.getTime() - dateB.getTime();
    });
  }

  function getFirstThreeEvents(events: Event[], count: number): Event[] {
    let numEvents = count * 3 > events.length ? events.length : count * 3;

    console.log("numEvents: ", numEvents);
    return events.slice(0, numEvents);
  }

  function getNewEvents(events: Event[]): Event[] {
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
        const newEvents = getNewEvents(sortedEvents);
        // setEvents(getFirstThreeEvents(sortedEvents));
        setEvents(newEvents);
        setDisplayedEvents(getFirstThreeEvents(newEvents, 1));
        setCount(1);
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

  useEffect(() => {
    console.log("count: ", count);
    setDisplayedEvents(getFirstThreeEvents(events, count));
  }, [count]);

  useEffect(() => {
    if (
      displayedEvents.length > 0 &&
      displayedEvents.length === events.length
    ) {
      console.log("here");
      setDisableButton(true);
    }
  }, [displayedEvents]);

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
      {displayedEvents.map((event, index) => {
        return (
          <UpcomingEventItem
            title={event.EventName}
            date={event.EventDate}
            link={event.EventUrl}
          />
        );
      })}
      {!disableButton && (
        <ButtonTertiary
          onClick={() => {
            setCount(count + 1);
            console.log("countad:", count);
          }}
          text="LOAD MORE EVENTS"
        />
      )}
      <ButtonTertiary
        onClick={() => {
          navigate("/events");
        }}
        text="VIEW ALL UPCOMING EVENTS"
      />
    </div>
  );
}
