import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <i className="fas fa-robot"></i> AI Ethics
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/#magazine1"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Revista
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/#hero-section"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Autores
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/graphic"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Graficas
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/codigo-etico-1"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Código Ético 1
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/codigo-etico-2"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Código Ético 2
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/referencias"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Referencias
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
