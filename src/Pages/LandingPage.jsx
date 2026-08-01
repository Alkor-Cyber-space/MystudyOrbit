import React, { useState } from 'react';
import heroBg from '../assets/hero-bg.png';
import heroImage from '../assets/hero-img.png';
import WhyChooseUs from '../components/WhyChooseUs';
import HowitWorks from '../components/HowitWorks';
import BecomeATutor from '../components/BecomeATutor';
import OurTeam from '../components/OurTeam';
import FAQ from '../components/FAQ';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const LandingPage = () => {
  const [formData, setFormData] = useState({
      name: '', email: '', phone: '', message: ''
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
                  access_key: "9cdcec0e-4637-4e1d-8973-97d0f8448ad4", // Web3Forms Access Key
                  subject: "New Contact Message from studyorbit",
                  from_name: "MyStudyOrbit Platform",
                  ...formData
              }),
          });
          const result = await response.json();
          if (result.success) {
              setIsSubmitted(true);
              setFormData({ name: '', email: '', phone: '', message: '' }); // Clear form
          }
      } catch (error) {
          console.error(error);
      } finally {
          setIsSubmitting(false);
      }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <div className="relative min-h-screen w-full overflow-hidden font-sans bg-[#5b3b95]">

        {/* Background Image */}
        <img src={heroBg} alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" />

        {/* Content Container */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-16 min-h-screen flex flex-col lg:flex-row items-center justify-start lg:justify-between gap-12 lg:gap-16">

          {/* Left: Text Content */}
          <div className="flex-1 w-full text-white pt-10 lg:pt-0 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] lg:text-[5rem] xl:text-[5.5rem] font-semibold leading-[1.05] mb-6">
              Learn Beyond<br />Boundaries
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-[1.6] mb-10 max-w-[38rem] font-medium">
              Personalized one-to-one online tuition with expert tutors from around the world. Flexible scheduling, tailored curriculum, and real results — wherever you are.
            </p>
            <button className="bg-[#e2dfec] text-[#4b3d76] px-8 py-3.5 rounded-full text-[1.05rem] font-bold transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(255,255,255,0.3)]">
              Book a Demo
            </button>
          </div>

          {/* Right: Image Section */}
          <div className="flex-1 w-full flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full lg:-left-[40px] xl:-left-[100px] max-w-[360px] sm:max-w-[420px] lg:max-w-[400px] xl:max-w-[450px] aspect-[4/4]">

              {/* Decorative Dark Purple Shape */}
              <div className="absolute top-[10%] lg:top-[20%] -left-[20px] lg:-left-[100px] w-[100%] h-[100%] animate-float-alt">
                <div className="absolute inset-y-0 left-0 w-full h-full bg-[#5b4689] transform -skew-x-[7deg] origin-bottom-left rounded-[30px] lg:rounded-[80px]"></div>
              </div>

              {/* Main Image Container */}
              <div className="absolute inset-0 w-full h-full z-10 animate-float">
                {/* Skewed container for left edge */}
                <div className="absolute inset-y-0 left-0 lg:left-[5%] w-full transform -skew-x-[6deg] origin-bottom-left rounded-[30px] lg:rounded-[60px] overflow-hidden">
                  <img
                    src={heroImage}
                    alt="Student learning online"
                    className="absolute inset-0 w-full h-full object-cover object-[40%_center] transform skew-x-[6deg] origin-bottom-left scale-[1.1]"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Stats Section */}
      <section className="bg-[#fcfcfc] py-20 w-full font-sans">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center">
          <h2 className="text-2xl md:text-[1.75rem] font-semibold text-[#b871d6] mb-12 text-center">
            Crafting Solutions For A Smarter Tomorrow
          </h2>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 w-full">

            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col items-center justify-center py-4 px-2 sm:py-6 sm:px-4 md:py-10 md:px-8 w-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)]">
              <h3 className="text-lg sm:text-2xl md:text-[2.75rem] font-bold text-[#4c3977] mb-1 md:mb-2 leading-none">5,000+</h3>
              <p className="text-[0.6rem] sm:text-[0.75rem] md:text-[0.9rem] text-gray-400 font-medium text-center">Active Students</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col items-center justify-center py-4 px-2 sm:py-6 sm:px-4 md:py-10 md:px-8 w-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)]">
              <h3 className="text-lg sm:text-2xl md:text-[2.75rem] font-bold text-[#7a52e0] mb-1 md:mb-2 leading-none">500+</h3>
              <p className="text-[0.6rem] sm:text-[0.75rem] md:text-[0.9rem] text-gray-400 font-medium text-center">Expert Tutors</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col items-center justify-center py-4 px-2 sm:py-6 sm:px-4 md:py-10 md:px-8 w-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)]">
              <h3 className="text-lg sm:text-2xl md:text-[2.75rem] font-bold text-[#b45cf5] mb-1 md:mb-2 leading-none">10,000+</h3>
              <p className="text-[0.6rem] sm:text-[0.75rem] md:text-[0.9rem] text-gray-400 font-medium text-center">Live Classes Held</p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />
      
      {/* How It Works Section */}
      <HowitWorks />

      {/* White Container for Become A Tutor + Our Team */}
      <div className="bg-white rounded-t-[3rem]">
        {/* Become A Tutor Section */}
        <BecomeATutor />

        {/* Our Team Section */}
        <OurTeam />

        {/* FAQ Section */}
      
      </div>

      {/* Call To Action Section */}
      <CallToAction />
  <FAQ />
      {/* Contact Section */}
      <section className="w-full py-10 px-8 md:px-12 font-sans ">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-4 items-start">
          
          {/* Left Column */}
          <div className="flex flex-col text-white md:sticky md:top-24">
            <h2 className="text-[2.5rem] md:text-[3.2rem] font-semibold mb-3 leading-[1.1]">
              Get In Touch,<br />We'll Guide You
            </h2>
            <p className="text-white/90 text-[0.95rem] md:text-lg mt-1">
              We're Here to Help You Learn and Grow
            </p>
          </div>

          {/* Right Column - Form */}
          <div className="w-full md:pl-4">
            {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 px-6 bg-white/10 rounded-[1rem] backdrop-blur-md text-center border border-white/20 animate-in fade-in zoom-in duration-500">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-5">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                    <p className="text-white/90 text-[0.95rem] mb-6">
                        Thank you for reaching out. We have received your message and will get back to you shortly.
                    </p>
                  
                </div>
            ) : (
                <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-2">
                    <label className="text-white font-medium text-[0.95rem]">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name" 
                      className="w-full bg-white/20 border border-transparent rounded-[0.5rem] px-4 py-3.5 text-white placeholder-white focus:outline-none focus:bg-white/30 transition-all"
                      required
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-white font-medium text-[0.95rem]">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email" 
                      className="w-full bg-white/20 border border-transparent rounded-[0.5rem] px-4 py-3.5 text-white placeholder-white focus:outline-none focus:bg-white/30 transition-all"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-white font-medium text-[0.95rem]">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number" 
                      className="w-full bg-white/20 border border-transparent rounded-[0.5rem] px-4 py-3.5 text-white placeholder-white focus:outline-none focus:bg-white/30 transition-all"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-white font-medium text-[0.95rem]">Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type here" 
                      rows="4"
                      className="w-full bg-white/20 border border-transparent rounded-[0.5rem] px-4 py-3.5 text-white placeholder-white focus:outline-none focus:bg-white/30 resize-none transition-all"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full bg-[#6E38AF] hover:bg-[#6E38AF] text-white font-semibold py-4 rounded-[0.5rem] hover:shadow-xl transition-all duration-300 mt-2 disabled:opacity-70 disabled:cursor-not-allowed">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
