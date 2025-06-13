import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './Contact.css';

function Contact() {
    const [mainIndex, setMainIndex] = useState(0);
    const formRef = useRef();
    const location = useLocation();

    useEffect(() => {
        if (location.hash === "#ganesh123-contact-form") {
            const scrollToSection = () => {
                const section = document.querySelector(location.hash);
                if (section) {
                    section.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            };

            const timeout = setTimeout(scrollToSection, 200);

            return () => clearTimeout(timeout);
        }
    }, [location]);



    const mainSlides = [
        "/Images/overlay-main-1.jpg",
        "/Images/overlay-main-2.jpg",
        "/Images/overlay-main-3.jpg",
    ];


    useEffect(() => {
        const intervalMain = setInterval(() => {
            setMainIndex((prev) => (prev + 1) % mainSlides.length);
        }, 3000);

        return () => {
            clearInterval(intervalMain);
        };
    }, []);


    return (
        <div className="contact-page-wrapper">
            <Navbar />

            <section className="contact-banner-section">
                <div className="contact-banner-container">
                    <img
                        src="/Images/admission_banner.png"
                        alt="Admission Banner"
                        className="contact-banner-image"
                    />
                    <div className="contact-banner-content">
                        <h1 className="contact-heading">Kidzee Preschool</h1>
                        <h2 className="contact-subheading">Admissions Open for 2025-26</h2>
                        {/*<button className="contact-enquire-button">Enquire Now</button> */}
                    </div>
                </div>
            </section>

            <section id="admissions" className="contact-section2">
                <div className="contact-left">
                    <h1 className="contact-heading">Welcome to Kidzee Baba Metta, Vizianagaram</h1>
                    <p className="contact-description">“Nurturing Gen-Next with Love, Learning & Safety”</p>
                    <p className="contact-text">
                        At Kidzee Baba Metta, we provide a vibrant, safe, and stimulating environment where your child blossoms into a confident and curious learner.
                    </p>
                    {/*<button className="contact-enquire-button">Enquire Now</button> */}
                </div>
                <div className="contact-right">
                    <div className="contact-slideshow">
                        <img
                            src={mainSlides[mainIndex]}
                            alt="Slideshow"
                            className="contact-slideshow-image"
                        />
                    </div>
                </div>
            </section>



            <section id="features" className="run-infrastructure-section">
  <h2 className="run-infrastructure-heading">✨ Our State-of-the-Art Infrastructure Includes:</h2>
  <div className="run-infrastructure-gallery">
    <img
      src="/Images/legacy1.jpg"
      alt="Legacy Feature"
      className="run-infrastructure-image"
    />
    <img
      src="/Images/legacy2.jpg"
      alt="Legacy Feature"
      className="run-infrastructure-image"
    />
    <img
      src="/Images/legacy3.jpg"
      alt="Legacy Feature"
      className="run-infrastructure-image"
    />
    <img
      src="/Images/legacy4.jpg"
      alt="Legacy Feature"
      className="run-infrastructure-image"
    />
    <img
      src="/Images/legacy5.jpg"
      alt="Legacy Feature"
      className="run-infrastructure-image"
    />
  </div>
</section>

<section id="contact-info" className="preethi-contact-section1">
  <div className="preethi-contact-cards-wrapper">
    <div className="preethi-contact-card">
      <h3 className="preethi-section-heading">📞 Contact for Admissions:</h3>
      <p className="preethi-contact-info-text">📱 95 123 123 37 / 95 123 123 38 / 95 123 123 39</p>
    </div>
    <div className="preethi-contact-card">
      <h3 className="preethi-section-heading">📩 Email:</h3>
      <p className="preethi-contact-info-text">kidzeebabamettavzm@gmail.com</p>
    </div>
    <div className="preethi-contact-card">
      <h3 className="preethi-section-heading">📲 Social Media</h3>
      <div className="preethi-social-media-icons">
        <i className="fab fa-instagram"></i>
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-youtube"></i>
      </div>
    </div>
    <div className="preethi-contact-card">
      <h3 className="preethi-section-heading">📍 Visit Us</h3>
      <p className="preethi-contact-info-text">Backside of Devi Park, MIG-364, Babametta, Vizianagaram</p>
    </div>
  </div>
</section>






            <section id="ganesh123-contact-form" className="ganesh123-contact-section">
                <form ref={formRef} className="ganesh123-contact-form">
                    <span className="ganesh123-heading">Contact Us</span>

                    <div className="ganesh123-form-group">
                        <input className="ganesh123-form-input" required type="text" id="name" name="name" />
                        <label htmlFor="name" className="ganesh123-contact-form-label">Name</label>
                    </div>

                    <div className="ganesh123-form-group">
                        <input className="ganesh123-form-input" required type="email" id="email" name="email" />
                        <label htmlFor="email" className="ganesh123-contact-form-label">Email</label>
                    </div>

                    <div className="ganesh123-form-group">
                        <input className="ganesh123-form-input" required type="text" id="phone" name="phone" />
                        <label htmlFor="phone" className="ganesh123-contact-form-label">Phone</label>
                    </div>

                    <div className="ganesh123-form-group">
                        <textarea className="ganesh123-form-input" required id="message" name="message" rows="4"></textarea>
                        <label htmlFor="message" className="ganesh123-contact-form-label">Message</label>
                    </div>

                    <button type="submit" className="ganesh123-contact-submit-button">Submit</button>
                </form>
            </section>


            <Footer />
        </div>
    );
}

export default Contact;
