import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const handleAccordion = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="homepage-footer">
      <div className="footer-section">
        <div className="footer-left">
          <img src="/Images/logo.jpg" alt="Footer Image" className="footer-image"/>
          <h3 className="footer-heading">Kidzee</h3>
          {/*<h4 className="footer-subheading">ZEE Learn Limited</h4> */}
          <p className="footer-address">BABA METTA , Vizianagaram</p>
          <div className="extra">
            <img src="/Images/brand-mark.png" alt="Footer Image" className="footer-image1"/>
          </div>
          
        </div>

        <div
          className={`footer-list-item mobile-accordion ${openSection === "playgroup" ? "open" : ""
            }`}
        >
          <div
            className="footer-list-header"
            onClick={() => handleAccordion("playgroup")}
          >
            <span>PlayGroup</span>
            <span className="toggle-icon mobile-only">
              {openSection === "playgroup" ? "-" : "+"}
            </span>
          </div>
          <ul className="sub-list">
            <li>Nursery</li>
            <li>Kindergarten</li>
            <li>Teacher Training Programme</li>
            <li>Privacy Policy</li>
            <li>Elementary School</li>
          </ul>
        </div>

        <div
          className={`footer-list-item mobile-accordion ${openSection === "daycare" ? "open" : ""
            }`}
        >
          <div
            className="footer-list-header"
            onClick={() => handleAccordion("daycare")}
          >
            <span>DayCare</span>
            <span className="toggle-icon mobile-only">
              {openSection === "daycare" ? "-" : "+"}
            </span>
          </div>
          <ul className="sub-list">
            <li>Péntemind</li>
            <li>Blog</li>
            <li>In News</li>
            <li>Locate Us</li>
            <li>Our Presence</li>
          </ul>
        </div>

        <div className={`footer-list-item mobile-accordion ${openSection === "contact" ? "open" : ""}`} >
          <div className="footer-list-header" onClick={() => handleAccordion("contact")} >
            <span>Contact Us</span>
            <span className="toggle-icon mobile-only">
              {openSection === "contact" ? "-" : "+"}
            </span>
          </div>
          <div className="contact-details">
            <p>
              <FaPhoneAlt /> +91 95123 12339
            </p>
            <p>
              <FaEnvelope /> kidzeebabmetta@gmail.com
            </p>
            <p>
              <FaClock /> 09:15 a.m. to 12:15 p.m., Mon-Fri
            </p>
          </div>
          <div className="footer-social">
            <h4>Social Media</h4>
            <div className="social-icons">
              <a href="https://www.instagram.com/reel/DKlVvfgO59-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://youtube.com/shorts/79Jae0VpCs4?feature=share" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a href="https://www.facebook.com/share/v/1EwKocruYF/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <div className="extra">
            <img src="/Images/zee-learn.png" alt="Footer Image" className="footer-image1"/>
          </div>

            </div>
          </div>
        </div>
      </div>

      <div className="footer-bubbles">
        <img
          src="/Images/baloon.png"
          className="footer-bubble footer-bubble-one"
        />
        <img
          src="/Images/more_fish.png"
          className="footer-bubble footer-bubble-two"
        />
      </div>
    </footer>
  );
};

export default Footer;
