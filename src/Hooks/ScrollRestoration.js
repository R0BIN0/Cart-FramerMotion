import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const ScrollRestoration = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Avoid scroll problem with react-router-dom
