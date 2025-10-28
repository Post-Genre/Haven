import "./footer.css";
import havenLogo from "../../assets/media/havenpngvirile2.png";
import {
  FaFacebookF,
  FaDiscord,
  FaInstagram,
  FaLocationDot,
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
            <a href="https://pg.media" target="_blank">
              <img src={pgLogo} alt="" />
            </a>
          </div>
          <div className="fa-icon">
            <a
              href="https://www.google.com/maps/dir//401+Atwood+St,+Pittsburgh,+PA+15213/@40.4380792,-80.0360765,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8834f1e595444105:0xbd19f85eed9d81e!2m2!1d-79.9536756!2d40.4381085?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              <FaLocationDot size={48} color="white" />
            </a>
          </div>
          <div className="fa-icon">
            <a
              href="https://www.instagram.com/haven.pgh/?hl=en"
              target="_blank"
            >
              <FaInstagram size={48} color="white" />
            </a>
          </div>
          <div className="fa-icon">
            <a
              href="https://www.facebook.com/p/HAVEN-Pgh-61576887341038/"
              target="_blank"
            >
              <FaFacebookF size={48} color="white" />
            </a>
          </div>
        </div>
      </div>
      <p className="smallest-font">©2025 Post Genre. All Rights Reserved.</p>
    </div>
  );
}
