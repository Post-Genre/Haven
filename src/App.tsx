// import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import { BrowserRouter, Routes, Route } from "react-router";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Photos from "./pages/Photos/Photos";
import Booking from "./pages/Booking/Booking";
import Rules from "./pages/Rules/Rules";
import About from "./pages/About/About";
import OldNavBar from "./components/OldNavBar/oldnavbar";
import ScrollToHash from "./components/ScrollToHash";

function App() {
  return (
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <OldNavBar />
        <ScrollToHash />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/booking" element={<Booking />} />
            {/* <Route path="/artists" element={<Artists />} /> 
            <Route path="/rentals" element={<Rentals />} />  */}
            <Route path="/photos" element={<Photos />} />
            <Route path="/rules" element={<Rules />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
