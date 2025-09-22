import "./header.css";
import havenChurchLogo from "../../assets/media/haven-church-logo.png";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <img src={havenChurchLogo} alt="" />
        <div className="nav-container">
          <h5>EVENTS</h5>
          <h5>ABOUT</h5>
          <h5>RENTALS</h5>
          <h5>ARTISTS</h5>
          <h5>PHOTOS</h5>
        </div>
      </div>
    </>
  );
}
