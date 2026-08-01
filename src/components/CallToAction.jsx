import React from 'react'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'

const CallToAction = () => {
    return (
        <section className="w-full relative  py-14 md:py-12 px-8 font-sans overflow-hidden">
            
            {/* Left Image */}
            <div className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 w-[230px] h-[250px] shadow-2xl ">
                <img 
                    src={image1} 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Right Image (Rotated with white border) */}
            <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-[250px] h-[220px] -rotate-12 z-0">
                <img 
                    src={image2} 
                    alt="Student on laptop" 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Center Content */}
            <div className="relative z-10 max-w-[800px] mx-auto text-center flex flex-col items-center">
                <h2 className="text-4xl md:text-[3.3rem] font-semibold text-white mb-4 leading-[1.1]">
                    Ready to Begin Your Journey at MyStudyOrbit?
                </h2>
                
                <h3 className="text-white font-semibold text-lg md:text-xl mb-1">
                    Learn Smarter. Grow Faster. Achieve More.
                </h3>
                
                <p className="text-white/90 text-[0.95rem] md:text-xl max-w-[600px] leading-relaxed mb-5">
                    Join MyStudyOrbit today and gain the knowledge, skills, and support you need to reach your goals.
                </p>

                <button className="bg-white/70 text-[#584691] font-bold text-sm md:text-lg px-19 py-3 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    Get Started Today
                </button>
            </div>
        </section>
    )
}

export default CallToAction
