import "./header.css";
import havenChurchLogo from "../../assets/media/haven-church-logo.png";
import { NavLink } from "react-router";
import { useLocation } from "react-router";

type HeaderProps = {
  onClick?: () => void; // optional click handler
};
export default function Header({ onClick }: HeaderProps) {
  return (
    <>
      <div className="header-container">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "navlink active" : "navlink"
          }
          onClick={() => {
            if (location.pathname === "/") {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }
          }}
          // onMouseEnter={() => handleHover(0)}
          // onMouseLeave={() => handleLeave()}
          // index="0"
        >
          <img src={havenChurchLogo} alt="" />
        </NavLink>
        <div className="nav-container">
          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive ? "navlink active" : "navlink"
            }
            onClick={() => {
              if (location.pathname === "/events") {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }
            }} // onMouseEnter={() => handleHover(0)}
            // onMouseLeave={() => handleLeave()}
            // index="0"
          >
            <h5>EVENTS</h5>
          </NavLink>
          {/* <h5>ABOUT</h5> */}

          <NavLink
            to="/rentals"
            className={({ isActive }) =>
              isActive ? "navlink active" : "navlink"
            }
            onClick={() => {
              if (location.pathname === "/rentals") {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }
            }} // onMouseEnter={() => handleHover(0)}
            // onMouseLeave={() => handleLeave()}
            // index="0"
          >
            <h5>RENTALS</h5>
          </NavLink>
          {/* <h5>ARTISTS</h5> */}
          {/* <h5>PHOTOS</h5> */}
        </div>
      </div>
    </>
  );
}
