import "./footer.css";
//import havenLogo from "../../assets/media/havenlogo-white-updated.png";
import havenLogo from "../../assets/media/havenpngvirile2.png";

import { FaFacebookF, FaInstagram, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";

//lowercase png

import pgLogo from "../../assets/media/pglogo-white-no-text.png";

export default function Footer() {
  const year = new Date().getFullYear();

  function ScrollToTopOfPage() {
    const scrollOptions: ScrollToOptions = {
      top: 0,
      left: 0,
      behavior: "smooth",
    };

    window.scrollTo(scrollOptions);
    document.documentElement.scrollTo(scrollOptions);
    document.body.scrollTo(scrollOptions);
  }
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
              <FaLocationDot className="fa-icon-image" color="white" />
            </a>
          </div>
          <div className="fa-icon">
            <a
              href="https://www.instagram.com/haven.pgh/?hl=en"
              target="_blank"
            >
              <FaInstagram className="fa-icon-image" color="white" />
            </a>
          </div>
          <div className="fa-icon">
            <a
              href="https://www.facebook.com/p/HAVEN-Pgh-61576887341038/"
              target="_blank"
            >
              <FaFacebookF className="fa-icon-image" color="white" />
            </a>
          </div>
        </div>
      </div>
      <Link
        to="/rules"
        onClick={() => {
          if (location.pathname === "/rules") {
            ScrollToTopOfPage();
          }
        }}
        className="navlink"
      >
        <p className="small-font">
          <u>Rules of HAVEN</u>
        </p>
      </Link>
      <p className="smallest-font">©{year} Post Genre. All Rights Reserved.</p>
    </div>
  );
}
