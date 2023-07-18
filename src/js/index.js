//import react into the bundle
import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import TrafficLight from "./component/trafficLight.jsx";


ReactDOM.render( <TrafficLight />, document.querySelector("#app"));