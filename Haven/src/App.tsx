// import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ButtonPrimary from "./components/Button/ButtonPrimary";
import ButtonSecondary from "./components/Button/ButtonSecondary";
import ButtonTertiary from "./components/Button/ButtonTertiary";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import Rentals from "./pages/Rentals/Rentals";
import { BrowserRouter, Routes, Route, ScrollRestoration } from "react-router";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import LoadingIcon from "./components/LoadingIcon/LoadingIcon";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main>
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/rentals" element={<Rentals />} />
          </Routes> */}
          <LoadingIcon />
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
