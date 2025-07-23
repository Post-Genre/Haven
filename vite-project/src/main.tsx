import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("react-root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode></React.StrictMode>
  );
}

function MyWidget() {
  return <div>Hello from React!</div>;
}

// Mount React into any part of your existing HTML
const mountPoint = document.getElementById("react-root");
if (mountPoint) {
  ReactDOM.createRoot(mountPoint).render(
    <React.StrictMode>
      <MyWidget />
    </React.StrictMode>
  );
}
