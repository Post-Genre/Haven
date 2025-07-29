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
  return (
    <div
      className="full-event-item-container"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="full-event-title-container">
        <h4>{title}</h4>
      </div>
      <div className="full-event-info-container">
        <h6>{date}</h6>
        <h6>|</h6>
        <h6>{doorsOpen}</h6>
        <h6>|</h6>
        <h6>{price}</h6>
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
