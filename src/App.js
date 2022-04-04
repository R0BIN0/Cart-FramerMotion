// General

import { BrowserRouter } from "react-router-dom";

// Styles

import "./App.css";

// Routing

import AnimatedRoutes from "./Routing/AnimatedRoutes";

// Hooks

import { ScrollRestoration } from "./Hooks/ScrollRestoration";

function App() {
  return (
    <BrowserRouter>
      <ScrollRestoration />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
