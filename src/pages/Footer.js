import React from "react";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="homepage-footer">
      <div className="footer-section">
        <div className="footer-left">
          <h3 className="footer-heading">Kidzee</h3>
          <h4 className="footer-subheading">ZEE Learn Limited</h4>
          <p className="footer-address">BABA METTA , Vizianagaram</p>
        </div>

        <div className="footer-list">
          <ul>
            <li>PlayGroup</li>
            <li>Nursery</li>
            <li>Kindergarten</li>
            <li>Teacher Training Programme</li>
            <li>Privacy Policy</li>
            <li>Elementary School</li>
          </ul>
        </div>

        <div className="footer-links">
          <ul>
            <li>DayCare</li>
            <li>Péntemind</li>
            <li>Blog</li>
            <li>In News</li>
            <li>Locate Us</li>
            <li>Our Presence</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>
            <FaPhoneAlt /> +91 95123 12339
          </p>
          <p>
            <FaEnvelope /> kidzeebabmettavzm@gmail.com
          </p>
          <p>
            <FaClock /> 10:00 a.m. to 06:00 p.m., Mon-Fri
          </p>
        </div>
      </div>

      <div className="footer-bubbles">
        <img src="/Images/baloon.png"  className="footer-bubble footer-bubble-one" />
        <img src="/Images/more_fish.png"  className="footer-bubble footer-bubble-two" />
      </div>
    </footer>
  );
}

export default Footer;
