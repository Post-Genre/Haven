import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <h1>Hello World</h1>
        {/* <ButtonPrimary link="google.com" text="Button Primary" />
        <ButtonSecondary link="google.com" text="Button Secondary" />
        <ButtonTertiary link="google.com" text="BUTTON TERTIARY" /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
