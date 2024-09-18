import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // React 18 root API
import { BrowserRouter } from "react-router-dom"; // React Router for navigation

import App from "./App"; // Main App component

// Create root element from the DOM
const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // Using createRoot API in React 18

// Render the App inside StrictMode and BrowserRouter
root.render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
