import React from "react";
import ReactDOM from "react-dom/client";
import Carousel from "./carousel";

const HomePage: React.FC = () => (
  <div className="max-w-2xl mx-auto mt-10">
    <Carousel />
  </div>
);

const rootElement = document.getElementById("react-root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <HomePage /> {/*this calls the Carousel component and renders it */}
    </React.StrictMode>
  );
}
