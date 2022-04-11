import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Styles

import "./Products.css";

const Products = ({ animation, setPicture, id, name, price, images }) => {
  console.log(images);

  return (
    <>
      <Link onMouseOver={() => setPicture(images)} to={`/product/${id}`}>
        <motion.div variants={animation} className="home-product">
          <motion.div className="home-product-img-container">
            <img src={images} alt={name} />
          </motion.div>
          <h3>{name}</h3>
          <p>{price}€</p>
        </motion.div>
      </Link>
    </>
  );
};

export default Products;
