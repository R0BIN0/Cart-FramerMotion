// General

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

// Styles
import "./ProductDetails.css";

// Data

import productData from "../../Data/ProductData";
import SlideShow from "../../Components/SlideShow/SlideShow";

export default function ProductDetails() {
  // ============= STATES =============

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  const [currentProduct, setCurrentProduct] = useState({});
  const [qty, setQty] = useState(1);

  const [sliderIndex, setSliderIndex] = useState(0);
  const [firstAnimation, setFirstAnimation] = useState(false);

  // ============= FONCTION "SwitchSlide" =============

  const switchSlider = (index) => {
    setSliderIndex(index);
    if (!firstAnimation) {
      setFirstAnimation(true);
    }
  };

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

  // ============= MIS A JOUR DE LA QUANTITE A L'ARRIVE SUR LA PAGE =============

  useEffect(() => {
    [...cart].map((item) =>
      item.id === currentProduct.id ? setQty(item.qty) : item
    );
  }, [currentProduct]);

  // ============= FONCTION "MODIFY QTY" =============

  const addQty = () => {
    if (qty === currentProduct.stock) {
      setQty(currentProduct.stock);
    } else {
      setQty((qty) => qty + 1);
    }
  };

  const removeQty = () => {
    if (qty === 1) {
      setQty(1);
    } else {
      setQty((qty) => qty - 1);
    }
  };

  // ============= FONCTION "ADD TO CART" =============

  const addToCart = (objId) => {
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
      <div className="PD">
        <div className="PD-container">
          <div className="PD-left">
            <motion.div
              // Animate with "scale" for the performance
              initial={{ transform: "scale(1)" }}
              animate={{ transform: "scale(0.8)" }}
              transition={{ duration: 0.4, ease: [1, 0, 0, 1] }}
              className="PD-img-container"
            >
              {currentProduct.images && (
                <SlideShow
                  key={currentProduct.images[sliderIndex]}
                  firstAnimation={firstAnimation}
                  img={currentProduct.images[sliderIndex]}
                  alt={currentProduct.name}
                />
              )}
            </motion.div>
            <div className="PD-slider">
              {currentProduct.images && (
                <div className="PD-slider-nav">
                  {[...Array(currentProduct.images.length)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => switchSlider(i)}
                      className={
                        i === sliderIndex
                          ? "PD-slider-btn PD-slider-btn-active"
                          : "PD-slider-btn"
                      }
                    >
                      <div
                        className={
                          i === sliderIndex
                            ? "PD-slider-item PD-slider-item-active"
                            : "PD-slider-item"
                        }
                      ></div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: [1, 0, 0, 1] }}
            className="PD-right"
          >
            <h1 className="PD-title">{currentProduct.name}</h1>
            <p className="PD-price">{currentProduct.price}€</p>
            <p className="PD-description">{currentProduct.description}</p>
            <div className="PD-features-container">
              <div className="PD-features-box">
                <p className="PD-feature-title">Quantité :</p>
                {currentProduct.stock !== 0 && (
                  <div className="PD-qty-buttons-container">
                    <button onClick={() => removeQty()}>-</button>
                    <span>{qty}</span>
                    <button onClick={() => addQty()}>+</button>
                  </div>
                )}

                <div
                  className={
                    currentProduct.stock !== 0
                      ? "PD-qty-stock"
                      : "PD-qty-stock PD-qty-stock-out"
                  }
                >
                  <p>{currentProduct.stock} en stock</p>
                </div>
              </div>
              <div className="PD-features-box">
                <p className="PD-feature-title">Taille :</p>
                <p>{currentProduct.size}</p>
              </div>
              <div className="PD-features-box">
                <p className="PD-feature-title">Délai de livraison :</p>
                <p>6 avr. - 12 avr.</p>
              </div>
            </div>
            <div className="PD-buttons-container">
              {currentProduct.stock !== 0 ? (
                <button
                  onClick={() => addToCart(currentProduct.id)}
                  className="PD-btn-add"
                >
                  Ajouter au panier
                </button>
              ) : (
                <div className="PD-btn-add PD-btn-stock-out">
                  Indisponible pour le moment
                </div>
              )}

              <button className="PD-btn-like">Wishlist </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
