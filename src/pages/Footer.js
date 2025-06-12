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
    <footer className="ganesh1-homepage-footer">
      <div className="ganesh1-footer-section">
        <div className="ganesh1-footer-left">
          <img src="/Images/logo-no-bg.png" alt="Footer Image" className="ganesh1-footer-image" />
          {/*<h3 className="ganesh1-footer-heading">Kidzee</h3> */}
          {/*<h4 className="ganesh1-footer-subheading">ZEE Learn Limited</h4> */}
          <p className="ganesh1-footer-address">BABA METTA , Vizianagaram</p>
          <div className="ganesh1-extra">
            <img src="/Images/brand-mark.png" alt="Footer Image" className="ganesh1-footer-image1" />
          </div>
        </div>

        <div className={`ganesh1-footer-list-item ganesh1-mobile-accordion ${openSection === "playgroup" ? "open" : ""}`}>
          <div className="ganesh1-footer-list-header" onClick={() => handleAccordion("playgroup")}>
            <span>PlayGroup</span>
            <span className="ganesh1-toggle-icon ganesh1-mobile-only">
              {openSection === "playgroup" ? "-" : "+"}
            </span>
          </div>
          <ul className="ganesh1-sub-list">
            <li>Nursery</li>
            <li>Kindergarten</li>
            <li>Teacher Training Programme</li>
            <li>Privacy Policy</li>
            <li>Elementary School</li>
          </ul>
        </div>

        <div className={`ganesh1-footer-list-item ganesh1-mobile-accordion ${openSection === "daycare" ? "open" : ""}`}>
          <div className="ganesh1-footer-list-header" onClick={() => handleAccordion("daycare")}>
            <span>DayCare</span>
            <span className="ganesh1-toggle-icon ganesh1-mobile-only">
              {openSection === "daycare" ? "-" : "+"}
            </span>
          </div>
          <ul className="ganesh1-sub-list">
            <li>Péntemind</li>
            <li>Blog</li>
            <li>In News</li>
            <li>Locate Us</li>
            <li>Our Presence</li>
          </ul>
        </div>

        <div className={`ganesh1-footer-list-item ganesh1-mobile-accordion ${openSection === "contact" ? "open" : ""}`}>
          <div className="ganesh1-footer-list-header" onClick={() => handleAccordion("contact")}>
            <span>Contact Us</span>
            <span className="ganesh1-toggle-icon ganesh1-mobile-only">
              {openSection === "contact" ? "-" : "+"}
            </span>
          </div>
          <div className="ganesh1-contact-details">
            <p>
              <FaPhoneAlt /> +91 95123 12339 / 38 / 39
            </p>
            <p>
              <FaEnvelope /> kidzeebabmetta@gmail.com
            </p>
            <p>
              <FaClock /> Timings - 09:15 a.m. to 12:15 p.m., Mon-Fri

            </p>
            <p>
              <FaClock /> Day Care - 01:00 p.m. to 05:00 p.m., Mon-Fri
            </p>
          </div>
          <div className="ganesh1-footer-social">
            <span>Social Media</span>
            <div className="ganesh1-social-icons">
              <a href="https://www.instagram.com/reel/DKlVvfgO59-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://youtube.com/shorts/79Jae0VpCs4?feature=share" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a href="https://www.facebook.com/share/v/1EwKocruYF/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <div className="ganesh1-extra">
                <img src="/Images/zee-learn.png" alt="Footer Image" className="ganesh1-footer-image1" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ganesh1-footer-bubbles">
        <img src="/Images/baloon.png" className="ganesh1-footer-bubble ganesh1-footer-bubble-one" />
        <img src="/Images/more_fish.png" className="ganesh1-footer-bubble ganesh1-footer-bubble-two" />
      </div>
    </footer>
  );
};

export default Footer;
