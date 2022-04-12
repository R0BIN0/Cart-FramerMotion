// General
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

// Style
import "./Navbar.css";

// Images
import Bag from "../../Assets/Images/General/bag.png";

// Context
import { CartContext } from "../../Context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  /* ============================= STATES =============================  */

  const [toggle, setToggle] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  /* ============================= Obtenir la largeur de l'écran =============================  */

  useEffect(() => {
    const changeWidth = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className="nav">
      <div className="nav-container">
        {/* ========================= NAV LEFT ========================= */}
        <div className="nav-left">
          <Link to="/">Luxia</Link>
        </div>
        {/* ========================= NAV RIGHT ========================= */}
        <div className="nav-right">
          {/* ============== Nav-right-container ============== */}
          <div
            style={{
              transform:
                innerWidth <= 500
                  ? toggle && "translateY(100vh)"
                  : "translateY(0%)",
            }}
            className="nav-right-container"
          >
            <ul className="nav-list">
              <li className="nav-items">
                <Link onClick={() => setToggle(false)} to="/">
                  Collection
                </Link>
              </li>
              <li className="nav-items">
                <Link onClick={() => setToggle(false)} to="/">
                  À Propos
                </Link>
              </li>
              <li className="nav-items">
                <Link onClick={() => setToggle(false)} to="/">
                  Contact
                </Link>
              </li>
              <li className="nav-items">
                <Link onClick={() => setToggle(false)} to="/cart">
                  <p>Panier</p>
                  <div className="nav-items-bag">
                    <img src={Bag} alt="sac de course" />
                    <div className="circle-bag">{cart.length}</div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          {/* ========================= MENU BURGER ========================= */}
          <div onClick={() => setToggle(!toggle)} className="menu-burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
