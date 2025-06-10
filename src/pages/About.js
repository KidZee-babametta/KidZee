import React, { useState } from "react";
import Navbar from './Navbar';
import './About.css';
import Footer from './Footer';

function About() {
    const [activeButton, setActiveButton] = useState("about");

    const handleButtonClick = (section) => {
        setActiveButton(section);
        const sectionElement = document.getElementById(section);
        sectionElement.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="about">
            <Navbar />
            <section className="about-section">
                <div className="about-left">
                    <h1 className="about-heading">About Us</h1>
                    <div className="about-subheading">
                        <span className="subheading-item">Legacy</span>
                        <span className="subheading-divider"></span>
                        <span className="subheading-item">Kidzee Advantage</span>
                        <span className="subheading-divider"></span>
                        <span className="subheading-item">Vision & Mission</span>
                    </div>
                </div>

                <div className="about-right">
                    <img
                        src="/Images/threeChild.png"
                        alt="Three Children"
                        className="about-image"
                    />
                </div>

                <div className="about-bubbles">
                    <span className="bubble bubble-yellow large"></span>
                    <span className="bubble bubble-violet medium"></span>
                    <span className="bubble bubble-purple small"></span>
                    <span className="bubble bubble-yellow tiny top-right"></span>
                    <span className="bubble bubble-violet tiny bottom-left"></span>
                    <span className="bubble bubble-purple tiny bottom-right"></span>
                </div>
            </section>

            <section className="section-buttons">
                <button
                    className={`section-button ${activeButton === "about" ? "active" : ""}`}
                    onClick={() => handleButtonClick("about")}
                >
                    About Us
                </button>
                <button
                    className={`section-button ${activeButton === "legacy" ? "active" : ""}`}
                    onClick={() => handleButtonClick("legacy")}
                >
                    Legacy
                </button>
                <button
                    className={`section-button ${activeButton === "kidzee-advantage" ? "active" : ""}`}
                    onClick={() => handleButtonClick("kidzee-advantage")}
                >
                    Kidzee Advantage
                </button>
                <button
                    className={`section-button ${activeButton === "vision-mission" ? "active" : ""}`}
                    onClick={() => handleButtonClick("vision-mission")}
                >
                    Vision & Mission
                </button>
            </section>

            <section className="homepage-about-us-section">
                <div className="homepage-about-us-left">
                    <h2 className="homepage-about-us-heading">About Us</h2>
                    <img src="/Images/bottom_img.png" alt="Decoration" className="homepage-about-us-divider" />
                    <p className="homepage-about-us-description">
                        Kidzee Preschool
                        Kidzee Preschool is a leading chain of preschools located in India and Nepal backed by Zee Learn Ltd. With more than two decades of experience in the preschool industry, Kidzee has nurtured more than 1.5 million children throughout India. Being one of the largest preschools in India. Kidzee has 2000+ centres in 750+ cities in India and Nepal.
                    </p>
                    <p className="homepage-about-us-description">
                        Kidzee Advantage
                        Kidzee is a leader and a trendsetter in Early Childhood Care and Education (ECCE). Our business partners’ passion and drive are vital for our brand’s success.
                    </p>
                    <p className="homepage-about-us-description">
                        Our Business Partners don't just take the name, they also take our pedagogy- PéNTEMiND, guidelines to teach, prescribes books/plays to be followed and so on to the ground.
                    </p>
                    {/*<div className="homepage-about-us-images">
                        <img src="/Images/baloon.png" alt="Balloon" className="homepage-about-us-image" />
                        <img src="/Images/pen.png" alt="Pen" className="homepage-about-us-image" />
                        <img src="/Images/more_fish.png" alt="Fish" className="homepage-about-us-image" />
                        <img src="/Images/mouse_img.png" alt="Mouse" className="homepage-about-us-image" />
                    </div> */}
                </div>

                <div className="homepage-about-us-right">
                    <img src="/Images/slide1.jpg" alt="Slide" className="homepage-about-us-image-right" />
                    <img src="/Images/abc.png" alt="Overlay" className="homepage-about-us-overlay-image" />
                </div>
            </section>



            <section id="legacy" className="section-content legacy-section">
                <div className="legacy-left">
                    <h2 className="legacy-heading">Legacy</h2>
                    <img
                        src="/Images/bottom_img.png"
                        alt="Decoration"
                        className="legacy-divider"
                    />
                    <p className="legacy-text">
                        Kidzee Preschool
                        We believe that there is ‘unique potential’ in every child; and Kidzee nurtures it. Touted to be one of the best preschools in India, we nurture and shape minds with the help of our best-in-class age-appropriate progressive curriculum. We are changing the face of early childhood education with consistent upgradation and innovation to meet the current needs with a proactive future, focused on grooming them to be ‘ever-ready for life’. Our commitment towards quality education also values aspects like self-reliance, peer interaction, and individual growth. Our solid foundation and polished business model make it profitable for all the stakeholders involved.
                    </p>
                </div>

                <div className="legacy-right">
                    <div className="legacy-image-container">
                        <img
                            src="/Images/legacy1.jpg"
                            alt="Legacy 1"
                            className="legacy-image"
                        />
                        <img
                            src="/Images/legacy2.jpg"
                            alt="Legacy 2"
                            className="legacy-image"
                        />
                        <img
                            src="/Images/legacy3.jpg"
                            alt="Legacy 3"
                            className="legacy-image"
                        />
                        <img
                            src="/Images/legacy4.jpg"
                            alt="Legacy 4"
                            className="legacy-image"
                        />
                        <img
                            src="/Images/legacy5.jpg"
                            alt="Legacy 5"
                            className="legacy-image"
                        />
                    </div>
                </div>
            </section>

            <section id="kidzee-advantage" className="section-content kidzee-advantage-section">
                <div className="kidzee-advantage-left">
                    <h2 className="legacy-heading">Kidzee Advantage</h2>
                    <img
                        src="/Images/bottom_img.png"
                        alt="Decoration"
                        className="legacy-divider"
                    />
                    <h2 className="kidzee-advantage-heading">
                        Ranked amongst the top 100 franchise opportunities by Franchise India for 2022, we are the experts in Early Childhood Care and Education.
                    </h2>
                    <h3 className="kidzee-advantage-subheading">
                        We encourage, educate, and equip today's children to be tomorrow's leaders.
                    </h3>

                    <div className="kidzee-advantage-list">
                        <h4 className="kidzee-advantage-list-heading">The Golden Five-Point Kidzee Edges:</h4>
                        <ul className="kidzee-advantage-points">
                            <li>Focus on What is Right for the Child.</li>
                            <li>Safety and security is a priority.</li>
                            <li>Integrated Pentemind Curriculum.</li>
                            <li>I Care and ECE trained facilitators.</li>
                            <li>An innovative pedagogy aligned to NEP 2020 designed to help nurture collaborative team players and breakthrough leaders.</li>
                        </ul>
                    </div>
                </div>

                <div className="kidzee-advantage-right">
                    <img
                        src="/Images/advantage.jpg"
                        alt="Kidzee Advantage"
                        className="kidzee-advantage-image"
                    />
                </div>

                <div className="kidzee-advantage-bubbles">
                    <span className="bubble bubble-yellow large"></span>
                    <span className="bubble bubble-violet medium"></span>
                    <span className="bubble bubble-purple small"></span>
                    <span className="bubble bubble-yellow tiny top-right"></span>
                    <span className="bubble bubble-violet tiny bottom-left"></span>
                    <span className="bubble bubble-purple tiny bottom-right"></span>
                </div>
            </section>

            <section id="vision-mission" className="section-content vision-mission-section">
                <div className="vision-mission-left">
                    <h2 className="vision-mission-heading">
                        Vision of our preschool education
                    </h2>
                    <p className="vision-mission-text">
                        We are committed to instilling skills, knowledge, and values in our children in order to give them an inner voice to face the challenges of the twenty-first century.
                    </p>
                    <p className="vision-mission-text">
                        Our learning environment allows each child to nurture the learning minds namely the Empathetic Mind, Conscientious Mind, Focused Mind, Analytical Mind, and Inventive Mind.
                    </p>

                    <h3 className="vision-mission-subheading">
                        Zee Learn Limited Vision
                    </h3>
                    <p className="vision-mission-text">
                        Backed by Zee Group, Zee Learn aims to empower India's children and youth.
                    </p>
                    <p className="vision-mission-text">
                        “We provide the environment to ignite, nurture and unleash your potential and talent.”
                    </p>
                </div>

                <div className="vision-mission-right">
                    <img
                        src="/Images/vision.jpg"
                        alt="Vision & Mission"
                        className="vision-mission-image"
                    />
                </div>

                <div className="vision-mission-bubbles">
                    <span className="bubble bubble-yellow large"></span>
                    <span className="bubble bubble-violet medium"></span>
                    <span className="bubble bubble-purple small"></span>
                    <span className="bubble bubble-yellow tiny top-right"></span>
                    <span className="bubble bubble-violet tiny bottom-left"></span>
                    <span className="bubble bubble-purple tiny bottom-right"></span>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default About;
