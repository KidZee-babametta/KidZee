import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import PencilLoader from './PencilLoader';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [programmesDropdownOpen, setProgrammesDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef();

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
        setAboutDropdownOpen(false);
        setProgrammesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path) =>
    (location.pathname === '/' && path === '') ||
    location.pathname === `/${path}`;

  const handleLinkClick = (path, scrollToId = null) => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
      window.scrollTo(0, 0);
      setLoading(false);
      if (scrollToId) {
        setTimeout(() => {
          const section = document.getElementById(scrollToId);
          if (section) section.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }, 1200);
  };

  return (
    <>
      {loading && <PencilLoader />}
      <nav className={`navbar ${showNavbar ? 'visible' : 'hidden'}`} ref={navRef}>
        <div className="navbar-container">
          <img src="/Images/logo5.png" alt="Logo" className="logo" />
          <div className="nav-button-section">
            <div className="wavy-bg">
              <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <li>
                  <Link to="/" className={isActive('') ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }}>
                    Home
                  </Link>
                </li>
                <li className="dropdown" onMouseEnter={() => setAboutDropdownOpen(true)} onMouseLeave={() => setAboutDropdownOpen(false)}>
                  <Link to="/about" className={isActive('about') ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleLinkClick('/about'); }}>
                    About
                  </Link>
                  {aboutDropdownOpen && (
                    <ul className="dropdown-menu">
                      <li onClick={(e) => { e.preventDefault(); handleLinkClick('/about', 'legacy'); }}>Legacy</li>
                      <li onClick={(e) => { e.preventDefault(); handleLinkClick('/about', 'kidzee-advantage'); }}>Kidzee Advantage</li>
                      <li onClick={(e) => { e.preventDefault(); handleLinkClick('/about', 'vision-mission'); }}>Vision & Mission</li>
                    </ul>
                  )}
                </li>
                <li className="dropdown" onMouseEnter={() => setProgrammesDropdownOpen(true)} onMouseLeave={() => setProgrammesDropdownOpen(false)}>
                  <Link to="/programmes" className={isActive('programmes') ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleLinkClick('/programmes'); }}>
                    Programmes
                  </Link>
                  {programmesDropdownOpen && (
                    <ul className="dropdown-menu">
                      <li onClick={(e) => { e.preventDefault(); handleLinkClick('/programmes', 'play-group'); }}>Play Group</li>
                      <li onClick={(e) => { e.preventDefault(); handleLinkClick('/programmes', 'nursery'); }}>Nursery</li>
                      <li onClick={(e) => { e.preventDefault(); handleLinkClick('/programmes', 'teacher-training'); }}>Teacher Training</li>
                      <li onClick={(e) => { e.preventDefault(); handleLinkClick('/programmes', 'day-care'); }}>Day Care</li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link to="/PenteMind" className={isActive('PenteMind') ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleLinkClick('/PenteMind'); }}>
                    PenteMind
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className={isActive('gallery') ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleLinkClick('/gallery'); }}>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/admissions" className={isActive('admissions') ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleLinkClick('/admissions'); }}>
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className={isActive('contact') ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleLinkClick('/contact'); }}>
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                <div className="dot-grid">
                  {[...Array(9)].map((_, i) => (
                    <span key={i} className="dot" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
