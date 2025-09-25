import "./footer.css";
import havenLogo from "../../assets/media/havenpngvirile2.png";
import {
  FaFacebookF,
  FaDiscord,
  FaInstagram,
  FaEnvelope,
  FaI,
} from "react-icons/fa6";

import pgLogo from "../../assets/media/pglogo-white-no-text.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <img src={havenLogo} alt="" />
      <div className="address-and-icon-container">
        <div className="address-container">
          <h5>
            401 Atwood Street <br></br>
            Pittsburgh, PA, 15213
          </h5>
        </div>
        <div className="icon-container">
          <div className="fa-icon">
            <img src={pgLogo} alt="" />
          </div>
          <div className="fa-icon">
            <FaInstagram size={48} color="white" />
          </div>
          <div className="fa-icon">
            <FaFacebookF size={48} color="white" />
          </div>
          <div className="fa-icon">
            <FaDiscord size={48} color="white" />
          </div>
        </div>
      </div>
      <p className="smallest-font">©2025 Post Genre. All Rights Reserved.</p>
    </div>
  );
}
