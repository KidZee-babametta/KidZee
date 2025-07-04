import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Facilities from './pages/Facilities';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
/*import PopupCard from './pages/PopupCard'; */
import Pentemind from './pages/Pentemind';
import Programmes from './pages/Programmes';
import './App.css';

function App() {
  return (
    <Router>
      {/*<PopupCard /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pentemind" element={<Pentemind />} />
        <Route path="/programmes" element={<Programmes />} />
      </Routes>
    </Router>
  );
}

export default App;
