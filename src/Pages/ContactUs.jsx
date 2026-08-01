import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
      fullName: '', role: '', email: '', phone: '', country: '', bio: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
                  access_key: "9cdcec0e-4637-4e1d-8973-97d0f8448ad4",
                  subject: "New Contact Form Submission from ContactUs Page",
                  from_name: "MyStudyOrbit Platform",
                  ...formData
              }),
          });
          const result = await response.json();
          if (result.success) {
              setIsSubmitted(true);
              setFormData({ fullName: '', role: '', email: '', phone: '', country: '', bio: '' });
              setTimeout(() => setIsSubmitted(false), 5000);
          }
      } catch (error) {
          console.error(error);
      } finally {
          setIsSubmitting(false);
      }
  };

  return (
    <div className="w-full relative pt-32">
      {/* Header Section */}
      <div className="w-full flex flex-col items-center justify-center pb-12 px-6 text-center z-10 relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-5xl md:text-6xl lg:text-7xl font-semibold max-w-[800px] leading-tight"
        >
          We're Here to Help
        </motion.h1>
      </div>

      {/* Main Content Card */}
      <div className="w-full relative z-20 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-2xl flex flex-col lg:flex-row gap-12 lg:gap-20"
        >
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-5/12 flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-[#4c3977] leading-tight">
              Whether You're A Student, Parent, Or Mentor, We'd Love To Hear From You.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              Founded with the conviction that geography should never be a barrier to genius, MyStudyOrbit began as a simple pilot program between three universities. We noticed a massive gap between those who needed specialized knowledge and those who possessed it.
            </p>
          </div>

          {/* Right Column: Form */}
          <div className="w-full lg:w-7/12">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label className="text-[0.85rem] font-semibold text-gray-500">Full Name</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="e.g. Alexandra Smith" className="w-full bg-[#f5f3f9] border-none rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-[#7b52b5] transition-all text-gray-700 placeholder-gray-400" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[0.85rem] font-semibold text-gray-500">I am a</label>
                <div className="relative">
                  <select name="role" value={formData.role} onChange={handleChange} required className="w-full bg-[#f5f3f9] border-none rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-[#7b52b5] transition-all text-gray-700 appearance-none cursor-pointer">
                    <option value="" disabled>Select your role</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="parent">Parent</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[0.85rem] font-semibold text-gray-500">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="alex@example.com" className="w-full bg-[#f5f3f9] border-none rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-[#7b52b5] transition-all text-gray-700 placeholder-gray-400" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[0.85rem] font-semibold text-gray-500">Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+1 (555) 000-0000" className="w-full bg-[#f5f3f9] border-none rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-[#7b52b5] transition-all text-gray-700 placeholder-gray-400" />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[0.85rem] font-semibold text-gray-500">Country of Residence</label>
                <input type="text" name="country" value={formData.country} onChange={handleChange} required placeholder="e.g. United States" className="w-full bg-[#f5f3f9] border-none rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-[#7b52b5] transition-all text-gray-700 placeholder-gray-400" />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[0.85rem] font-semibold text-gray-500">Short Professional Bio</label>
                <textarea rows="4" name="bio" value={formData.bio} onChange={handleChange} required placeholder="Tell us about your teaching philosophy and passion..." className="w-full bg-[#f5f3f9] border-none rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-[#7b52b5] transition-all text-gray-700 placeholder-gray-400 resize-none"></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full bg-[#6E38AF] text-white font-semibold text-lg py-4 rounded-xl mt-2 hover:bg-[#6230AB] transition-colors duration-300 shadow-md hover:shadow-lg md:col-span-2 disabled:opacity-70 disabled:cursor-not-allowed">
                {isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
