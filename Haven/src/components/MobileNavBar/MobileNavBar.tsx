import "./mobile-nav-bar.css";
import { Link, NavLink } from "react-router";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";

export default function MobileNavBar() {
  const [contentOpen, setContentOpen] = useState(false);

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
    <div className="mobile-nav-container">
      <div
        className="fa-icon hamburger-icon"
        onClick={() => setContentOpen(!contentOpen)}
      >
        <FaBars color="white" />
      </div>
      {contentOpen && (
        <div
          className="mobile-nav-bar-content"
          onMouseLeave={() => setContentOpen(false)}
        >
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
          <NavLink
            to="/bookings"
            className={({ isActive }) =>
              isActive ? "navlink navlink-active" : "navlink"
            }
            onClick={() => {
              if (location.pathname === "/bookings") {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }
            }}
            onMouseEnter={() => handleHover(4)}
            onMouseLeave={() => handleLeave()}
            data-index="4"
          >
            <h5>PHOTOS</h5>
          </NavLink>
        </div>
      )}
    </div>
  );
}
