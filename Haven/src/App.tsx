// import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ButtonPrimary from "./components/Button/ButtonPrimary";
import ButtonSecondary from "./components/Button/ButtonSecondary";
import ButtonTertiary from "./components/Button/ButtonTertiary";

function App() {
  return (
    <>
      <Header />
      <main>
        <h1>Hello World</h1>
        <ButtonPrimary link="google.com" text="Button Primary" />
        <ButtonSecondary link="google.com" text="Button Secondary" />
        <ButtonTertiary link="google.com" text="BUTTON TERTIARY" />
      </main>
      <Footer />
    </>
  );
}

export default App;
