import { useEffect } from "react";

const RefreshLS = () => {
  useEffect(() => {
    if (!localStorage.getItem("cart")) {
      return localStorage.setItem("cart", JSON.stringify([]));
    }
  }, []);

  return null;
};

export default RefreshLS;
