import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
// import App from "./App";
import Game from "./Game";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Game />, document.getElementById("root"));
registerServiceWorker();
