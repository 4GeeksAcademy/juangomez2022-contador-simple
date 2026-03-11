import React from "react";
import ReactDOM from "react-dom/client";
import SecondsCounter from "./components/SecondsCounter";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "@fortawesome/fontawesome-free/css/all.min.css";

// CSS
import "../styles/index.css";

let counter = 0;

const root = ReactDOM.createRoot(document.getElementById("root"));

setInterval(function () {

  root.render(
    <React.StrictMode>
      <SecondsCounter seconds={counter} />
    </React.StrictMode>
  );

  counter++;

}, 1000);