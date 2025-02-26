import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import StoreHandler from "./StoreHandler/StoreHandler";
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <StoreHandler />
    </BrowserRouter>
  </StrictMode>,
);
