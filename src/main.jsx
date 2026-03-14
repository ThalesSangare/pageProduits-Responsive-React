import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { PanierProvider } from "./components/context/PanierContext.jsx";
import { FavorisProvider } from "./components/context/FavorisContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PanierProvider>
      <FavorisProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FavorisProvider>
    </PanierProvider>
  </StrictMode>,
);
