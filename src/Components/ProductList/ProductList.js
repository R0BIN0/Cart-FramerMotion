// General
import { memo } from "react";
import { v4 as uuidv4 } from "uuid";

// Components
import ProductsHome from "../ProductsHome/ProductsHome";

// Data
import productData from "../../Data/ProductData";

const ProductList = ({ openProducts, setPicture }) => {
  /* ============================= ANIMATIONS =============================  */

  const ease = [0.08, 0.82, 0.17, 1];

  const card = {
    hidden: { transform: "translateY(300px)", opacity: 0.2 },

    ...(openProducts && {
      show: {
        transform: "translateY(0px)",
        opacity: 1,
        transition: {
          duration: 2,
          ease: ease,
        },
      },
    }),
  };

  return (
    <>
      {productData.map((item) => (
        <ProductsHome
          key={uuidv4()}
          animation={card}
          setPicture={setPicture}
          id={item.id}
          name={item.name}
          price={item.price}
          images={item.images[0]}
        />
      ))}
    </>
  );
};

export const MemoisedProductList = memo(ProductList);
