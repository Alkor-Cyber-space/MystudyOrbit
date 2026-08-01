import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const stepsData = [
    {
        id: '01',
        titleStart: 'Choose',
        titleHighlight: 'Your',
        titleEnd: 'Subject',
        desc: 'Explore our wide range of subjects and curricula, including CBSE, IB, UK, IGCSE, and more to find the learning path that suits you.',
        bgClass: 'from-[#B278C8] via-[#CF73CA] to-[#FFFFFF]',
    },
    {
        id: '02',
        titleStart: 'Connect',
        titleHighlight: 'With an',
        titleEnd: 'Expert Tutor',
        desc: 'Our team carefully matches you with a qualified tutor based on your chosen subject, learning goals, and preferred schedule.',
        bgClass: 'from-[#B273C4] via-[#B273C4] to-[#FFFFFF]',
    },
    {
        id: '03',
        titleStart: 'Schedule',
        titleHighlight: 'Your',
        titleEnd: 'Classes',
        desc: 'Select a convenient time for your one-to-one online tuition. We accommodate students across different time zones with flexible scheduling.',
        bgClass: 'from-[#784BE4] via-[#9E75F6] to-[#FFFFFF]',
    },
    {
        id: '04',
        titleStart: 'Start',
        titleHighlight: 'Learning',
        titleEnd: 'Online',
        desc: 'Attend live one-to-one classes through Google Meet or Zoom and begin your personalized learning journey with experienced tutors.',
        bgClass: 'from-[#CF73CA] via-[#CF73CA] to-[#FFFFFF]',
    }
];
const HowitWorks = () => {
    const containerRef = useRef(null);
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useGSAP(() => {
        if (!sectionRef.current || cardsRef.current.length === 0) return;

        // Attach GSAP timeline to ScrollTrigger for smooth pinning and scrubbing
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: '+=400%', // Scroll distance to cover all 4 cards smoothly
                pin: true,
                scrub: 1, // Smooth scrubbing
            }
        });

        // Initialize cards 1 to 3 to be invisible and lower down
        gsap.set(cardsRef.current.slice(1), {
            y: 150,
            opacity: 0,
            scale: 0.85,
        });

        // Initial pause when section is first pinned
        tl.to({}, { duration: 0.2 });

        // Loop through cards starting from the second one (index 1)
        cardsRef.current.forEach((card, index) => {
            if (index === 0) return;

            const stepLabel = `step${index}`;

            // Animate the new card up and into view
            tl.to(card, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'power3.out',
            }, stepLabel);

            // Animate all previous cards backward in the stack
            for (let i = 0; i < index; i++) {
                const reverseIndex = index - i; // distance from current card
                tl.to(cardsRef.current[i], {
                    y: -25 * reverseIndex,
                    scale: 1 - 0.05 * reverseIndex, // 0.95, 0.90, etc.
                    opacity: Math.max(0, 1 - 0.4 * reverseIndex), // 0.6, 0.2, etc.
                    rotation: (i % 2 === 0 ? -2 : 2) * reverseIndex, // subtle alternating rotation
                    duration: 1,
                    ease: 'power3.out',
                }, stepLabel);
            }

            // Small pause after each card comes into view
            tl.to({}, { duration: 0.2 });
        });

    }, { scope: containerRef, dependencies: [] });

    return (
        <div ref={containerRef} className="w-full">
            <section ref={sectionRef} className="w-full h-screen font-sans relative flex flex-col justify-center overflow-hidden">
                <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-6 md:gap-16 pt-10 pb-10 md:pt-20 md:pb-32 text-center z-10">

                    {/* Headers */}
                    <div>
                        <p className="text-white font-medium text-[0.95rem] md:text-lg mb-1">Simple Process</p>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">How It Works</h2>
                        <p className="text-white/80 text-base md:text-2xl">
                            Getting started takes just minutes. Three simple steps to your personalized learning journey.
                        </p>
                    </div>

                    {/* Glow and Cards Container */}
                    <div className="relative w-full max-w-[750px] mx-auto p-6 md:p-12 bg-gradient-to-t from-[#b378c8] via-[#c5b9c5c5] to-[#f7f7f70e] backdrop-blur-xl border border-white/20 rounded-[2rem] md:rounded-[3rem] shadow-xl flex justify-center items-center">

                        {/* Subtle glow background behind cards */}
                        <div className="absolute w-[120%] h-[150%] bg-white/10 blur-[80px] rounded-full -z-10"></div>

                        {/* Stacked Cards Container */}
                        <div className="relative w-full max-w-[500px] h-[370px] sm:h-[360px] md:h-[340px] lg:h-[320px]">
                            {stepsData.map((step, index) => (
                                <div
                                    key={step.id}
                                    ref={(el) => (cardsRef.current[index] = el)}
                                    className={`absolute inset-0 bg-gradient-to-br ${step.bgClass} rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-2xl flex flex-col text-left border-1 border-white/60 origin-center will-change-transform`}
                                    style={{ zIndex: index }}
                                >

                                    <div className="flex justify-between items-start mb-4 md:mb-6">
                                        <div className="w-[3.5rem] h-[3.5rem] md:w-[4.5rem] md:h-[4.5rem] bg-gradient-to-b from-white/90 to-white/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-white">
                                            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15 10L21 5.5V18.5L15 14V17.5C15 18.8807 13.8807 20 12.5 20H4.5C3.11929 20 2 18.8807 2 17.5V6.5C2 5.11929 3.11929 4 4.5 4H12.5C13.8807 4 15 5.11929 15 6.5V10Z" fill={`url(#video-grad-${index})`} />
                                                <defs>
                                                    <linearGradient id={`video-grad-${index}`} x1="2" y1="4" x2="21" y2="20" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#6230AB" />
                                                        <stop offset="1" stopColor="#a768d4" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <span className="text-white font-extrabold text-[1.4rem] md:text-[1.75rem] drop-shadow-md">{step.id}</span>
                                    </div>

                                    <h3 className="text-[1.4rem] md:text-[1.8rem] font-bold text-[#ffff] mb-2 md:mb-4 tracking-tight">
                                        {step.titleStart} <span className="">{step.titleHighlight}</span> {step.titleEnd}
                                    </h3>

                                    <p className="text-[#151515] font-medium text-[0.95rem] md:text-[1.05rem] max-w-full md:max-w-[85%] leading-[1.4] md:leading-[1.6]">
                                        {step.desc}
                                    </p>

                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default HowitWorks