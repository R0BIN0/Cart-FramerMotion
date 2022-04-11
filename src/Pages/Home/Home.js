// General

import React, { useState } from "react";
import { motion } from "framer-motion";

// Style
import "./Home.css";

// Images

import home_background from "../../Assets/Images/General/home_background.png";

// Components
import Overlay from "../../Components/Overlay/Overlay";
import { MemoisedProductList } from "../../Components/ProductList/ProductList";

export default function Home() {
  /* ============================= STATES =============================  */

  const [openProducts, setOpenProducts] = useState(false);
  const [picture, setPicture] = useState(
    "/static/media/product1_1.716522807a3ecc1b58f7.png"
  );

  /* ============================= ANIMATIONS =============================  */

  const ease = [0.08, 0.82, 0.17, 1];

  const container = {
    hidden: {
      transform: "translateY(100%)",
    },

    ...(openProducts && {
      show: {
        transform: "translateY(0%)",
        transition: {
          ease: ease,
          duration: 1,
          staggerChildren: 0.25,
          delay: 0.35,
        },
      },
    }),
  };

  const title = {
    hidden: { opacity: 0, y: 20 },

    ...(openProducts && {
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 4,
          delay: 0.75,
          ease: ease,
        },
      },
    }),
  };

  return (
    <>
      <Overlay openProducts={openProducts} setOpenProducts={setOpenProducts} />

      <div className="home">
        <div className="home-container">
          <div
            className={openProducts ? "home-left home-left-half" : "home-left"}
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: ease }}
              src={picture}
              alt=""
            />
          </div>

          <motion.div
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: [1, 0, 0, 1] }}
            className={
              openProducts ? "home-right" : "home-right home-right-hidden"
            }
          >
            <img className="home-right-img" src={home_background} alt="" />
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="home-products"
            >
              <div className="home-products-container">
                <motion.h2 variants={title}>Rolex</motion.h2>
                <div className="home-products-grid">
                  <MemoisedProductList
                    openProducts={openProducts}
                    setPicture={setPicture}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
