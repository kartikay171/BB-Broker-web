import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./css/style1.css";
import "./css/bootstrap.min.css";
import "./css/color_theme.css";
import "./css/skin_color.css";
import "./css/style_rtl.css";
import "./css/style-2.css";
import "./css/vendors_css.css";
import "./css/fontawesome-all.min.css";
import "./icomoon/style.css";

// import "./css/skin_color.css";
// import "./css/style1.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
