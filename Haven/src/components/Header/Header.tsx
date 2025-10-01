import "./header.css";
import havenChurchLogo from "../../assets/media/haven-church-logo.png";
import { Link, NavLink } from "react-router";
import { useLocation } from "react-router";

type HeaderProps = {
  onClick?: () => void; // optional click handler
};
export default function Header({ onClick }: HeaderProps) {
  function handleHover(index: number) {
    console.log("index: ", index);
    let allATags = document.querySelectorAll(".navlink");
    allATags.forEach((tag) => {
      let indexOfTag = +(tag.getAttribute("data-index") ?? -1);
      if (indexOfTag === index) {
        tag.classList.add("hover");
        // if (tag.classList.contains("inactive")) {
        //   tag.classList.remove("inactive");
        // }
      } else {
        if (tag.classList.contains("hover")) {
          tag.classList.remove("hover");
        }
        // tag.classList.add("inactive");
      }
    });
  }

  function handleLeave() {
    let allATags = document.querySelectorAll(".navlink");
    allATags.forEach((tag) => {
      if (tag.classList.contains("hover")) {
        tag.classList.remove("hover");
      }
      // if (tag.classList.contains("inactive")) {
      //   tag.classList.remove("inactive");
      // }
    });
  }

  return (
    <>
      <div className="header-container">
        <Link
          to="/"
          // className={({ isActive }) =>
          //   isActive ? "navlink active" : "navlink"
          // }
          className="navlink"
          onClick={() => {
            if (location.pathname === "/") {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }
          }}
          onMouseEnter={() => handleHover(0)}
          onMouseLeave={() => handleLeave()}
          data-index="0"
        >
          <img src={havenChurchLogo} alt="" />
        </Link>

        <div className="nav-container">
          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive ? "navlink navlink-active" : "navlink"
            }
            onClick={() => {
              if (location.pathname === "/events") {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }
            }}
            onMouseEnter={() => handleHover(1)}
            onMouseLeave={() => handleLeave()}
            data-index="1"
          >
            <h5>EVENTS</h5>
          </NavLink>
          {/* <h5>ABOUT</h5> */}

          <NavLink
            to="/rentals"
            className={({ isActive }) =>
              isActive ? "navlink navlink-active" : "navlink"
            }
            onClick={() => {
              if (location.pathname === "/rentals") {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }
            }}
            onMouseEnter={() => handleHover(2)}
            onMouseLeave={() => handleLeave()}
            data-index="2"
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
