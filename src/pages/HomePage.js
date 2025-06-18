import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaClock, FaInstagram, FaYoutube, FaFacebookF, FaChevronDown } from "react-icons/fa";
import Navbar from './Navbar';
import './HomePage.css';
import Footer from './Footer';


const mainSlides = [
    '/Images/overlay-main-1.jpg',
    '/Images/overlay-main-2.jpg',
    '/Images/overlay-main-3.jpg',
];

const subSlides = [
    '/Images/overlay-sub-1.jpg',
    '/Images/overlay-sub-2.jpg',
    '/Images/overlay-sub-3.jpg',
];

function HomePage() {


    const navigate = useNavigate();
    const [mainIndex, setMainIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [expertiseCount, setExpertiseCount] = useState(0);
    const [centresCount, setCentresCount] = useState(0);
    const handleButtonClick = () => {
        navigate('/admissions');
        window.scrollTo(0, 0);

    };
    const handleKnowMoreClick = () => {
        navigate('/contact#ganesh123-contact-form');
    };

    const [index, setIndex] = useState(0);
    const [items] = useState([
        "a1.jpg", "a2.jpg", "a3.jpg", "a4.jpg",
        "a5.jpg", "a6.jpg", "a7.jpg", "a8.jpg"
    ]);
    const [revealClass, setRevealClass] = useState("");

    const features = [
        "Playgrounds", "Slides", "Swing Sets", "Climbing Walls", "Ball Pits",
        "Soft Play Areas", "Sandbox", "Trampolines", "Sports Zones",
        "Interactive Games", "Toys", "Creative Play", "Outdoor Fun", "Exploration Zones"
    ];
    useEffect(() => {
        const timeout = setTimeout(() => {
            setRevealClass("reveal");
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);



    useEffect(() => {
        const intervalMain = setInterval(() => {
            setMainIndex((prev) => (prev + 1) % mainSlides.length);
        }, 3000);

        const intervalSub = setInterval(() => {
            setSubIndex((prev) => (prev + 1) % subSlides.length);
        }, 2000);

        return () => {
            clearInterval(intervalMain);
            clearInterval(intervalSub);
        };
    }, []);


    useEffect(() => {
        let count1 = 0;
        const timer1 = setInterval(() => {
            if (count1 < 20) {
                setExpertiseCount(++count1);
            } else {
                clearInterval(timer1);
            }
        }, 100);

        let count2 = 0;
        const timer2 = setInterval(() => {
            if (count2 < 2500) {
                setCentresCount((prev) => prev + 50);
                count2 += 50;
            } else {
                clearInterval(timer2);
                setCentresCount(2500);
            }
        }, 20);
    }, []);

    return (
        <div className="homepage-wrapper">
            <Navbar />
            <section className="homepage-main-section">
                <div className="homepage-heading-container">
                    <img
                        src="/Images/logo26.png"
                        alt="Kidzee Logo"
                        className="homepage-logo"
                    /><br />
                    {/*<h1 className="homepage-title">BABAMETTA, Vizianagaram</h1> */}
                    <h2 className="homepage-subtitle">Backside of Devi Park, MIG-364, Babametta, Vizianagaram</h2>
                    <h2 className="homepage-subtitle">+91 95 123 123 37 / 38 / 39</h2>
                    <h2 className="homepage-subtitle">kidzeebabametta@gmail.com</h2>
                    <div className="ganesh1-footer-social1">
                        <div className="ganesh1-social-icons1">
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
                    </div>
                    <div className="ganesh1-extra123fix">
                        <img
                            src="/Images/qr.jpg"
                            alt="Footer Image"
                            className="ganesh1-footer-image3fix"
                        />
                    </div>

                </div>
                <div className="homepage-slideshow-wrapper">
                    <div className="homepage-left-slideshow">
                        <img
                            src={mainSlides[mainIndex]}
                            alt="Main Slide"
                            className="homepage-main-slide"
                        />
                    </div>
                    <div className="homepage-sub-slideshow">
                        <img
                            src={subSlides[subIndex]}
                            alt="Sub Slide"
                            className="homepage-sub-slide"
                        />
                    </div>
                </div>
            </section>







            <section className="ganesh-main-section">
                <div className="ganesh-card-container">
                    <div className="ganesh-left-card">
                        <img
                            src="/Images/pop-up-card.jpg"
                            alt="Pop Up Card"
                            className="ganesh-left-card-image"
                        />
                    </div>
                    {/*<div className="ganesh-right-card">
                        <div className="ganesh-logo-container">
                            
                            <img
                                src="/Images/logo-no-bg.png"
                                alt="Kidzee Logo"
                                className="ganesh-logo-image"
                            />
                        </div> 

                        <img
                            src="/Images/enroll.heic"
                            alt="Enroll Banner"
                            className="ganesh-fullscreen-image"
                        />

                        <h3 className="ganesh-heading">KidZee</h3> 
    <h4 className="ganesh-subheading">Pre-School</h4>
    <h5 className="ganesh-subheading-two">BABAMETTA</h5>

    <button className="ganesh-beautiful-button">
        kidzee brings out the best in me!
    </button>

    <p className="ganesh-admission-text">ADMISSIONS OPEN</p>
    <p className="ganesh-admission-year">2025-2026</p>

                        <button className="ganesh-enroll-button fixed-enroll" onClick={handleButtonClick}>
                            Enroll Now
                        </button>
                    </div> */}
                    <div className="ganesh-right-card">

                        <div className="ganesh-image-wrapper">
                            <img
                                src="/Images/enroll.heic"
                                alt="Enroll Banner"
                                className="ganesh-image-fill"
                            />

                            <button className="ganesh-enroll-overlay-button" onClick={handleButtonClick}>
                                Enroll Now
                            </button>
                        </div>
                    </div>


                </div>
            </section>












            <section id="mickey-section" className="homepage-mickey-section">
                <div className="homepage-mickey-left">
                    <div className="mickey-outer-wrapper">
                        <div className="mickey-ear mickey-ear-left">
                            <img src="/Images/ear1.jpg" alt="Ear Left" />
                        </div>
                        <div className="mickey-ear mickey-ear-right">
                            <img src="/Images/ear2.jpg" alt="Ear Right" />
                        </div>
                        <div className="mickey-face-wrapper">
                            <img src="/Images/face.jpg" alt="Face" />
                        </div>
                    </div>
                </div>
                <div className="homepage-mickey-right">
                    <h2 className="homepage-mickey-heading">
                        A World of Fun, Friendship & First Lessons
                    </h2>
                    <p className="homepage-mickey-text">
                        Let your child step into a magical journey where learning feels like play, and every day is filled with smiles. At Kidzee, we create joyful beginnings for bright futures – shaped by curiosity, care, and creativity.
                    </p>
                    <button
                        className="homepage-mickey-button"
                        onClick={() => {
                            navigate('/gallery#infra');
                            window.scrollTo(0, 0);
                        }}
                    >
                        Explore the Kidzee Way
                    </button>
                </div>

                <img src="/Images/fruit_img.png" className="decor-image" style={{ top: '10%', left: '5%', width: '60px' }} alt="fruit" />
                <img src="/Images/pen.png" className="decor-image" style={{ top: '15%', right: '5%', width: '70px', position: 'absolute' }} alt="peng" />
                <img src="/Images/scale.png" className="decor-image" style={{ bottom: '20%', left: '10%', width: '50px', position: 'absolute' }} alt="scale" />
                <img src="/Images/dall_girl.png" className="decor-image" style={{ top: '40%', left: '80%', width: '70px', position: 'absolute' }} alt="doll" />
                <img src="/Images/btrfly_img.png" className="decor-image" style={{ bottom: '10%', right: '10%', width: '60px', position: 'absolute' }} alt="butterfly" />
                <img src="/Images/more_fish.png" className="decor-image" style={{ top: '60%', left: '45%', width: '50px', position: 'absolute' }} alt="fish" />
            </section>




            <section id="fun-play-section" className="fun-play-section">
                <img src="/Images/pen.png" className="decor-image" style={{ top: '15%', right: '5%', width: '70px', position: 'absolute' }} alt="peng" />
                <div className="fun-play-left-rotation">
                    <div className="wrapper">
                        <div className="inner" style={{ '--quantity': items.length }}>
                            {items.map((img, index) => (
                                <div
                                    className="card1"
                                    key={index}
                                    style={{ '--index': index, '--color-card': '0, 123, 255' }}
                                >
                                    <img className="img1" src={`/Images/${img}`} alt={`unit1${index}`} />
                                </div>
                            ))}
                        </div>

                    </div>

                </div>


                <div className="fun-play-right-content">
                    <div className="feature-section">
                        <div className="feature-content">
                            <h1 className="feature-title">
                                Fun, Play, and Enjoyment for Kids
                                <img src="/Images/fruit_img.png" className="decor-image" style={{ top: '10%', left: '5%', width: '60px' }} alt="fruit" />
                            </h1>
                            <ul className={`feature-list animated ${revealClass}`}>
                                {features.map((item, i) => (
                                    <li className="feature-list-item" key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <img src="/Images/scale.png" className="decor-image" style={{ bottom: '20%', left: '10%', width: '50px', position: 'absolute' }} alt="scale" />
                </div>
            </section>





            <section className="homepage-build-foundation-section">
                <div className="homepage-build-foundation-left">
                    <h1 className="homepage-build-foundation-heading">
                        Build a foundation <br />
                        a lifetime of <br />
                        Learning
                    </h1>
                    <h2 className="homepage-build-foundation-subheading">Admission Open</h2>
                    <button className="homepage-build-foundation-button" onClick={handleButtonClick}>Enroll Now</button>
                </div>

                <div className="homepage-build-foundation-right">
                    <img
                        src="/Images/home_header.png"
                        alt="Main Image"
                        className="homepage-build-foundation-image"
                    />
                </div>
            </section>








            <section className="homepage-daycare-section">
                <img src="/Images/mouse.png" alt="Wavy Background" className="homepage-daycare-bg" />

                <div className="homepage-daycare-overlay"></div>

                <div className="homepage-daycare-left">
                    <h1 className="homepage-daycare-title">DayCare</h1>
                    <p className="homepage-daycare-subtitle">Kidzee Daycare -</p>
                    <p className="homepage-daycare-tagline">A home away from home for your child !</p>

                    <div className="homepage-daycare-info-box">
                        <p>
                            Duration - Choose suitable hours schedule.<br />
                            Flexible hours - Post school schedule.
                        </p>
                    </div>

                    <p className="homepage-daycare-description">
                        We understand that the early years in the child’s life are important for the overall development. The primary role of parents in these years is to provide their children with an environment that is loving, caring, fun-filled and one which provides happy experiences. As these aspects play a very important role in fostering the developmental areas, like, cognitive development, physical development, socio-emotional development, and so on our objective is to create a home away from home for them to feel safe, secure and happy.
                    </p>

                    <button
                        className="homepage-daycare-button"
                        onClick={() => {
                            navigate('/programmes#daycare');
                            window.scrollTo(0, 0);
                        }}
                    >
                        Know More <span className="arrow">→</span>
                    </button>

                </div>

                <div className="homepage-daycare-right">
                    <img src="/Images/day_care.png" alt="Day Care" className="homepage-daycare-image" />
                </div>

                <div className="homepage-daycare-bubbles">
                    <span className="bubble bubble-yellow large"></span>
                    <span className="bubble bubble-violet medium"></span>
                    <span className="bubble bubble-purple small"></span>
                    <span className="bubble bubble-yellow small top-right"></span>
                    <span className="bubble bubble-violet tiny bottom-left"></span>
                    <span className="bubble bubble-purple tiny bottom-right"></span>
                </div>
            </section>


            {/*<div className='hexagon'>
                <div className="programme-left">
                    <div className="programme-hex-container">
                        <div className="programme-hex programme-hex1">
                            <img src="/Images/hexagon1.jpg" alt="Playgroup Image 1" />
                        </div>
                        <div className="programme-hex programme-hex2">
                            <img src="/Images/hexagon2.jpg" alt="Playgroup Image 2" />
                        </div>
                        <div className="programme-hex programme-hex3">
                            <img src="/Images/hexagon3.jpg" alt="Playgroup Image 3" />
                        </div>
                        <div className="programme-hex programme-hex4">
                            <img src="/Images/hexagon4.jpg" alt="Playgroup Image 4" />
                        </div>
                        <div className="programme-hex programme-hex5">
                            <img src="/Images/hexagon5.jpg" alt="Playgroup Image 5" />
                        </div>
                        <div className="programme-hex programme-hex6">
                            <img src="/Images/hexagon6.jpg" alt="Playgroup Image 6" />
                        </div>
                        <div className="programme-hex programme-hex7">
                            <img src="/Images/hexagon7.jpg" alt="Playgroup Image 7" />
                        </div>
                    </div>
                </div>
            </div> */}



            <section className="ganesh-homepage-programmes-section">
                <h2 className="ganesh-programme-title">Programmes</h2>
                <img src="/Images/bottom_img.png" alt="Decoration" className="ganesh-programme-divider" />

                <div className="ganesh-programme-card-container">
                    <div className="ganesh-programme-card">
                        <img src="/Images/card1.jpg" alt="PlayGroup" className="ganesh-programme-image" />
                        <div className="ganesh-programme-content">
                            <img src="/Images/playgroup.png" alt="PlayGroup Icon" className="ganesh-programme-icon" />
                            <h3 className="ganesh-programme-heading">PlayGroup</h3>
                            <p className="ganesh-programme-description">
                                Children in this age group as identified as Toddlers. Children are born curious. They begin to explore the...
                            </p>
                            <h3 className="ganesh-programme-heading">Age-Group</h3>
                            <p className="ganesh-programme-description">
                                1.5 - 2.5 Years
                            </p>
                            <h3 className="ganesh-programme-heading">Duration</h3>
                            <p className="ganesh-programme-description">
                                3 Hours/Day
                            </p>

                        </div>
                    </div>

                    <div className="ganesh-programme-card">
                        <img src="/Images/card2.jpg" alt="Nursery" className="ganesh-programme-image" />
                        <div className="ganesh-programme-content">
                            <img src="/Images/nursery.png" alt="Nursery Icon" className="ganesh-programme-icon" />
                            <h3 className="ganesh-programme-heading">Nursery</h3>
                            <p className="ganesh-programme-description">
                                The child is now identified as a Pre-schooler. (Mandatory level 1 of Foundational Stage as per NEP)...
                            </p>
                            <h3 className="ganesh-programme-heading">Age-Group</h3>
                            <p className="ganesh-programme-description">
                                2.6 -3.5 Years
                            </p>
                            <h3 className="ganesh-programme-heading">Duration</h3>
                            <p className="ganesh-programme-description">
                                3 Hours/Day
                            </p>

                        </div>
                    </div>

                    <div className="ganesh-programme-card">
                        <img src="/Images/card3.jpg" alt="KG" className="ganesh-programme-image" />
                        <div className="ganesh-programme-content">
                            <img src="/Images/jk.png" alt="KG Icon" className="ganesh-programme-icon" />
                            <h3 className="ganesh-programme-heading">Junior KG.</h3>
                            <p className="ganesh-programme-description">
                                This is level 2 and 3 of Foundational Stage 1 - Mandatory as per NEP...
                            </p>
                            <h3 className="ganesh-programme-heading">Age-Group</h3>
                            <p className="ganesh-programme-description">
                                4-5 Years
                            </p>
                            <h3 className="ganesh-programme-heading">Duration</h3>
                            <p className="ganesh-programme-description">
                                4 Hours/Day
                            </p>

                        </div>
                    </div>

                    <div className="ganesh-programme-card">
                        <img src="/Images/card4.jpg" alt="Teacher Training" className="ganesh-programme-image" />
                        <div className="ganesh-programme-content">
                            <img src="/Images/teacher.png" alt="Teacher Icon" className="ganesh-programme-icon" />
                            <h3 className="ganesh-programme-heading">Senior K.G</h3>
                            <p className="ganesh-programme-description">
                                This is level 3 and 4 of Foundational Stage 2 - Mandatory as per NEP...
                            </p>
                            <h3 className="ganesh-programme-heading">Age-Group</h3>
                            <p className="ganesh-programme-description">
                                5 - 6 Years
                            </p>
                            <h3 className="ganesh-programme-heading">Duration</h3>
                            <p className="ganesh-programme-description">
                                4 Hours/Day
                            </p>

                        </div>
                    </div>
                </div>
            </section>









            <section className="moving-gallery-section">
                <img src="/Images/mouse_img.png" className="decor-image" style={{ bottom: '20%', right: '5%', width: '60px', position: 'absolute' }} alt="mouse" />
                <h2 className="moving-gallery-heading">Joyful Moments in Motion</h2>
                <img src="/Images/bird.png" className="decor-image" style={{ top: '50%', left: '5%', width: '55px', position: 'absolute' }} alt="bird" />

                <div className="slider-container left-to-right">
                    <div className="slider-track">
                        {[...Array(10)].map((_, i) => (
                            <div className="slide" key={`lr-${i}`}>
                                <img src={`/Images/lr${i + 1}.jpg`} alt={`Kid Moment ${i + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="slider-container right-to-left">
                    <div className="slider-track">
                        {[...Array(10)].map((_, i) => (
                            <div className="slide" key={`rl-${i}`}>
                                <img src={`/Images/rl${i + 1}.jpg`} alt={`Kid Moment ${i + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                
            </section>











            <section className="homepage-pedagogy-section">
                <h2 className="pedagogy-heading">Our Pedagogy</h2>
                <img src="/Images/bottom_img.png" alt="Divider" className="pedagogy-divider" />

                <div className="pedagogy-image-wrapper">
                    <img src="/Images/pedagogy.svg" alt="Pedagogy Diagram" className="pedagogy-main-image" />

                </div><br /><br />
                <button
                    className="homepage-mickey-button"
                    onClick={() => {
                        navigate('/Pentemind');
                        window.scrollTo(0, 0);
                    }}
                >
                    Explore More
                </button>

                <div className="pedagogy-bubbles">
                    <span className="bubble bubble-yellow large"></span>
                    <span className="bubble bubble-violet medium"></span>
                    <span className="bubble bubble-purple small"></span>
                    <span className="bubble bubble-yellow tiny top-right"></span>
                    <span className="bubble bubble-violet tiny bottom-left"></span>
                    <span className="bubble bubble-purple tiny bottom-right"></span>
                </div>
            </section>


            {/*<section className="homepage-about-us-section">
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
                    <img src="/Images/fruit_img.png" className="decor-image1" style={{ top: '10%', left: '5%', width: '60px' }} alt="fruit" />
                
                </div>

                <div className="homepage-about-us-right">
                    <img src="/Images/slide1.jpg" alt="Slide" className="homepage-about-us-image-right" />
                    <img src="/Images/abc.png" alt="Overlay" className="homepage-about-us-overlay-image" />
                </div>
                
            </section> */}


            <section className="homepage-about-us-section-ganesh51">
                <div className="homepage-about-us-left-ganesh51">
                    <h2 className="homepage-about-us-heading-ganesh51">About Us</h2>
                    <img src="/Images/bottom_img.png" alt="Decoration" className="homepage-about-us-divider-ganesh51" />
                    <img src="/Images/pen.png" className="decor-image11-ganesh51" style={{ top: '15%', right: '5%', width: '70px' }} alt="peng" />

                    <div className="about-card-ganesh51">
                        <div className="about-left-ganesh51">
                            <p className="about-name-ganesh51">Mrs Sindhuja</p>
                            <p className="about-designation-ganesh51">Founder & Correspondent KidZee<br />Kidzee Babametta<br />MSc Biotechnology</p>
                            <p className="about-description-ganesh51">

                                As an educator and a parent, I understand how crucial the early years are in shaping a child’s future. At Kidzee, we don’t just teach—we inspire, engage, and empower. Our team is dedicated to creating an environment where children feel loved, valued, and excited to learn every day. Join us in this beautiful journey of growth and discovery!
                               
                            </p>
                        </div>
                        <div className="about-right-ganesh51">
                            <img src="/Images/slide3.jpg" alt="Tina" className="about-image-ganesh51" />
                        </div>
                    </div>

                    <div className="about-card-ganesh51 reverse-ganesh51">
                        
                        <div className="about-right-ganesh51">
                            <p className="about-name-ganesh51">Tina Dembla</p>
                            <p className="about-designation-ganesh51">Founder & Secretary<br />KidZee Babametta</p>
                            <p className="about-description-ganesh51">
                                
                                 At Kidzee, we believe that every child is born with infinite potential. Our mission is to nurture young minds with love, creativity, and the right learning environment, ensuring they take their first steps toward a bright future with confidence and joy. Welcome to a world where learning meets fun!
                            </p>
                        </div>
                        <div className="about-left-ganesh51">
                            <img src="/Images/slide5.jpg" alt="Sindhuja" className="about-image-ganesh51" />
                        </div>
                    </div>

                    <img src="/Images/fruit_img.png" className="decor-image-ganesh51" style={{ top: '10%', left: '5%', width: '60px' }} alt="fruit" />
                </div>
            </section>





            <section className="homepage-trust-section">
  <h2 className="homepage-trust-heading">
    More Than Just a Preschool – A Trusted Partner in Your Child’s Growth
  </h2>
  <div className="homepage-trust-content">
    <div className="homepage-trust-left">
      <div className="homepage-trust-grid">
        <div className="trust-card small-card">
          <span className="trust-count">{expertiseCount}+</span>
          <p className="trust-label">Years of Expertise</p>
        </div>
        <div className="trust-card big-card">
          <img src="/Images/zee-learn.png" alt="Zee Learn" />
        </div>
        <div className="trust-card big-card">
          <img src="/Images/happy-family.jpg" alt="Happy Family" />
        </div>
        <div className="trust-card small-card">
          <span className="trust-count">{centresCount}+</span>
          <p className="trust-label">Centres Across India & Nepal</p>
        </div>
      </div>
    </div>

    <div className="homepage-trust-right">
      <p className="homepage-trust-text">
        At Kidzee, we blend play, learning, and values through a well-researched curriculum designed for every child’s growth. Powered by Zee Learn Ltd., we bring decades of trust, innovation, and care to every classroom.
      </p>
      <div className="homepage-trust-buttons">
        <div className="button-group">
          <button className="visit-button" onClick={handleKnowMoreClick}>Book a Free Visit</button>
          <p className="button-subtext">To explore our Campus</p>
        </div>
        <div className="button-group">
          <button className="team-button" onClick={handleKnowMoreClick}>Meet Our Team</button>
          <p className="button-subtext">For Enquiry</p>
        </div>
      </div>

      <div className="campus-walk-card">
        <p className="campus-line">For A Campus Walk</p>
        <p className="campus-line">On Saturday & Sunday</p>
        <p className="campus-line">Timings : 10 AM to 12 PM</p>
      </div>
    </div>
  </div>
</section>





            <Footer />


        </div>
    );
}

export default HomePage;
