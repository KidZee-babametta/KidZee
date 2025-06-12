import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import PencilLoader from './PencilLoader';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
    setLoading(false);
  }, [location]);

  const isActive = (path) =>
    (location.pathname === '/' && path === '') ||
    location.pathname === `/${path}`;

  const handleLinkClick = (path) => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 3000);
  };

  return (
    <>
      {loading && <PencilLoader />} 
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
            {['home', 'about', 'gallery', 'admissions', 'contact'].map(link => (
              <li key={link}>
                <Link
                  to={`/${link === 'home' ? '' : link}`}
                  className={isActive(link === 'home' ? '' : link) ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault(); 
                    handleLinkClick(`/${link === 'home' ? '' : link}`); 
                  }}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
