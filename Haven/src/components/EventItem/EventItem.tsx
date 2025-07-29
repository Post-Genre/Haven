import "./event-item.css";

type EventItemProps = {
  title: string;
  date: string;
  doorsOpen: string;
  price: string;
  link: string;
  image: string;
};

export default function EventItem({
  title,
  date,
  doorsOpen,
  price,
  link,
  image,
}: EventItemProps) {
  function formatTime(timeStr: string) {
    if (!timeStr) return "TBA";
    //     console.log("formatTIme", timeStr);

    if (timeStr.includes(":")) {
      const [hours, minutes] = timeStr.split(":");
      const hour = parseInt(hours, 10);
      const ampm = hour >= 12 ? "PM" : "AM";
      const hour12 = hour % 12 || 12;
      if (minutes === "00") {
        return `${hour12}${ampm}`;
      } else {
        return `${hour12}:${minutes} ${ampm}`;
      }
    }

    return timeStr;
  }

  const [year, month, day] = date.split("-").map((num) => parseInt(num, 10));
  const eventDate = new Date(year, month - 1, day);
  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
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

  const formattedDate = `${dayNames[eventDate.getDay()]}, ${
    monthNames[eventDate.getMonth()]
  } ${day}`;

  const doorsTime = doorsOpen ? formatTime(doorsOpen) : "TBA";

  //   const eventCard = document.createElement("div");
  //   eventCard.className = "event-card";

  let eventPrice = `$${price}`;
  // if (event.ticketTypes && event.ticketTypes.length > 0) {
  //     const prices = event.ticketTypes.map(ticket => ticket.Price);
  //     const lowestPrice = Math.min(...prices);
  //     price = `$${lowestPrice.toFixed(2)}`;
  // }
  return (
    <div
      className="full-event-item-container"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="full-event-title-container">
        <h4>{title}</h4>
      </div>
      <div className="full-event-info-container">
        <h6>{formattedDate}</h6>
        <h6>|</h6>
        <h6>{doorsTime}</h6>
        <h6>|</h6>
        <h6>{eventPrice}</h6>
        <h6>|</h6>
        <a href={link}>
          <h6>
            <u>TICKETS</u>
          </h6>
        </a>
      </div>
    </div>
  );
}
