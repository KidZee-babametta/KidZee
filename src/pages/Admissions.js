import React, { useState, useRef, useEffect } from "react";
import { init } from "emailjs-com";
import Navbar from './Navbar';
import Footer from './Footer';
import './Admissions.css';
import emailjs from 'emailjs-com';

const Admissions = () => {
  useEffect(() => {
    init("64a9xwGeWZSSrYToE");
  }, []);
  const formRef = useRef();

  const [formData, setFormData] = useState({
    studentName: "",
    gender: "male",
    age: "",
    parentEmail: "",
    parentMobile: "",
  });
  const [errors, setErrors] = useState({});
  const [popupVisible, setPopupVisible] = useState(false);
  

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    const mobileRegex = /^[0-9]{10}$/;
    if (!formData.parentMobile || !mobileRegex.test(formData.parentMobile)) {
      newErrors.parentMobile = "Mobile number must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
  e.preventDefault();
  const { studentName, gender, age, parentEmail, parentMobile } = formData;

  const templateParams = {
    student_name: studentName,        
    gender: gender,
    age: age,
    parent_email: parentEmail,
    parent_mobile: parentMobile,
    title: "Admission Inquiry",     
    message: "Any additional message", 
  };

  emailjs
    .sendForm("service_kc4bgd5data:imag", "template_7drfrbp", formRef.current, "64a9xwGeWZSSrYToE")
    .then(
      () => {
        console.log("Email sent successfully");
        setPopupVisible(true);
        formRef.current.reset();
        setTimeout(() => setPopupVisible(false), 1000);
      },
      (error) => {
        console.error("Error sending email", error);
      }
    );
};

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      sendEmail(e);
    }
  };

  return (
    <div className="ad">
      <Navbar />
      <div className="pad">
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
                <p>We provide exceptional student care and early learning experiences</p>
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
        </section>
      </div>

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
          <img src="/Images/home_header.png" alt="Main Image" className="homepage-build-foundation-image" />
        </div>
      </section>

      <div className="admission-student-info-section" ref={formRef}>
        <h2 className="admission-student-info-title">Student Information</h2>
        <form ref={formRef} onSubmit={handleSubmit} className="admission-student-info-form">

          <div className="admission-student-info-field">
            <label className="student-name">Student Name:</label>
            <input
              type="text"
              id="studentName"
              placeholder="Enter Student's Name"
              className="admission-input"
              value={formData.studentName}
              onChange={handleInputChange}
            />
          </div>
          <div className="admission-student-info-field">
            <label className="student-gender">Gender:</label>
            <select
              id="gender"
              className="admission-input"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="admission-student-info-field">
            <label className="student-age">Age:</label>
            <input
              type="number"
              id="age"
              placeholder="Enter Age"
              className="admission-input"
              value={formData.age}
              onChange={handleInputChange}
            />
          </div>
          <div className="admission-student-info-field">
            <label className="parent-email">Parent's Email:</label>
            <input
              type="email"
              id="parentEmail"
              placeholder="Enter Parent's Email"
              className="admission-input"
              value={formData.parentEmail}
              onChange={handleInputChange}
            />
          </div>
          <div className="admission-student-info-field">
            <label className="parent-mobile">Parent's Mobile Number:</label>
            <input
              type="tel"
              id="parentMobile"
              placeholder="Enter Parent's Mobile Number"
              className="admission-input"
              value={formData.parentMobile}
              onChange={handleInputChange}
              required
            />
            {errors.parentMobile && <p className="error-message">{errors.parentMobile}</p>}
          </div>
          <button type="submit" className="admission-submit-btn">
            Submit
          </button>
        </form>
      </div>

      {popupVisible && (
        <div className="popup-card">
          <h3>Form Submitted Successfully!</h3>
          <button onClick={() => setPopupVisible(false)} className="close-popup-btn">
            Close
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Admissions;
