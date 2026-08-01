import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo4.png';
// Using a custom X icon since react-icons/fa FaTwitter is the old bird
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  const [chatMessage, setChatMessage] = useState('');

  const handleWhatsAppRedirect = () => {
    if (chatMessage.trim()) {
      const whatsappNumber = "9539366688";
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(chatMessage)}`;
      window.open(whatsappUrl, '_blank');
      setChatMessage(''); 
    }
  };

  return (
    <footer className="w-full text-white pt-12 pb-6 px-8 md:px-12 font-sans border-t border-white/20 mt-10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 border-b border-white/20 pb-8">
        
        {/* Left Section: Logo & Newsletter */}
        <div className="md:col-span-5 lg:col-span-6 flex flex-col gap-3">
            
          <div className="flex items-center gap-3">
            <img src={logo} alt="MyStudyOrbit logo" className="w-56 md:w-69 object-contain" />
          </div>
          
          <p className="text-white text-[1rem] max-w-[420px] leading-relaxed mt-2 font-normal">
            Empowering learners with expert guidance, flexible courses, and the skills needed to achieve their goals.
          </p>

          <div className="flex items-center gap-3 mt-1">
            <input 
              type="text" 
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleWhatsAppRedirect()}
              placeholder="Type a message to chat with us..." 
              className="bg-white/30 placeholder-white/80 text-white rounded-xl px-5 py-3 w-full max-w-[320px] focus:outline-none focus:ring-1 focus:ring-white text-[0.95rem]"
            />
            <button onClick={handleWhatsAppRedirect} className="bg-[#6E38AF] hover:bg-[#5c2b97] transition-colors text-white font-semibold px-8 py-3 rounded-xl text-[1rem] shadow-sm cursor-pointer">
              Send
            </button>
          </div>
        </div>

        {/* Middle Section: Quick Links */}
        <div className="md:col-span-3 lg:col-span-3 flex flex-col gap-4 mt-2">
          <h3 className="text-[1.1rem] font-semibold mb-1">Quick Links</h3>
          <ul className="flex flex-col gap-3">
            <li><Link to="/" className="text-white hover:text-white/80 transition-colors text-[1rem] font-normal">Home</Link></li>
            <li><Link to="/about" className="text-white hover:text-white/80 transition-colors text-[1rem] font-normal">About Us</Link></li>
            {/* <li><Link to="/" className="text-white hover:text-white/80 transition-colors text-[1rem] font-normal">Courses</Link></li> */}
            <li><a href="/#become-tutor" className="text-white hover:text-white/80 transition-colors text-[1rem] font-normal">Become a Tutor</a></li>
            <li><Link to="/contact" className="text-white hover:text-white/80 transition-colors text-[1rem] font-normal">Contact Us</Link></li>
          </ul>
        </div>

        {/* Right Section: Contact Us */}
        <div className="md:col-span-4 lg:col-span-3 flex flex-col gap-4 mt-2">
          <h3 className="text-[1.1rem] font-semibold mb-1">Contact Us</h3>
          <ul className="flex flex-col gap-3">
            <li className="text-white text-[1rem] font-normal">Email: mystudyorbit@gmail.com</li>
            <li className="text-white text-[1rem] font-normal">Phone: +91 95393 66688</li>
            {/* <li className="text-white text-[1rem] font-normal">Location: Kerala, India</li> */}
          </ul>
          
          <div className="flex items-center gap-5 mt-2">
            <a href="#" className="text-white hover:text-white/80 transition-colors">
              <FaFacebook size={22} />
            </a>
            {/* <a href="#" className="text-white hover:text-white/80 transition-colors">
              <XIcon />
            </a> */}
            <a href="#" className="text-white hover:text-white/80 transition-colors">
              <FaInstagram size={22} />
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors">
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="max-w-[1200px] mx-auto mt-6">
        <p className="text-white text-[0.95rem] font-normal">© 2026 MyStudyOrbit. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
