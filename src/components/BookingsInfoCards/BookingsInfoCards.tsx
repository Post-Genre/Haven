import "./bookings-info-cards.css";
// import pic1 from "../../assets/media/haven pics/IMG_6230-Enhanced-NR.jpg";
import rentalstaging from "../../assets/media/haven pics/IMG_7395.jpg";
import crowd3 from "../../assets/media/haven pics/IMG_6100_crowd.jpg";

export default function BookingsInfoCards() {
  return (
    <div className="bookings-info-cards-container">
      <div className="bookings-info-card">
        <div className="bookings-info-card-text">
          <h5>LIVE MUSIC</h5>
          <p className="small-font">
            Interested in performing at Haven? Please fill out our artist
            interest form below, and our team will get back to you as soon as
            possible.
          </p>
        </div>
        <img src={crowd3} alt="" />
      </div>
      <div className="bookings-info-card">
        <img src={rentalstaging} alt="" />
        <div className="bookings-info-card-text">
          <h5>PRIVATE EVENTS</h5>
          <p className="small-font">
            Interested in hosting an event at Haven? We have the services and
            utilities to host a multitude of different events, please fill out
            our inquiry form below!
          </p>
        </div>
      </div>
    </div>
  );
}
