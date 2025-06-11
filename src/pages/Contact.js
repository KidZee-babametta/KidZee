import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Contact.css';

function Contact() {
    const [mainIndex, setMainIndex] = useState(0);

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
                        <button className="contact-enquire-button">Enquire Now</button>
                    </div>
                </div>
            </section>

            <section id="admissions" className="contact-section">
                <div className="contact-left">
                    <h1 className="contact-heading">Welcome to Kidzee Baba Metta, Vizianagaram</h1>
                    <p className="contact-description">“Nurturing Gen-Next with Love, Learning & Safety”</p>
                    <p className="contact-text">
                        At Kidzee Baba Metta, we provide a vibrant, safe, and stimulating environment where your child blossoms into a confident and curious learner.
                    </p>
                    <button className="contact-enquire-button">Enquire Now</button>
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



            <section id="features" className="infrastructure-section">
                <h2 className="infrastructure-heading">✨ Our State-of-the-Art Infrastructure Includes:</h2>
                <div className="infrastructure-gallery">
                    <img
                        src="/Images/legacy1.jpg"
                        alt="Legacy Feature"
                        className="infrastructure-image"
                    />
                    <img
                        src="/Images/legacy2.jpg"
                        alt="Legacy Feature"
                        className="infrastructure-image"
                    />
                    <img
                        src="/Images/legacy3.jpg"
                        alt="Legacy Feature"
                        className="infrastructure-image"
                    />
                    <img
                        src="/Images/legacy4.jpg"
                        alt="Legacy Feature"
                        className="infrastructure-image"
                    />
                    <img
                        src="/Images/legacy5.jpg"
                        alt="Legacy Feature"
                        className="infrastructure-image"
                    />
                </div>
            </section>

            {/*<section id="contact-info" className="contact-section">
                <div className="contact-content-wrapper">
                    <div className="contact-left">
                        <h2 className="contact-heading">📍 Visit Us:</h2>
                        <p className="contact-info-text">Backside of Devi Park, MIG-364, Babametta, Vizianagaram</p>
                        <h3 className="section-heading">📞 Contact for Admissions:</h3>
                        <p className="contact-info-text">📱 95 123 123 37 / 95 123 123 38 / 95 123 123 39</p>
                        <h3 className="section-heading">📩 Email:</h3>
                        <p className="contact-info-text">kidzeebabamettavzm@gmail.com</p>
                        <h3 className="section-heading">📲 Follow Us on Social Media:</h3>
                        <p className="contact-info-text">📸 Instagram: @kidzee_babametta</p>
                        <p className="contact-info-text">📘 Facebook: @kidzee_babametta</p>
                        <p className="contact-info-text">▶ YouTube: @kidzeepreschoolbabametta</p>
                    </div>
                    <div className="contact-right">
                        <div className="contact-background">
                            <img src="/Images/baloon.png" alt="Background Image" className="contact-background-img balloon" />
                            <img src="/Images/more_fish.png" alt="Background Image" className="contact-background-img more-fish" />
                            <img src="/Images/mouse_img.png" alt="Background Image" className="contact-background-img mouse-img" />
                            <img src="/Images/pen.png" alt="Background Image" className="contact-background-img pen" />
                        </div>
                    </div>
                </div>
            </section> */}


            <section id="contact-form" className="contact-section">
                
                <form className="contact-form">
                    <h2 className="section-heading">📋 Admission Form</h2>
                    <label htmlFor="name" className="contact-form-label">Name:</label>
                    <input type="text" id="name" name="name" required className="contact-form-input" />

                    <label htmlFor="email" className="contact-form-label">Email:</label>
                    <input type="email" id="email" name="email" required className="contact-form-input" />

                    <label htmlFor="phone" className="contact-form-label">Phone:</label>
                    <input type="text" id="phone" name="phone" required className="contact-form-input" />

                    <label htmlFor="message" className="contact-form-label">Message:</label>
                    <textarea id="message" name="message" rows="4" required className="contact-form-textarea"></textarea>

                    <button type="submit" className="contact-submit-button">Submit</button>
                </form>
            </section>

            <Footer />
        </div>
    );
}

export default Contact;
