import React from 'react';
import './Pentemind.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Pentemind = () => {
  return (
    <>
      <div className='pentemind'>
        <Navbar />

        <section className="pentemind-section">
          <div className="pentemind-container">
            <div className="pentemind-image-card">
              <img
                src="/Images/why-pentemind.heic"
                alt="Why PenteMind"
                className="pentemind-image"
              />
            </div>
            <div className="pentemind-content">
              <h1 className="pentemind-title">PenteMind</h1>
              <ul className="pentemind-points">
                <li>Focused Minds</li>
                <li>Analytical Minds</li>
                <li>Inventive Minds</li>
                <li>Conscientious Minds</li>
                <li>Empathetic Minds</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="monkey-section">
          <img
            src="/Images/allMonkey2.jpg"
            alt="All Monkeys"
            className="monkey-full-image"
          />
        </section>

       <section className="monkey-cards-section">
  <div className="monkey-row">
    <div className="monkey-image">
      <img src="/Images/monkey11.jpg" alt="Monkey 1" />
    </div>
    <div className="monkey-text-card">
      Goes deep into a topic with focus and single-minded attention.
    </div>
  </div>

  <div className="monkey-row reverse">
    <div className="monkey-image">
      <img src="/Images/monkey12.jpg" alt="Monkey 2" />
    </div>
    <div className="monkey-text-card">
      Selects crucial information from the copious amounts available and arrays that information in ways that make sense to self and others.
    </div>
  </div>

  <div className="monkey-row">
    <div className="monkey-image">
      <img src="/Images/monkey13.jpg" alt="Monkey 3" />
    </div>
    <div className="monkey-text-card">
      Goes beyond existing knowledge to pose new questions and offer new solutions.
    </div>
  </div>

  <div className="monkey-row reverse">
    <div className="monkey-image">
      <img src="/Images/monkey14.jpg" alt="Monkey 4" />
    </div>
    <div className="monkey-text-card">
      Responds sympathetically and constructively to differences among individuals.
    </div>
  </div>

  <div className="monkey-row">
    <div className="monkey-image">
      <img src="/Images/monkey15.jpg" alt="Monkey 5" />
    </div>
    <div className="monkey-text-card">
      Lives in harmony with the natural world.
    </div>
  </div>
</section>


        <Footer />
      </div>
    </>
  );
};

export default Pentemind;
