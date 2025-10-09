import ButtonPrimary from "../Button/ButtonPrimary";
import "./interest-form.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export default function EventInterestForm() {
  const initialValues = {
    fname: "",
    lname: "",
    bandName: "",
    email: "",
    location: "",
    musicLinks: "",
    socialLinks: "",
    bandInfo: "",
    date: null as Date | null,
    supportingArtists: "",
    releaseShow: false,
    info: "",
  };
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    bandName: "",
    email: "",
    location: "",
    musicLinks: "",
    socialLinks: "",
    bandInfo: "",
    date: null as Date | null,
    supportingArtists: "",
    releaseShow: false,
    info: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...formData,
      date: formData.date?.toLocaleDateString(),
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
      <h6>ARTIST INTEREST FORM</h6>
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
        type="text"
        value={formData.bandName}
        onChange={(e) => setFormData({ ...formData, bandName: e.target.value })}
        name="bandName"
        placeholder="Band/Arist Name*"
        required
      />
      <input
        className="full-input"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        name="email"
        placeholder="Email*"
        required
      />
      <p>Contact Information</p>
      <input
        className="full-input"
        type="text"
        value={formData.location}
        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        name="location"
        placeholder="What city are you most active in?"
        required
      />
      <input
        className="full-input"
        type="text"
        value={formData.musicLinks}
        onChange={(e) =>
          setFormData({ ...formData, musicLinks: e.target.value })
        }
        name="musicLinks"
        placeholder="Link(s) to your music"
        required
      />
      <input
        className="full-input"
        type="text"
        value={formData.socialLinks}
        onChange={(e) =>
          setFormData({ ...formData, socialLinks: e.target.value })
        }
        name="socialLinks"
        placeholder="Social media link(s)"
        required
      />
      <input
        className="long-input"
        type="text"
        value={formData.bandInfo}
        onChange={(e) => setFormData({ ...formData, bandInfo: e.target.value })}
        name="bandInfo"
        placeholder="Tell us more about your band! What genre do you consider yourself? Where have you played? etc.*"
      />

      <p>Event Details</p>
      <DatePicker
        selected={formData.date}
        onChange={(date) => setFormData({ ...formData, date })}
        placeholderText="Event Date*"
        className="full-input"
      />
      <input
        className="full-input"
        type="text"
        value={formData.supportingArtists}
        onChange={(e) =>
          setFormData({ ...formData, supportingArtists: e.target.value })
        }
        name="supportingArtists"
        placeholder="Do you have a bill already? If so, list your supporing artists"
        required
      />
      <label htmlFor="audio">
        <input
          className="check-box"
          type="checkbox"
          checked={formData.releaseShow}
          onChange={(e) =>
            setFormData({ ...formData, releaseShow: e.target.checked })
          }
          name="releaseShow"
        />
        Will this be a release show?
      </label>
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
