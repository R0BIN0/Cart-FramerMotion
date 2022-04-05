// General

import { BrowserRouter } from "react-router-dom";

// Styles

import "./App.css";

// Routing

import AnimatedRoutes from "./Routing/AnimatedRoutes";

// Hooks

import { ScrollRestoration } from "./Hooks/ScrollRestoration";
import RefreshLS from "./Hooks/RefreshLS";

function App() {
  return (
    <BrowserRouter>
      <ScrollRestoration />
      <RefreshLS />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
