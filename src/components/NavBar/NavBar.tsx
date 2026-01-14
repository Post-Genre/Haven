import "./nav-bar.css";
import { NavLink } from "react-router";

export default function NavBar() {
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
    <div className="nav-container">
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "navlink navlink-active" : "navlink"
        }
        onClick={() => {
          if (location.pathname === "/about") {
            ScrollToTopOfPage();
          }
        }}
        onMouseEnter={() => handleHover(3)}
        onMouseLeave={() => handleLeave()}
        data-index="3"
      >
        <h5>ABOUT</h5>
      </NavLink>

      <NavLink
        to="/events"
        className={({ isActive }) =>
          isActive ? "navlink navlink-active" : "navlink"
        }
        onClick={() => {
          if (location.pathname === "/events") {
            ScrollToTopOfPage();
          }
        }}
        onMouseEnter={() => handleHover(1)}
        onMouseLeave={() => handleLeave()}
        data-index="1"
      >
        <h5>EVENTS</h5>
      </NavLink>

      <NavLink
        to="/bookings"
        className={({ isActive }) =>
          isActive ? "navlink navlink-active" : "navlink"
        }
        onClick={() => {
          if (location.pathname === "/bookings") {
            ScrollToTopOfPage();
          }
        }}
        onMouseEnter={() => handleHover(2)}
        onMouseLeave={() => handleLeave()}
        data-index="2"
      >
        <h5>BOOKINGS</h5>
      </NavLink>

      <NavLink
        to="/photos"
        className={({ isActive }) =>
          isActive ? "navlink navlink-active" : "navlink"
        }
        onClick={() => {
          if (location.pathname === "/photos") {
            ScrollToTopOfPage();
          }
        }}
        onMouseEnter={() => handleHover(4)}
        onMouseLeave={() => handleLeave()}
        data-index="4"
      >
        <h5>PHOTOS</h5>
      </NavLink>
    </div>
  );
}
