// General
import { motion, AnimatePresence } from "framer-motion";

// Styles
import "./Overlay.css";

// Components
import Letters from "../Letters/Letters";

const Overlay = ({ openProducts, setOpenProducts }) => {
  /* ============================= ANIMATIONS =============================  */

  const ease = [0.08, 0.82, 0.17, 1];

  return (
    <div className="home-overlay">
      <Letters openProducts={openProducts} />

      <AnimatePresence>
        {!openProducts && (
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.95, delay: 0.5, ease: ease },
            }}
            exit={{
              opacity: 0,
              y: -10,
              transition: { duration: 0.95, ease: ease },
            }}
            onClick={() => setOpenProducts(true)}
            className="home-btn"
          >
            Découvrir
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Overlay;
