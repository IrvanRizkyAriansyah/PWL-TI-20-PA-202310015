import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FormPersonalData from "./components/tugas1/FormPersonalData";
import Widget1 from "./components/tugas2/Widget1";
import FormPersonalDataMultiple from "./components/tugas2/FormPersonalDataMultiple";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FormPersonalData />
    <Widget1 />
    <FormPersonalDataMultiple />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
