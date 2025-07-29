// import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ButtonPrimary from "./components/Button/ButtonPrimary";
import ButtonSecondary from "./components/Button/ButtonSecondary";
import ButtonTertiary from "./components/Button/ButtonTertiary";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import UpcomingEventItem from "./components/UpcomingEventItem/UpcomingEventItem";
import UpcomingEvents from "./components/UpcomingEvents/UpcomingEvents";
import EventItem from "./components/EventItem/EventItem";
import banner from "./assets/media/haven pics/DSC_4602-Enhanced-NR.jpg";
import Events from "./components/Events/Events";

function App() {
  return (
    <>
      <Header />
      <main>
        <h1>Hello World</h1>
        <h2>Hello World</h2>
        <h3>Hello World</h3>
        <h4>Hello World</h4>
        <h5>Hello World</h5>
        <h6>Hello World</h6>
        <ButtonPrimary link="https://google.com" text="Button Primary" />
        <ButtonSecondary link="https://google.com" text="Button Secondary" />
        <ButtonTertiary link="https://google.com" text="BUTTON TERTIARY" />
        <WhoWeAre />
        <UpcomingEvents />
        {/* <EventItem
          title="Sunny Daze & the Weathermen: Candy & Cigarettes Release Show"
          date="2025-07-10"
          doorsOpen="19:00:00"
          price="13.75"
          link="https://google.com"
          image={banner}
        /> */}
        <Events />
      </main>
      <Footer />
    </>
  );
}

export default App;
