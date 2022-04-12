// Init everytime our LS (localstorage) if deleted

import { useEffect } from "react";

export const RefreshLS = () => {
  useEffect(() => {
    if (!localStorage.getItem("cart")) {
      return localStorage.setItem("cart", JSON.stringify([]));
    }
  }, []);

  return null;
};
