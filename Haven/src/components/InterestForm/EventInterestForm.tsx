import ButtonPrimary from "../Button/ButtonPrimary";
import "./interest-form.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export default function EventInterestForm() {
  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    company: "",
    eventNature: "",
    date: null as Date | null,
    startTime: null as Date | null,
    endTime: null as Date | null,
    numPeople: "",
    audio: false,
    lighting: false,
    tables: false,
    photos: false,
    videos: false,
    tickets: false,
    info: "",
  };
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    company: "",
    eventNature: "",
    date: null as Date | null,
    startTime: null as Date | null,
    endTime: null as Date | null,
    numPeople: "",
    audio: false,
    lighting: false,
    tables: false,
    photos: false,
    videos: false,
    tickets: false,
    info: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...formData,
      date: formData.date?.toLocaleDateString(),
      startTime: formData.startTime?.toLocaleTimeString(),
      endTime: formData.endTime?.toLocaleTimeString(),
    };

    console.log("Payload, ", payload);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzNmMVdKVS9CBlMsVcyrTdSZtu_4REwxBDC3BOZsvNEW_TQ0JWVv3XuSbAReuZ1NjQJ/exec",
        {
          method: "POST",
          body: JSON.stringify(payload),
          // headers: {
          //   "Content-Type": "application/json",
          // },
        }
      );

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({ ...initialValues }); // reset form if needed
      } else {
        alert("Failed to submit form.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred.");
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h6>PRIVATE EVENT INQUIRY</h6>
      <p>Contact Information</p>
      <div className="two-inputs">
        <input
          className="half-input"
          type="text"
          value={formData.fname}
          onChange={(e) => setFormData({ ...formData, fname: e.target.value })}
          name="fname"
          placeholder="First Name*"
          required
        />
        <input
          className="half-input"
          type="text"
          value={formData.lname}
          onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
          name="lname"
          placeholder="Last Name*"
          required
        />
      </div>
      <input
        className="full-input"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        name="email"
        placeholder="Email*"
        required
      />
      <div className="two-inputs">
        <input
          className="half-input"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          name="phone"
          placeholder="Phone Number*"
          required
        />
        <input
          className="half-input"
          type="text"
          value={formData.company}
          onChange={(e) =>
            setFormData({ ...formData, company: e.target.value })
          }
          name="company"
          placeholder="Company"
        />
      </div>
      <p>Event Details</p>
      <input
        className="full-input"
        type="text"
        value={formData.eventNature}
        onChange={(e) =>
          setFormData({ ...formData, eventNature: e.target.value })
        }
        name="eventNature"
        placeholder="Nature of this event (Concert, Formal, etc)*"
        required
      />
      <DatePicker
        selected={formData.date}
        onChange={(date) => setFormData({ ...formData, date })}
        placeholderText="Event Date"
        className="full-input"
      />
      <div className="two-inputs">
        <DatePicker
          selected={formData.startTime}
          onChange={(startTime) => setFormData({ ...formData, startTime })}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
          placeholderText="Event Start Time"
          className="half-input"
        />
        <DatePicker
          selected={formData.endTime}
          onChange={(endTime) => setFormData({ ...formData, endTime })}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
          placeholderText="Event End Time"
          className="half-input"
        />
      </div>

      <input
        className="full-input"
        type="number"
        value={formData.numPeople}
        onChange={(e) =>
          setFormData({ ...formData, numPeople: e.target.value })
        }
        name="numPeople"
        placeholder="Number of People"
      />
      <p>Does your event need any of the following?</p>
      <div className="form-grid">
        <label htmlFor="audio">
          <input
            className="check-box"
            type="checkbox"
            checked={formData.audio}
            onChange={(e) =>
              setFormData({ ...formData, audio: e.target.checked })
            }
            name="audio"
          />
          Audio
        </label>

        <label htmlFor="lighting">
          <input
            className="check-box"
            type="checkbox"
            checked={formData.lighting}
            onChange={(e) =>
              setFormData({ ...formData, lighting: e.target.checked })
            }
            name="lighting"
          />
          Lighting
        </label>

        <label htmlFor="tables">
          <input
            className="check-box"
            type="checkbox"
            checked={formData.tables}
            onChange={(e) =>
              setFormData({ ...formData, tables: e.target.checked })
            }
            name="tables"
          />
          Tables/Chairs
        </label>

        <label htmlFor="photos">
          <input
            className="check-box"
            type="checkbox"
            checked={formData.photos}
            onChange={(e) =>
              setFormData({ ...formData, photos: e.target.checked })
            }
            name="photos"
          />
          Photography
        </label>

        <label htmlFor="videos">
          <input
            className="check-box"
            type="checkbox"
            checked={formData.videos}
            onChange={(e) =>
              setFormData({ ...formData, videos: e.target.checked })
            }
            name="videos"
          />
          Videography
        </label>

        <label htmlFor="tickets">
          <input
            className="check-box"
            type="checkbox"
            checked={formData.tickets}
            onChange={(e) =>
              setFormData({ ...formData, tickets: e.target.checked })
            }
            name="tickets"
          />
          Digital Ticketing
        </label>
      </div>

      <input
        className="long-input"
        type="text"
        value={formData.info}
        onChange={(e) => setFormData({ ...formData, info: e.target.value })}
        name="info"
        placeholder="Any additional information or special requests?"
      />
      <ButtonPrimary type="submit" text="SUBMIT" />
    </form>
  );
}
