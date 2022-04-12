// General
import { motion, AnimatePresence } from "framer-motion";

const SlideShow = ({ firstAnimation, img, alt }) => {
  /* ============================= ANIMATIONS =============================  */

  const ease = [0.08, 0.82, 0.17, 1];

  const slideAnimation = {
    ...(firstAnimation && {
      hidden: {
        x: -50,
        opacity: 0,
      },
      show: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
          ease: ease,
        },
      },
    }),
  };

  return (
    <AnimatePresence>
      <motion.img
        variants={slideAnimation}
        initial="hidden"
        animate="show"
        src={img}
        alt={alt}
      />
    </AnimatePresence>
  );
};

export default SlideShow;
