// General
import { motion, AnimatePresence } from "framer-motion";

// Styles
import "./Letters.css";

const Letters = ({ openProducts }) => {
  /* ============================= ANIMATIONS =============================  */

  const ease = [0.08, 0.82, 0.17, 1];

  const container = {
    show: {
      transition: {
        staggerChildren: 0.05,
        ease: ease,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        ease: ease,
      },
    },
  };

  const item = {
    hidden: { transform: "translateY(-200%)" },

    show: {
      transform: "translateY(0%)",
      transition: {
        duration: 1,
        ease: ease,
      },
    },

    exit: {
      transform: "translateY(-100%)",
      transition: {
        duration: 1.5,
        ease: ease,
      },
    },
  };

  return (
    <AnimatePresence>
      {!openProducts && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          className="home-letters-container"
        >
          <motion.p variants={item}>R</motion.p>
          <motion.p variants={item}>O</motion.p>
          <motion.p variants={item}>L</motion.p>
          <motion.p variants={item}>E</motion.p>
          <motion.p variants={item}>X</motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Letters;
