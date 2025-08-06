import ButtonPrimary from "../Button/ButtonPrimary";
import "./interest-form.css";

export default function EventInterestForm() {
  return (
    <form className="form-container">
      <h6>PRIVATE EVENT INQUIRY</h6>
      <p>CONTACT INFORMATION</p>
      <div className="two-inputs">
        <input
          className="half-input"
          type="text"
          id="fname"
          name="fname"
          placeholder="First Name*"
        />
        <input
          className="half-input"
          type="text"
          id="lname"
          name="lname"
          placeholder="Last Name*"
        />
      </div>
      <input
        className="full-input"
        type="email"
        id="email"
        name="email"
        placeholder="Email*"
      />
      <div className="two-inputs">
        <input
          className="half-input"
          type="text"
          id="phone"
          name="phone"
          placeholder="Phone Number*"
        />
        <input
          className="half-input"
          type="text"
          id="company"
          name="company"
          placeholder="Company"
        />
      </div>
      <p>Event Details</p>
      <input
        className="full-input"
        type="text"
        id="eventNature"
        name="eventNature"
        placeholder="Nature of this event (Concert, Formal, etc)*"
      />
      <input
        className="full-input"
        type="date"
        id="date"
        name="date"
        placeholder="Event Date"
      />
      <div className="two-inputs">
        <input
          className="half-input"
          type="time"
          id="startTime"
          name="startTime"
          placeholder="Event Start Time"
        />
        <input
          className="half-input"
          type="time"
          id="endTime"
          name="endTime"
          placeholder="Event End Time"
        />
      </div>
      <input
        className="full-input"
        type="number"
        id="numPeople"
        name="numPeople"
        placeholder="Number of People"
      />
      <p>Does your event need any of the following?</p>
      <div className="form-grid">
        <label htmlFor="audio">
          <input
            className="check-box"
            type="checkbox"
            id="audio"
            name="audio"
          />
          Audio
        </label>

        <label htmlFor="lighting">
          <input
            className="check-box"
            type="checkbox"
            id="lighting"
            name="lighting"
          />
          Lighting
        </label>

        <label htmlFor="tables">
          <input
            className="check-box"
            type="checkbox"
            id="tables"
            name="tables"
          />
          Tables/Chairs
        </label>

        <label htmlFor="photos">
          <input
            className="check-box"
            type="checkbox"
            id="photos"
            name="photos"
          />
          Photography
        </label>

        <label htmlFor="videos">
          <input
            className="check-box"
            type="checkbox"
            id="videos"
            name="videos"
          />
          Videography
        </label>

        <label htmlFor="tickets">
          <input
            className="check-box"
            type="checkbox"
            id="tickets"
            name="tickets"
          />
          Digital Ticketing
        </label>
      </div>

      <input
        className="long-input"
        type="text"
        id="info"
        name="info"
        placeholder="Any additional information or special requests?"
      />
      <ButtonPrimary link="https://www.google.com" text="SUBMIT" />
    </form>
  );
}
