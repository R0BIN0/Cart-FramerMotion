import { useState, useEffect } from "react";

export default function Cart() {
  // ============= STATES =============

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  // ============= MIS A JOUR DU LS =============

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ============= FONCTION "REMOVE FROM CART" =============

  const removeFromCart = (objId) => {
    setCart((prev) => prev.filter((item) => item.id !== objId));
  };

  // ============= FONCTION "UPDATE QTY" =============

  const updateQty = ({ objId, qty }) => {
    setCart((prev) =>
      prev.map((item) => (item.id === objId ? { ...item, qty: qty } : item))
    );
  };

  return (
    <>
      {cart.map((item, i) => (
        <div key={i}>
          <h1>{item.name}</h1>
          <p>{item.qty}</p>
          <button onClick={() => removeFromCart(item.id)}>X</button>
          <select
            value={item.qty}
            onChange={(e) =>
              updateQty({ objId: item.id, qty: Number(e.target.value) })
            }
          >
            {Array.from({ length: item.stock }).map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      ))}
    </>
  );
}
