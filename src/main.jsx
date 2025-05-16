import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Chatbox from "./components/models/chatbox/Chatbox.jsx";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Chatbox />
    <App />
  </StrictMode>
);
