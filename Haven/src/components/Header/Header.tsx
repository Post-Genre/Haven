import "./header.css";
import havenChurchLogo from "../../assets/media/havenpngvirile2.png";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <img src={havenChurchLogo} alt="" />
        <div className="nav-container">
          <h4>EVENTS</h4>
          <h4>ABOUT</h4>
          <h4>RENTALS</h4>
          <h4>ARTISTS</h4>
          <h4>PHOTOS</h4>
        </div>
      </div>
    </>
  );
}
