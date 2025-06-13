import React from 'react';
import './Programmes.css';
import Navbar from './Navbar';
import Footer from './Footer';

function Programmes() {
    return (
        <div className="programmes-page">
            <Navbar />
            <section className="programmes-hero-section">
                <img src="/Images/dr_blue_bg.png" alt="Background" className="hero-bg" />
                <div className="programmes-hero-content">
                    <div className="hero-left">
                        <h1 className="hero-heading">Programmes</h1>
                        <h2 className="hero-subheading">We Offer</h2>
                        <img src="/Images/btrfly_img.png" alt="Butterfly" className="butterfly-img" />
                    </div>
                    <div className="hero-right">
                        <img src="/Images/program.png" alt="Program" className="program-img" />
                    </div>
                </div>
            </section>
            <section className="section-buttons">
                <button className="section-button">
                    Play Group
                </button>
                <button className="section-button">
                    Nursery
                </button>
                <button className="section-button">
                    Kinder Garden
                </button>
                <button className="section-button">
                    Teacher Teaching Programme
                </button>
                <button className="section-button">
                    Day Care
                </button>
            </section>

            <section className="programme-section">
                <h2 className="programme-heading">Playgroup</h2>
                <div className="programme-content">
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
                    <div className="programme-right1">
                        <div className="programme-card1">
                            <div className="programme-card-left1">
                                <h3>Age Group</h3>
                                <p>1.5 - 2.5 Years</p>
                            </div>
                            <div className="programme-card-right1">
                                <h3>Duration</h3>
                                <p>3 Hours/Day</p>
                            </div>
                        </div>
                        <p className="programme-text1">
                            *As per RTE- Right to Education and NEP- National Education Policy from state to state.
                            <br />
                            <br />
                            Children in this age group are identified as Toddlers. Kidzee’s playgroup age-appropriate curriculum plays an important role in helping children continue their exploration.
                            <br />
                            <br />
                            At Kidzee, the Playgroup programme prepares a child for developmental and academic progress.
                            <br />
                            <br />
                            Playgroup curriculum provides a safe and stimulating environment for the child to learn and improve in all developmental domains.
                        </p>
                    </div>
                </div>
            </section>


            <section className="playgroup-curriculum programme">
                <h2 className="curriculum-heading programme">Key Areas in Playgroup Curriculum</h2>
                <div className="curriculum-points programme">
                    <ul>
                        <li>Promoting positive peer social interaction</li>
                        <li>Opportunities for basic development</li>
                        <li>Math Readiness (Number Recognition)</li>
                        <li>Language Readiness (Letter Recognition)</li>
                        <li>Exploration based learning</li>
                    </ul>
                </div>

                <h2 className="curriculum-heading programme">Kidzee Special</h2>
                <div className="curriculum-points programme">
                    <ul>
                        <li>Artsy</li>
                        <li>Personality Development</li>
                        <li>Showstopper</li>
                        <li>Mental Might</li>
                        <li>Augmented Reality - Fantasy Box</li>
                        <li>Eco-conscious</li>
                        <li>Tell-a-Tale</li>
                        <li>Library</li>
                        <li>Sciencify</li>
                        <li>Whirl & Twirl</li>
                        <li>Sensorium</li>
                        <li>Critical Thinking - Problem solving</li>
                        <li>Integrated Sanskar</li>
                    </ul>
                </div>

                <h2 className="curriculum-heading programme">Kidzee Sessions</h2>
                <div className="curriculum-points programme">
                    <ul>
                        <li>Circle Time</li>
                        <li>Free Play</li>
                        <li>Knowledge Time</li>
                        <li>Language Time</li>
                        <li>Numeracy Time</li>
                        <li>Talk Time</li>
                        <li>Outdoor</li>
                        <li>Indoor</li>
                        <li>Celebration of festivals and special days</li>
                        <li>Field Trips</li>
                        <li>Puppet shows and skits</li>
                    </ul>
                </div>
            </section>



            <section className="nursery nursery-section">
                <h2 className="nursery-heading nursery">Nursery</h2>
                <div className="nursery-content nursery">
                    <div className="nursery-left nursery">

                        <div className="programme-card1">
                            <div className="programme-card-left1">
                                <h3>Age Group</h3>
                                <p>1.5 - 2.5 Years</p>
                            </div>
                            <div className="programme-card-right1">
                                <h3>Duration</h3>
                                <p>3 Hours/Day</p>
                            </div>
                        </div>

                        <p className="nursery-text nursery">
                            *As per RTE- Right to Education and NEP- National Education Policy from state to state.
                            <br />
                            The child is now identified as a Pre-schooler. To set a firm foundation in the early years of preschool, quality education is vital for the overall development of a child. Our nursery curriculum has the right array of activities that helps a child move towards achieving their early learning goals.
                            <br />
                            Quality education in the early years of preschool lays a strong foundation for the overall development of a child. The nursery curriculum engages children in FLN- (Foundation in literacy and Numeracy) school readiness activities such as reading, writing, counting, number value, and problem-solving in a purposeful manner through play. Children are encouraged to display their learning through collaborative activities in the areas of dramatics, science, and arts.
                        </p>
                    </div>
                    <div className="nursery-right nursery">
                        <div className="nursery-images nursery">
                            <img src="/Images/unit3.jpg" alt="Unit 3" className="nursery-img center-img nursery" />
                            <img src="/Images/unit1.jpg" alt="Unit 1" className="nursery-img left-img nursery" />
                            <img src="/Images/shape4.jpg" alt="Shape 4" className="nursery-img right-img nursery" />
                        </div>
                    </div>
                </div>
            </section>




            <Footer />
        </div>
    );
}

export default Programmes;
