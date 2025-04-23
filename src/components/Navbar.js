import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const location = useLocation();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const scrollOrNavigate = (id) => {
    closeMobileMenu();
    if (location.pathname === '/') {
      scroller.scrollTo(id, { smooth: true, duration: 500 });
    } else {
      // Ir a home y hacer scroll después
      window.location.href = `/#${id}`;
    }
  };

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <i className='fas fa-robot'></i> AI Ethics
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <div className='nav-links' onClick={() => scrollOrNavigate('magazine1')}>
              Revista
            </div>
          </li>
          <li className='nav-item'>
            <div className='nav-links' onClick={() => scrollOrNavigate('hero-section')}>
              Autores
            </div>
          </li>
          <li className='nav-item'>
            <div className='nav-links' onClick={() => scrollOrNavigate('referencias-home')}>
              Referencias
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
