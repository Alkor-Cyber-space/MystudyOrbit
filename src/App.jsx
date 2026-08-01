import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './Pages/LandingPage';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import './App.css';

function App() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-l from-[#7b52b5] via-[#d197de] to-[#7b52b5] bg-fixed">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>

    
  );
}

export default App;
