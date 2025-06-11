import React from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import './Admissions.css';

function Admissions() {
  return (
    <div className="ad
">
      <Navbar /><div className="pad">
      <section className="admissions-section">
        <div className="admissions-image-container">
          <img src="/Images/admission_banner.png" alt="Admissions Banner" className="admissions-image" />
        </div>
        <div className="admissions-content">
          <div className="admissions-left">
            <h1 className="admissions-heading">Kidzee Preschool</h1>
            <h2 className="admissions-subheading">Admissions Open for 2025-26</h2>
            <button className="admissions-enquire-button">Enquire Now</button>
          </div>
          <div className="admissions-cards">
            <div className="admissions-card card-1">
              <span className="card-number">1</span>
              <p>Fill the School Admission Inquiry Form on the Website</p>
            </div>
            <div className="admissions-card card-2">
              <span className="card-number">2</span>
              <p>We will invite you to the nearest Kidzee preschool</p>
            </div>
            <div className="admissions-card card-3">
              <span className="card-number">3</span>
              <p>Visit the School for Campus Tour</p>
            </div>
            <div className="admissions-card card-4">
              <span className="card-number">4</span>
              <p>Join the Kidzee Family</p>
            </div>
          </div>
        </div>
      </section></div>





      <section className="homepage-build-foundation-section">
        <div className="homepage-build-foundation-left">
          <h1 className="homepage-build-foundation-heading">
            Build a foundation <br />
            a lifetime of <br />
            Learning
          </h1>
          <h2 className="homepage-build-foundation-subheading">Admission Open</h2>
          <button className="homepage-build-foundation-button">Enroll Now</button>
        </div>

        <div className="homepage-build-foundation-right">
          <img
            src="/Images/home_header.png"
            alt="Main Image"
            className="homepage-build-foundation-image"
          />
        </div>
      </section>





      <div className="admission-student-info-section">
  <h2 className="admission-student-info-title">Student Information</h2>
  <div className="admission-student-info-form">
    <div className="admission-student-info-field">
      <label className="student-name">Student Name:</label>
      <input
        type="text"
        id="student-name"
        placeholder="Enter Student's Name"
        className="admission-input"
      />
    </div>
    <div className="admission-student-info-field">
      <label className="student-gender">Gender:</label>
      <select id="student-gender" className="admission-input">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div className="admission-student-info-field">
      <label className="student-age">Age:</label>
      <input
        type="number"
        id="student-age"
        placeholder="Enter Age"
        className="admission-input"
      />
    </div>
    <div className="admission-student-info-field">
      <label className="parent-email">Parent's Email:</label>
      <input
        type="email"
        id="parent-email"
        placeholder="Enter Parent's Email"
        className="admission-input"
      />
    </div>
    <div className="admission-student-info-field">
      <label className="parent-mobile">Parent's Mobile Number:</label>
      <input
        type="tel"
        id="parent-mobile"
        placeholder="Enter Parent's Mobile Number"
        className="admission-input"
      />
    </div>
    <button className="admission-submit-btn">Submit</button>
  </div>
</div>





      <Footer />
    </div>
  );
}

export default Admissions;
