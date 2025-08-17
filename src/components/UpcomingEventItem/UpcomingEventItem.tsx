import "./upcoming-event-item.css";

type UpcomingEventItemProps = {
  title: string;
  date: string;
  link: string;
};

export default function UpcomingEventItem({
  title,
  date,
  link,
}: UpcomingEventItemProps) {
  const [year, month, day] = date.split("-").map((num) => parseInt(num, 10));
  const eventDate = new Date(year, month - 1, day);
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const formattedDate = `${monthNames[eventDate.getMonth()]} ${day}`;
  return (
    <div className="event-item-container">
      <div className="event-title-container">
        <h4>{title}</h4>
      </div>
      <div className="event-info-container">
        {/* <div className="date-container"> */}
        <h6 className="date-container">{formattedDate}</h6>
        {/* </div> */}
        {/* <div className="tickets-container"> */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="tickets-container"
        >
          TICKETS
        </a>
        {/* </div> */}
      </div>
    </div>
  );
}
