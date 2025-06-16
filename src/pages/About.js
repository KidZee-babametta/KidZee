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

                <img src="/Images/baloon.png" className="decor-image" style={{ top: '10%', left: '5%', width: '60px' }} alt="baloon" />
                <img src="/Images/mouse_img.png" className="decor-image" style={{ bottom: '15%', right: '5%', width: '50px', position: 'absolute' }} alt="mouse" />
                <img src="/Images/fruit_img.png" className="decor-image" style={{ top: '45%', left: '15%', width: '55px', position: 'absolute' }} alt="fruit" />
                <img src="/Images/bird.png" className="decor-image" style={{ bottom: '10%', right: '20%', width: '50px', position: 'absolute' }} alt="bird" />
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

            <section className="homepage-about-us-section-ganesh51">
                <div className="homepage-about-us-left-ganesh51">
                    <h2 className="homepage-about-us-heading-ganesh51">About Us</h2>
                    <img src="/Images/bottom_img.png" alt="Decoration" className="homepage-about-us-divider-ganesh51" />
                    <img src="/Images/pen.png" className="decor-image11-ganesh51" style={{ top: '15%', right: '5%', width: '70px' }} alt="peng" />

                    <div className="about-card-ganesh51">
                        <div className="about-left-ganesh51">
                            <p className="about-name-ganesh51">Mrs Tina Dembla</p>
                            <p className="about-designation-ganesh51">Founder & Secretary<br />Kidzee Babametta</p>
                            <p className="about-description-ganesh51">
                                At Kidzee, we believe that every child is born with infinite potential. Our mission is to nurture young minds with love, creativity, and the right learning environment, ensuring they take their first steps toward a bright future with confidence and joy. Welcome to a world where learning meets fun!
                            </p>
                        </div>
                        <div className="about-right-ganesh51">
                            <img src="/Images/slide2.jpg" alt="Tina" className="about-image-ganesh51" />
                        </div>
                    </div>

                    <div className="about-card-ganesh51 reverse-ganesh51">
                        <div className="about-left-ganesh51">
                            <img src="/Images/slide3.jpg" alt="Sindhuja" className="about-image-ganesh51" />
                        </div>
                        <div className="about-right-ganesh51">
                            <p className="about-name-ganesh51">Mrs Sindhuja</p>
                            <p className="about-designation-ganesh51">Founder & Correspondent<br />Kidzee Babametta<br />MSc Biotechnology</p>
                            <p className="about-description-ganesh51">
                                As an educator and a parent, I understand how crucial the early years are in shaping a child’s future. At Kidzee, we don’t just teach—we inspire, engage, and empower. Our team is dedicated to creating an environment where children feel loved, valued, and excited to learn every day. Join us in this beautiful journey of growth and discovery!
                            </p>
                        </div>
                    </div>

                    <img src="/Images/fruit_img.png" className="decor-image-ganesh51" style={{ top: '10%', left: '5%', width: '60px' }} alt="fruit" />
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
                    <img src="/Images/dall_girl.png" className="decor-image13" style={{ top: '40%', left: '80%', width: '70px', }} alt="doll" />

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
