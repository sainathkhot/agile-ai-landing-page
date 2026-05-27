import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import Lenis from "lenis";

const lenis = new Lenis({
  duration: 2,
  smoothWheel: true,
  wheelMultiplier: 0.85,
  touchMultiplier: 1.5,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

