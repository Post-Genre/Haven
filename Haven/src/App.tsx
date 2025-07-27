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
      </main>
      <Footer />
    </>
  );
}

export default App;
