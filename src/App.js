// General

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles

import "./App.css";

// Components

import Home from "./Pages/Home/Home";

// Hooks

import { ScrollRestoration } from "./Hooks/ScrollRestoration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <ScrollRestoration />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
