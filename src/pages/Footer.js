import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaClock, FaInstagram, FaYoutube, FaFacebookF, FaChevronDown } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const handleAccordion = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="ganesh1-homepage-footer">
      <div className="ganesh1-footer-section">
        <div className="ganesh1-footer-left ganesh1-footer-left-final">
          <div className="ganesh1-footer-left-top-final">
            <img
              src="/Images/logo8.png"
              alt="Footer Image"
              className="ganesh1-footer-image-final"
            />
          </div>
          <div className="ganesh1-footer-left-bottom-final">
            <img
              src="/Images/brand-mark.png"
              alt="Footer Image"
              className="ganesh1-footer-image1-final"
            />
          </div>
        </div>

        <div
          className={`ganesh1-footer-list-item ganesh1-mobile-accordion ${
            openSection === "playgroup" ? "open" : ""
          }`}
        >
          <div
            className="ganesh1-footer-list-header"
            onClick={() => handleAccordion("playgroup")}
          >
            <span>PlayGroup</span>
            <span
              className={`ganesh1-toggle-icon ganesh1-mobile-only ${
                openSection === "playgroup" ? "open" : ""
              }`}
            >
              <FaChevronDown />
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

        <div
          className={`ganesh1-footer-list-item ganesh1-mobile-accordion ${
            openSection === "daycare" ? "open" : ""
          }`}
        >
          <div
            className="ganesh1-footer-list-header"
            onClick={() => handleAccordion("daycare")}
          >
            <span>DayCare  &nbsp; &nbsp;</span>
            <span
              className={`ganesh1-toggle-icon ganesh1-mobile-only ${
                openSection === "daycare" ? "open" : ""
              }`}
            >
              <FaChevronDown />
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

        <div
          className={`ganesh1-footer-list-item ganesh1-mobile-accordion ${
            openSection === "contact" ? "open" : ""
          }`}
        >
          <div
            className="ganesh1-footer-list-header"
            onClick={() => handleAccordion("contact")}
          >
            <span>Contact Us</span>
            <span
              className={`ganesh1-toggle-icon ganesh1-mobile-only ${
                openSection === "contact" ? "open" : ""
              }`}
            >
              <FaChevronDown />
            </span>
          </div>
          <div className="ganesh1-contact-details">
            <p>
              <FaPhoneAlt /> +91 95123 12337 / 38 / 39
            </p>
            <p>
              <FaEnvelope /> kidzeebabmetta@gmail.com
            </p>
            <p>
              <FaClock /> Timings - 09:00 am. to 01:00 pm., Mon-Fri
            </p>
            <p>
              <FaClock /> Day Care - 01:00 pm. to 05:00 pm., Mon-Fri
            </p>
          </div>
          <div className="ganesh1-footer-social">
            <span>Social Media</span>
            <div className="ganesh1-social-icons">
              <a href="https://www.instagram.com/kidzee_babametta/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com/@kidzeepreschoolbabametta" target="_blank" rel="noopener noreferrer" >
                <FaYoutube />
              </a>
              <a href="https://www.facebook.com/kidzeepreschoolbabametta/" target="_blank" rel="noopener noreferrer" >
                <FaFacebookF />
              </a>
            </div>
            <div className="ganesh1-extra-final">
              <img
                src="/Images/qr.jpg"
                alt="QR Code"
                className="ganesh1-footer-image2-final"
              />
              <img
                src="/Images/zee-learn.png"
                alt="Zee Learn"
                className="ganesh1-footer-image3-final"
              />
            </div>
          </div>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
