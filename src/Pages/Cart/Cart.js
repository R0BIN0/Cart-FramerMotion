// General
import { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Styles
import "./Cart.css";

// Images
import { ReactComponent as Arrow } from "../../Assets/Images/General/arrow.svg";

// Components
import ProductsCart from "../../Components/ProductsCart/ProductsCart";

// Context
import { CartContext } from "../../Context/CartContext";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);

  // ============= STATES =============

  const [price, setPrice] = useState("");

  // ============= calcul du prix final =============

  useEffect(() => {
    setPrice(() =>
      cart.reduce(
        (acc, item) => acc + Number(item.price.replaceAll(" ", "")) * item.qty,
        0
      )
    );
  }, [cart]);

  return (
    <>
      {cart.length !== 0 ? (
        <motion.section
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [1, 0, 0, 1] }}
          className="cart"
        >
          <div className="cart-container">
            {/* ========================= CART-LEFT ========================= */}
            <div className="cart-left">
              {/* ============== Cart-product-grid ============== */}
              <div className="cart-left-grid">
                {cart.map((item) => (
                  <ProductsCart
                    key={uuidv4()}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    img={item.images[0]}
                    qty={item.qty}
                    setCart={setCart}
                  />
                ))}
              </div>
            </div>
            {/* ========================= CART-LEFT ========================= */}
            <div className="cart-right">
              {/* ============== Cart-promo-input ============== */}
              <div className="cart-right-input-container">
                <input type="text" placeholder="Code Promo" />
                <button>
                  <Arrow className="cart-right-btn-img" />
                </button>
              </div>
              {/* ============== Cart-pricing-container ============== */}
              <div className="cart-right-pricing-container">
                <div className="cart-right-pricing-box">
                  <p>Prix Total :</p>

                  <p>{price && price.toFixed(2)}€</p>
                </div>
                <div className="cart-right-pricing-box">
                  <p>
                    Tax <span>(2%)</span> :
                  </p>
                  <p>{price && (price * 0.02).toFixed(2)}€</p>
                </div>
                <div className="cart-right-pricing-box">
                  <p>Livraison :</p>
                  <p>Gratuite</p>
                </div>
                <div className="cart-right-pricing-box">
                  <p>Total :</p>
                  <p>{price && (price + price * 0.02).toFixed(2)}€</p>
                </div>
                {/* ============== Cart-btn-container ============== */}
                <div className="cart-right-buttons-container">
                  <button className="cart-right-btn">
                    Procéder au paiement
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      ) : (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [1, 0, 0, 1] }}
          className="no-cart"
        >
          <p>Votre panier est vide</p>
          <Link to="/">Revenir à l&apos;accueil</Link>
        </motion.div>
      )}
    </>
  );
}
