import React, { useState, useRef, useEffect } from "react";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";
import Navbar from './Navbar';
import Footer from './Footer';
import './Admissions.css';
import PencilLoader from './PencilLoader';

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
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    emailjs.sendForm(
      "service_kc4bgd5",
      "template_7drfrbp",
      formRef.current,
      "64a9xwGeWZSSrYToE"
    ).then(() => {
      setPopupVisible(true);
      formRef.current.reset();
      setFormData({ studentName: "", gender: "male", age: "", parentEmail: "", parentMobile: "" });
      setTimeout(() => setPopupVisible(false), 1000);
    }, () => { setLoading(false); });
  };

  return (
    <div className="preethi-ad">
      <Navbar />
      <div className="preethi-pad">
        <section className="preethi-admissions-section">
          <div className="preethi-admissions-image-container">
            <img src="/Images/admission_banner.png" alt="Admissions Banner" className="preethi-admissions-image" />
          </div>

          <div className="preethi-admissions-main-content">
            <div className="preethi-admissions-left-side">
              <div className="preethi-admissions-left">
                <h1 className="preethi-admissions-heading">Kidzee Preschool</h1>
                <h2 className="preethi-admissions-subheading">Admissions Open for 2025-26</h2>
              </div>
              <div className="preethi-admissions-cards">
                <div className="preethi-admissions-card preethi-card-1"><span className="preethi-card-number">1</span><p>Fill the School Admission Inquiry Form on the Website</p></div>
                <div className="preethi-admissions-card preethi-card-2"><span className="preethi-card-number">2</span><p>We provide exceptional student care and early learning experiences</p></div>
                <div className="preethi-admissions-card preethi-card-3"><span className="preethi-card-number">3</span><p>Visit the School for Campus Tour</p></div>
                <div className="preethi-admissions-card preethi-card-4"><span className="preethi-card-number">4</span><p>Join the Kidzee Family</p></div>
              </div>
            </div>

            <div className="preethi-admissions-right-side">
              <div className="preethi-admission-student-info-section">
                <h2 className="preethi-admission-student-info-title">Student Information</h2>
                <form ref={formRef} onSubmit={handleSubmit} className="preethi-admission-student-info-form">
                  <input type="hidden" name="title" value="Admission Inquiry" />
                  <input type="hidden" name="message" value="Any additional message" />
                  <div className="preethi-admission-student-info-field">
                    <label>Student Name:</label>
                    <input type="text" id="studentName" name="student_name" placeholder="Enter Student's Name" className="preethi-admission-input" value={formData.studentName} onChange={handleInputChange} />
                  </div>
                  <div className="preethi-admission-student-info-field">
                    <label>Gender:</label>
                    <select id="gender" name="gender" className="preethi-admission-input" value={formData.gender} onChange={handleInputChange}>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="preethi-admission-student-info-field">
                    <label>Age:</label>
                    <input type="number" id="age" name="age" placeholder="Enter Age" className="preethi-admission-input" value={formData.age} onChange={handleInputChange} />
                  </div>
                  <div className="preethi-admission-student-info-field">
                    <label>Parent's Email:</label>
                    <input type="email" id="parentEmail" name="parent_email" placeholder="Enter Parent's Email" className="preethi-admission-input" value={formData.parentEmail} onChange={handleInputChange} />
                  </div>
                  <div className="preethi-admission-student-info-field">
                    <label>Parent's Mobile Number:</label>
                    <input type="tel" id="parentMobile" name="parent_mobile" placeholder="Enter Parent's Mobile Number" className="preethi-admission-input" value={formData.parentMobile} onChange={handleInputChange} required />
                    {errors.parentMobile && <p className="preethi-error-message">{errors.parentMobile}</p>}
                  </div>
                  <button type="submit" className="preethi-admission-submit-btn">
                    Submit
                  </button>
                </form>

                {popupVisible && (
                  <div className="preethi-ganesh-popup-card">
                    <h3>Form Submitted Successfully!</h3>
                    <button onClick={() => setPopupVisible(false)} className="preethi-ganesh-close-popup-btn">Close</button>
                  </div>
                )}
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
        </div>

        <div className="homepage-build-foundation-right">
          <img
            src="/Images/home_header.png"
            alt="Main Image"
            className="homepage-build-foundation-image"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;
