// Styles
import "./ProductsCart.css";

// Images
import { ReactComponent as Cross } from "../../Assets/Images/General/cross.svg";

const ProductsCart = ({ id, name, price, img, qty, setCart }) => {
  // ============= mis à jour de la quantité =============

  const updateQty = ({ action }) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: action === "add" ? addQty(item) : removeQty(item) }
          : item
      )
    );
  };

  const addQty = (item) => {
    if (item.qty >= item.stock) {
      return item.stock;
    } else {
      return item.qty + 1;
    }
  };

  const removeQty = (item) => {
    if (item.qty === 1) {
      return 1;
    } else {
      return item.qty - 1;
    }
  };

  // ============= retirer un produit du cart =============

  const removeFromCart = () => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="PC">
        {/* ========================= HOME-TOP ========================= */}
        <div className="PC-top">
          {/* ============== PC-buttons-qty ============== */}
          <div className="PC-qty-buttons-container">
            <button onClick={() => updateQty({ action: "remove" })}>-</button>
            <span>{qty}</span>
            <button onClick={() => updateQty({ action: "add" })}>+</button>
          </div>
          <button className="PC-remove-btn" onClick={() => removeFromCart()}>
            <Cross className="PC-remove-btn-img" />
          </button>
        </div>
        {/* ========================= HOME-BOTTOM ========================= */}
        <div className="PC-bottom">
          <img src={img} alt={name} />
          <p>{name} </p>
          <p className="PC-price">
            {price}€ <span>(x{qty})</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductsCart;
