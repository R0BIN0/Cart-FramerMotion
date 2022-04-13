// General
import { HashRouter as BrowserRouter } from "react-router-dom";

// Context
import CartContextProvider from "./Context/CartContext";

// Styles
import "./App.css";

// Routing
import AnimatedRoutes from "./Routing/AnimatedRoutes";

// Hooks

import { ScrollRestoration } from "./Hooks/ScrollRestoration";
import { RefreshLS } from "./Hooks/RefreshLS";

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <ScrollRestoration />
          <RefreshLS />
          <AnimatedRoutes />
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;

console.log(
  "%cDéveloppé par Robino 🐣",
  "color: black; font-weight: bold; background-color: white; padding: 2rem; font-family: Work Sans, sans-serif;"
);
