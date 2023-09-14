import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import App from "./App.jsx";
import "./index.css";

const firebaseConfig = {
  apiKey: "AIzaSyC568tgQdMOOZ1a4KtRj8hoc-EgCTGSdsc",
  authDomain: "pacstore-react.firebaseapp.com",
  projectId: "pacstore-react",
  storageBucket: "pacstore-react.appspot.com",
  messagingSenderId: "278933862886",
  appId: "1:278933862886:web:803dc39cd7135af22abe27",
  measurementId: "G-ELZSNDX348",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
