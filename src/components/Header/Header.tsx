import "./header.css";
import { Link } from "react-router";
// import { useLocation } from "react-router";
import ChurchAnimation from "../ChurchAnimation/ChurchAnimation";
import { useState } from "react";
import OldNavBar from "../OldNavBar/oldnavbar";

type HeaderProps = {
  onClick?: () => void; // optional click handler
};
export default function Header({}: HeaderProps) {
  const [contentOpen, setContentOpen] = useState(false);

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
    <>
        <div className="header-container">
          <ChurchAnimation />
          <OldNavBar />
        </div>
    </>
  );
}
