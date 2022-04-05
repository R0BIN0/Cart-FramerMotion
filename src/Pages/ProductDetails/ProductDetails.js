// General

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Data

import productData from "../../Data/ProductData";

export default function ProductDetails() {
  // ============= STATES =============

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  const [currentProduct, setCurrentProduct] = useState({});
  const [qty, setQty] = useState(1);

  // ============= RECUPERER LE BON PRODUIT =============

  const id = useParams().id;

  useEffect(() => {
    const product = productData.filter((item) => item.id.toString() === id);
    setCurrentProduct(product[0]);
  }, []);

  // ============= MIS A JOUR DU LS =============

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ============= FONCTION "ADD TO CART" =============

  const addToCart = ({ objId, qty }) => {
    let newArr = [...cart];
    const newObj = { ...currentProduct, qty: qty };

    const alreadyHere = cart.findIndex((item) => item.id === objId);

    if (alreadyHere === -1) {
      newArr = [...cart, newObj];
    } else {
      newArr.splice(alreadyHere, 1, newObj);
    }
    setCart(newArr);
  };

  return (
    <>
      <h1>{currentProduct.name}</h1>
      <button onClick={() => addToCart({ objId: currentProduct.id, qty: qty })}>
        AJOUTER
      </button>
      <select value={qty} onChange={(e) => setQty(Number(e.target.value))}>
        {Array.from({ length: currentProduct.stock }).map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
    </>
  );
}
