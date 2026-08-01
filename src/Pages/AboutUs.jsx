import React from 'react';
import { motion } from 'framer-motion';
import aboutUsHero from '../assets/about-section.png';
import visionImage from '../assets/about-section2.png';
import missionImage from '../assets/about-section3.png';
import Principle1 from '../assets/image9.png'
import Principle2 from '../assets/image10.png'
import Principle3 from '../assets/image11.png'
import Principle4 from '../assets/image12.png'
import Footer from '../components/Footer';

const principles  = [
  {
    title: "Student-First Always",
    text: "Every feature, policy, and decision begins with one question: is this best for the student? Their success is our only metric, and every learning experience we create is designed to inspire confidence, unlock potential, and help them achieve their academic goals.",
    image: Principle1,
    gradient: "linear-gradient(135deg, #6230AB 20%, #CF73CA 60%)"
  },
  {
    title: "Excellence In Teaching",
    text: "We hold our tutors to the highest standards. Through a rigorous selection process, continuous professional training, and regular performance evaluations, we ensure every student learns from knowledgeable, passionate, and dedicated educators who consistently deliver exceptional learning experiences.",
    image: Principle2,
    gradient: "linear-gradient(135deg, #CF73CA 30%, #FFFFFF 100%)"
  },
  {
    title: "Global Inclusivity",
    text: "We celebrate diversity and design for every learner—across cultures, languages, curricula, and time zones. By embracing different backgrounds and learning styles, we create an inclusive environment where every student feels valued, supported, and empowered to achieve their goals.",
    image: Principle3,
    gradient: "linear-gradient(175deg, #B273C4 20%, #CFAEDD 50%, #FFFFFF 100%)"
  },
  {
    title: "Integrity & Transparency",
    text: "Honest pricing, clear communication, and no hidden agendas. We build trust with every family we serve by maintaining complete transparency, delivering consistent support, and ensuring every decision is guided by integrity and the best interests of our students.",
    image: Principle4,
    gradient: "linear-gradient(175deg, #784BE4 10%, #9E75F6 20%, #FFFFFF 100%)"
  }
];

const AboutUs = () => {
  return (
    <div className="w-full relative pt-32">
      {/* Header Section */}
      <div className="w-full flex flex-col items-center justify-center pb-24 px-6 text-center z-10 relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-5xl md:text-6xl lg:text-7xl font-semibold max-w-[800px] leading-tight"
        >
          Learn Beyond Boundaries
        </motion.h1>
      </div>

      {/* Main Content Card */}
      <div className="bg-white w-full rounded-[3rem] relative z-20 px-6 ">
        <div className="mx-auto relative -top-16 flex flex-col items-center">

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[1000px] rounded-[2rem] overflow-hidden shadow-2xl mb-16"
          >
            <img
              src={aboutUsHero}
              alt="MyStudyOrbit Team"
              className="w-full h-auto object-cover max-h-[500px]"
            />
          </motion.div>

          {/* Story Content */}
          <div className=" text-center px-4 md:px-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#CF73CA] font-bold tracking-widest uppercase mb-4"
            >
              Our Story
            </motion.h2>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-[#4c3977] mb-6"
            >
              Every Journey Begins With A Purpose
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-700 text-lg md:text-xl lg:text-[1.6rem] tracking-wide text-left space-y-4"
            >
              <p>
                Founded with the conviction that geography should never be a barrier to genius, MyStudyOrbit began as a simple pilot program between three universities. We noticed a massive gap between those who needed specialized knowledge and those who possessed it.
              </p>
              <p>
                Our platform was built to bridge this chasm. By leveraging orbital mechanics principles—finding the perfect alignment between mentor expertise and student curiosity—we've created a kinetic learning environment that scales with the user's ambition.
              </p>
              <p>
                Today, MyStudyOrbit is a global leader in premium EdTech, serving thousands of learners who seek not just answers, but profound understanding and mentorship.
              </p>
            </motion.div>
          </div>

        </div>


      </div>
      {/* Vision & Mission Section */}
      <div className="w-full max-w-[1300px] mx-auto px-6 py-32 text-white relative z-20">

        {/* Vision Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <img
              src={visionImage}
              alt="Vision"
              className="w-full h-auto max-h-[500px] object-cover rounded-[3rem] shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">Vision</h2>
            <p className="text-lg md:text-2xl text-white  tracking-wider">
              To become the definitive global infrastructure for intellectual exchange, where every question finds its perfect mentor and every talent finds its trajectory.
            </p>
          </motion.div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <img
              src={missionImage}
              alt="Mission"
              className="w-full h-auto max-h-[600px] object-cover rounded-[3rem] shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">Mission</h2>
            <p className="text-lg md:text-2xl text-white tracking-wide">
              To empower every learner on Earth with instant access to world class mentorship, fostering a global culture of continuous growth and radical academic excellence.
              We believe in providing the tools for students to orbit their potential and eventually reach their escape velocity.
            </p>
          </motion.div>
        </div>

      </div>

      {/* Principles Section (Sticky Stack) */}
      <div className="bg-white w-full rounded-t-[3rem] relative z-20 px-6 pt-16  shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#CF73CA] text-xl font-bold tracking-widest uppercase mb-4 text-center"
          >
            Our Principles
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#4c3977] mb-6 text-center"
          >
            What We Stand For
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center text-gray-700 text-lg md:text-xl  mb-13 leading-relaxed"
          >
            Our values aren't just words on a wall—they guide every decision we make, every tutor we hire, and every student we serve. They shape our commitment to delivering personalized, high-quality education while building a learning community founded on trust, integrity, and excellence.
          </motion.p>

          {/* Sticky Cards Container */}
          <div className="w-full flex flex-col relative pb-12">
            {principles.map((p, i) => (
              <div
                key={i}
                className="sticky w-full  mx-auto min-h-[10px] rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-[0_15px_40px_rgba(0,0,0,0.15)] mb-10 border border-white/20 transition-transform duration-300 hover:scale-[1.01]"
                style={{
                  top: `calc(120px + ${i * 35}px)`,
                  background: p.gradient,
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div className="w-full md:w-1/3 h-[140px] md:h-[360px] border-r border-white/10">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-2/3 p-8 md:p-6 flex flex-col justify-center text-white bg-black/5">
                  <h3 className="text-2xl md:text-5xl font-semibold mb-4 drop-shadow-md">{p.title}</h3>
                  <p className="text-md md:text-xl text-white leading-relaxed drop-shadow-sm">{p.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
<Footer/>
    </div>
  );
};

export default AboutUs;
