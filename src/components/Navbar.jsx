import React, { useState } from 'react'
import logo from '../assets/logoo.png'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();
  
  // Book a Demo Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
      name: '', number: '', age: '', syllabus: '', subject: '', region: '', state: ''
  });

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      try {
          const response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
              },
              body: JSON.stringify({
                  access_key: "2196f956-3ecc-4144-a937-f0a3f9a9873a", // Replace with your Web3Forms Access Key if needed
                  subject: "New Student Demo Request from MyStudyOrbit",
                  from_name: "MyStudyOrbit Platform",
                  ...formData
              }),
          });
          const result = await response.json();
          if (result.success) {
              setIsSubmitted(true);
          }
      } catch (error) {
          console.error(error);
      } finally {
          setIsSubmitting(false);
      }
  };

  return (
    <nav className="fixed top-0 left-0 w-full px-6 md:px-8 py-4 z-50 font-sans box-border transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center bg-[#e2dfec] px-2 py-2 rounded-xl text-[#4b3d76] gap-2 cursor-pointer transition-transform duration-300 hover:-translate-y-0.5">
          <img src={logo} alt="Logo" className="h-8 md:h-10 w-auto object-contain mix-blend-multiply" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="bg-[#e2dfec] text-[#4b3d76] p-2 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            )}
          </button>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center bg-[#e2dfec] px-6 py-2.5 rounded-full m-0 gap-6 shadow-md list-none">
          <li className={`flex items-center relative transition-all duration-200 ${location.pathname === '/' ? 'font-bold opacity-100 text-[#4b3d76]' : 'text-[#4b3d76] opacity-70 hover:opacity-100'}`}>
            {location.pathname === '/' && <span className="w-1.5 h-1.5 bg-[#4b3d76] rounded-full mr-1.5 shadow-sm"></span>}
            <Link to="/" className="text-inherit no-underline text-[0.95rem] font-semibold transition-colors duration-200">Home</Link>
          </li>
          <li className={`flex items-center relative transition-all duration-200 ${location.pathname === '/about' ? 'font-bold opacity-100 text-[#4b3d76]' : 'text-[#4b3d76] opacity-70 hover:opacity-100'}`}>
            {location.pathname === '/about' && <span className="w-1.5 h-1.5 bg-[#4b3d76] rounded-full mr-1.5 shadow-sm"></span>}
            <Link to="/about" className="text-inherit no-underline text-[0.95rem] font-semibold transition-colors duration-200">About Us</Link>
          </li>
          <li className={`flex items-center relative transition-all duration-200 ${location.pathname === '/contact' ? 'font-bold opacity-100 text-[#4b3d76]' : 'text-[#4b3d76] opacity-70 hover:opacity-100'}`}>
            {location.pathname === '/contact' && <span className="w-1.5 h-1.5 bg-[#4b3d76] rounded-full mr-1.5 shadow-sm"></span>}
            <Link to="/contact" className="text-inherit no-underline text-[0.95rem] font-semibold transition-colors duration-200">Contact</Link>
          </li>
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:block">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#e2dfec] text-[#4b3d76] border-none px-5 py-2.5 rounded-full text-[0.95rem] font-semibold cursor-pointer transition-all duration-300 hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,255,255,0.2)]"
          >
            Book a Demo
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full px-6 py-4 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}`}>
        <div className="bg-[#e2dfec] rounded-2xl p-4 flex flex-col gap-4 shadow-xl border border-white/20">
          <Link onClick={() => setIsMobileMenuOpen(false)} to="/" className={`text-center font-semibold text-[1.1rem] py-2 border-b border-[#4b3d76]/10 ${location.pathname === '/' ? 'text-[#4b3d76]' : 'text-[#4b3d76]/70'}`}>Home</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} to="/about" className={`text-center font-semibold text-[1.1rem] py-2 border-b border-[#4b3d76]/10 ${location.pathname === '/about' ? 'text-[#4b3d76]' : 'text-[#4b3d76]/70'}`}>About Us</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} to="/contact" className={`text-center font-semibold text-[1.1rem] py-2 border-b border-[#4b3d76]/10 ${location.pathname === '/contact' ? 'text-[#4b3d76]' : 'text-[#4b3d76]/70'}`}>Contact</Link>
          <button 
            onClick={() => { setIsModalOpen(true); setIsMobileMenuOpen(false); }}
            className="w-full bg-[#4b3d76] text-white py-3 rounded-xl font-semibold text-[1.1rem] mt-2 cursor-pointer shadow-md"
          >
            Book a Demo
          </button>
        </div>
      </div>

      {/* Book a Demo Modal */}
      {isModalOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex justify-center items-center p-4 transition-opacity duration-300">
              <div className="bg-white rounded-3xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl animate-in fade-in zoom-in duration-300 text-left">
                  <button 
                      onClick={() => {
                          setIsModalOpen(false);
                          setTimeout(() => setIsSubmitted(false), 300);
                      }}
                      className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
                  >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>

                  {isSubmitted ? (
                      <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-500">
                          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                          </div>
                          <h3 className="text-3xl font-bold text-[#4c3977] mb-4">Demo Request Received!</h3>
                          <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
                              Thank you for your interest! Our team will get in touch with you shortly to schedule your demo.
                          </p>
                          <button 
                              onClick={() => {
                                  setIsModalOpen(false);
                                  setTimeout(() => setIsSubmitted(false), 300);
                              }} 
                              className="bg-[#784BE4] text-white font-semibold text-lg py-3 px-10 rounded-xl hover:bg-[#6230AB] transition-colors duration-300 shadow-md"
                          >
                              Close
                          </button>
                      </div>
                  ) : (
                      <>
                          <h3 className="text-2xl font-bold text-[#4c3977] mb-6">Book a Free Demo</h3>
                          <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                              <div className="flex flex-col gap-1.5 md:col-span-2">
                                  <label className="text-[0.85rem] font-semibold text-gray-500">Student Name</label>
                                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. John Doe" className="w-full bg-[#f5f3f9] border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#7b52b5] transition-all text-gray-700" required />
                              </div>
                              <div className="flex flex-col gap-1.5">
                                  <label className="text-[0.85rem] font-semibold text-gray-500">Phone Number</label>
                                  <input type="tel" name="number" value={formData.number} onChange={handleChange} placeholder="+1234567890" pattern="^\+?[0-9]{10}$" title="Please enter a valid phone number (10 to 15 digits, optional '+' at the beginning)" minLength="10" maxLength="16" className="w-full bg-[#f5f3f9] border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#7b52b5] transition-all text-gray-700" required />
                              </div>
                              <div className="flex flex-col gap-1.5">
                                  <label className="text-[0.85rem] font-semibold text-gray-500">Age</label>
                                  <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="e.g. 15" className="w-full bg-[#f5f3f9] border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#7b52b5] transition-all text-gray-700" required />
                              </div>
                              <div className="flex flex-col gap-1.5">
                                  <label className="text-[0.85rem] font-semibold text-gray-500">Syllabus</label>
                                  <input type="text" name="syllabus" value={formData.syllabus} onChange={handleChange} placeholder="e.g. CBSE, IGCSE" className="w-full bg-[#f5f3f9] border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#7b52b5] transition-all text-gray-700" required />
                              </div>
                              <div className="flex flex-col gap-1.5">
                                  <label className="text-[0.85rem] font-semibold text-gray-500">Subject</label>
                                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="e.g. Mathematics" className="w-full bg-[#f5f3f9] border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#7b52b5] transition-all text-gray-700" required />
                              </div>
                              <div className="flex flex-col gap-1.5">
                                  <label className="text-[0.85rem] font-semibold text-gray-500">Region</label>
                                  <input type="text" name="region" value={formData.region} onChange={handleChange} placeholder="e.g. Middle East" className="w-full bg-[#f5f3f9] border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#7b52b5] transition-all text-gray-700" required />
                              </div>
                              <div className="flex flex-col gap-1.5">
                                  <label className="text-[0.85rem] font-semibold text-gray-500">State</label>
                                  <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="e.g. Dubai" className="w-full bg-[#f5f3f9] border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#7b52b5] transition-all text-gray-700" required />
                              </div>
                              
                              <button type="submit" disabled={isSubmitting} className="w-full bg-[#784BE4] text-white font-semibold text-lg py-3 rounded-xl mt-4 hover:bg-[#6230AB] transition-colors duration-300 shadow-md md:col-span-2 disabled:opacity-70 disabled:cursor-not-allowed">
                                  {isSubmitting ? 'Submitting...' : 'Request Demo'}
                              </button>
                          </form>
                      </>
                  )}
              </div>
          </div>
      )}
    </nav>
  );
}

export default Navbar;
