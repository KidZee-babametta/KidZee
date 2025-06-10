import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setShowNavbar(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  }, [location]);

  const isActive = (path) =>
    (location.pathname === '/' && path === '') ||
    location.pathname === `/${path}`;

  return (
    <nav className={`navbar ${showNavbar ? 'visible' : 'hidden'}`}>
      <div className="navbar-container">
        <img src="/Images/logo1.jpg" alt="Logo" className="logo" />
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="dot-grid">
            {[...Array(9)].map((_, i) => (
              <span key={i} className="dot" />
            ))}
          </div>
        </div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {['home', 'about', 'gallery', /*'facilities', */ 'admissions', 'contact'].map(link => (
            <li key={link}>
              <Link
                to={`/${link === 'home' ? '' : link}`}
                className={isActive(link === 'home' ? '' : link) ? 'active' : ''}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
